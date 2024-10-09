import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { databases } from '@/lib/appwrite';

export default function CreatorProfile() {
  const [creator, setCreator] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchCreator();
    }
  }, [id]);

  const fetchCreator = async () => {
    try {
      const response = await databases.getDocument('YOUR_DATABASE_ID', 'creators', id as string);
      setCreator(response);
    } catch (error) {
      console.error('Error fetching creator:', error);
    }
  };

  if (!creator) return <div>Loading...</div>;

  return (
    <div>
      <h1>{creator.name}</h1>
      <p>{creator.bio}</p>
      {/* Add more creator details and components */}
    </div>
  );
}