import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Monitor, UserCircle2, Bell, WifiOff, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Updated to match backend Website shape
type Website = {
  id: number;
  url: string;
  email?: string;
  status: string;
};

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [websites, setWebsites] = useState<Website[]>([]);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return navigate('/signin');

      setUserEmail(user.email || '');

      const { data: profileData } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', user.id)
        .single();

      setUserName(profileData?.name || 'there');
      await fetchStatus();
      requestNotificationPermission();
    };

    initialize();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await fetch('http://localhost:5000/websites');
      const data: Website[] = await response.json();
      data.forEach(site => {
        if (site.status === 'down') notifyDown(site.url);
      });
      setWebsites(data);
    } catch (err) {
      console.error('Failed to fetch statuses:', err);
    }
  };

  const notifyDown = (url: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`🚨 Your website ${url} is down!! alert`);
    }
  };

  const handleAddWebsite = async () => {
    setError('');
    const trimmedUrl = url.trim();
  
    if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
      return setError('URL must start with http:// or https://');
    }
    if (!userEmail) return setError('User email not loaded.');
  
    try {
      const response = await fetch('http://localhost:5000/add-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: trimmedUrl, email: userEmail }),
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong.');
  
      setUrl('');
      await fetchStatus();
    } catch (err: any) {
      setError(err.message);
    }
  };
  

  const deleteWebsite = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:5000/delete-website/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Delete failed: ${errText}`);
      }

      const result = await res.json();
      console.log('✅ Deleted:', result.message);
      setWebsites(prev => prev.filter(site => site.id !== id));
    } catch (err: any) {
      console.error('❌ Delete error:', err.message);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/signin');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030B1A] text-white pt-28">
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, 300, 0], y: [0, 300, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-800 rounded-full filter blur-2xl opacity-20"
        animate={{ x: [0, -200, 0], y: [0, -150, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-10"
        >
          <h1 className="text-4xl font-extrabold flex items-center gap-3">
            <UserCircle2 className="text-blue-300 w-10 h-10" />
            Hi, {userName}!
          </h1>
          <div className="flex items-center gap-6">
            <Bell className="w-6 h-6 cursor-pointer hover:text-blue-300 transition" />
            <div className="relative">
              <UserCircle2
                className="w-8 h-8 cursor-pointer hover:text-blue-300 transition"
                onClick={() => setShowProfile(prev => !prev)}
              />
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-60 bg-white text-black rounded-2xl shadow-2xl p-5"
                >
                  <p className="font-semibold text-lg mb-2">Your Profile</p>
                  <p className="text-sm text-gray-700 mb-1">Name: {userName}</p>
                  <p className="text-sm text-gray-700 mb-4">Email: {userEmail}</p>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left text-red-500 hover:underline"
                  >
                    Sign Out
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md mb-16 mx-auto max-w-xl"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Monitor className="text-blue-300 w-7 h-7" />
            Add Site to Monitor
          </h2>
          <div className="flex gap-3">
            <input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={e => setUrl(e.target.value)}
              className="flex-1 p-4 rounded-xl bg-white text-black placeholder-gray-500 border border-transparent focus:border-blue-500 transition"
            />
            <button
              onClick={handleAddWebsite}
              className="flex items-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              <PlusCircle className="w-6 h-6" />
              Add
            </button>
          </div>
          {error && <p className="text-red-400 mt-3">{error}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Monitored Websites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {websites.length > 0 ? (
              websites.map((site, idx) => (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className={`p-6 rounded-3xl shadow-2xl backdrop-blur-md flex justify-between items-start gap-4 hover:scale-105 transition ${
                    site.status === 'down' ? 'bg-red-600/20' : 'bg-white/10'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    {site.status === 'down' ? (
                      <WifiOff className="text-red-400 w-6 h-6" />
                    ) : (
                      <Monitor className="text-blue-300 w-6 h-6" />
                    )}
                    <div>
                      <p className="font-semibold truncate">{site.url}</p>
                      <p className="text-sm italic text-gray-300">Status: {site.status}</p>
                    </div>
                  </div>
                  <Trash2
                    className="text-red-400 cursor-pointer hover:text-red-600 transition"
                    onClick={() => deleteWebsite(site.id)}
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-gray-300 italic text-center col-span-full">No sites added yet.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
