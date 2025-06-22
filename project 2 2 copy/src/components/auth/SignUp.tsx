import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../config/supabaseClient';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Create user with additional metadata
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name, // store name in user_metadata
          },
        },
      });

      if (signUpError) throw new Error(signUpError.message);

      navigate('/signin');
    } catch (err: any) {
      console.error('Sign Up Error:', err.message);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
