import { useState } from 'react';
import { useRouter } from 'next/router';
import { databases } from '@/lib/appwrite';
import { useUserStore } from '@/lib/store';

export default function CommissionRequest() {
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const user = useUserStore((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument('YOUR_DATABASE_ID', 'commissions', 'unique()', {
        creatorId: id,
        userId: user.$id,
        description,
        budget: parseFloat(budget),
        status: 'pending',
      });
      alert('Commission request sent!');
      setDescription('');
      setBudget('');
    } catch (error) {
      console.error('Error sending commission request:', error);
    }
  };

  return (
    <div>
      <h1>Request a Commission</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your commission request"
          required
        />
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Your budget"
          required
        />
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}