import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fetch from 'node-fetch';
import notifier from 'node-notifier';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
app.use(express.json());

let websites = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', // replace with your Gmail
    pass: '',       // your Gmail app password
  },
});

// Send email utility
const sendEmail = async (to, url) => {
  try {
    await transporter.sendMail({
      from: '"Downtime Monitor" <your_email@gmail.com>',
      to,
      subject: `🚨 Website Down Alert: ${url}`,
      text: `Your website ${url} is down! Please check immediately.`,
    });
    console.log(`✅ Email sent to ${to} for ${url}`);
  } catch (err) {
    console.error(`❌ Error sending email to ${to}:`, err.message);
  }
};

// Send desktop notification
const sendDesktopNotification = (url) => {
  notifier.notify({
    title: '🚨 Website Down Alert!',
    message: `Your website ${url} is DOWN!`,
    icon: path.join(__dirname, 'down.png'), // optional: use a real icon
    sound: true,
    wait: false,
  });
  console.log(`🖥️ Desktop notification sent for ${url}`);
};

// Periodic monitoring function
const checkWebsites = async () => {
  for (let site of websites) {
    let newStatus = 'up';

    try {
      const response = await fetch(site.url, { timeout: 2000 });
      newStatus = response.ok ? 'up' : 'down';
    } catch (err) {
      newStatus = 'down';
    }

    // Only act if status changes
    if (site.status !== newStatus) {
      site.status = newStatus; // update status immediately

      if (newStatus === 'down') {
        await sendEmail(site.email, site.url);
        sendDesktopNotification(site.url);
        console.log(`❌ ${site.url} is DOWN! Notifications sent.`);
      } else {
        console.log(`✅ ${site.url} is back UP.`);
      }
    }
  }
};

// Run monitor every 20 seconds
setInterval(checkWebsites, 20 * 1000);

// POST: Add website
app.post('/add-website', (req, res) => {
  const { url, email } = req.body;
  if (!url || !email) return res.status(400).json({ error: 'URL and email are required' });

  const id = websites.length + 1;
  websites.push({ id, url, email, status: 'unknown' });
  res.json({ message: 'Website added successfully', id });
});

// DELETE: Remove website
app.delete('/delete-website/:id', (req, res) => {
  const id = parseInt(req.params.id);
  websites = websites.filter(site => site.id !== id);
  res.json({ message: 'Website deleted' });
});

// GET: List all monitored websites
app.get('/websites', (req, res) => {
  res.json(websites);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
