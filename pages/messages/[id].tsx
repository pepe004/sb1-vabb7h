import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { databases } from '@/lib/appwrite';
import { useUserStore } from '@/lib/store';

export default function Conversation() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (id && user) {
      fetchMessages();
    }
  }, [id, user]);

  const fetchMessages = async () => {
    try {
      const response = await databases.listDocuments('YOUR_DATABASE_ID', 'messages', [
        Query.equal('conversationId', id),
        Query.orderDesc('$createdAt'),
      ]);
      setMessages(response.documents);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument('YOUR_DATABASE_ID', 'messages', 'unique()', {
        conversationId: id,
        senderId: user.$id,
        content: newMessage,
      });
      setNewMessage('');
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Conversation</h1>
      <div>
        {messages.map((message) => (
          <div key={message.$id}>
            <strong>{message.senderId === user.$id ? 'You' : 'Other'}: </strong>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}