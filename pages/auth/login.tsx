import { useState } from 'react';
import { account } from '@/lib/appwrite';
import { useRouter } from 'next/router';
import { useUserStore } from '@/lib/store';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();
      setUser(user);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
      <button type="submit">Log In</button>
    </form>
  );
}