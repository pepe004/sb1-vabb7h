import { useState, useEffect } from 'react';
import { databases } from '@/lib/appwrite';
import { useUserStore } from '@/lib/store';

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      fetchConversations();
    }
  }, [user]);

  const fetchConversations = async () => {
    try {
      const response = await databases.listDocuments('YOUR_DATABASE_ID', 'conversations', [
        Query.equal('participants', user.$id),
      ]);
      setConversations(response.documents);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.$id}>
            <a href={`/messages/${conversation.$id}`}>
              {conversation.participants.find((p) => p !== user.$id)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}