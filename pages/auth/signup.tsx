import { useState } from 'react';
import { account } from '@/lib/appwrite';
import { useRouter } from 'next/router';
import { useUserStore } from '@/lib/store';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await account.create('unique()', email, password);
      await account.createEmailSession(email, password);
      setUser(response);
      router.push('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}