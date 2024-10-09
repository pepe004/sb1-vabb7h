import { useState, useEffect } from 'react';
import { databases } from '@/lib/appwrite';
import { useUserStore } from '@/lib/store';

export default function ContentManagement() {
  const [contents, setContents] = useState([]);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      fetchContents();
    }
  }, [user]);

  const fetchContents = async () => {
    try {
      const response = await databases.listDocuments('YOUR_DATABASE_ID', 'contents', [
        Query.equal('creatorId', user.$id),
      ]);
      setContents(response.documents);
    } catch (error) {
      console.error('Error fetching contents:', error);
    }
  };

  const handleAddContent = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    try {
      await databases.createDocument('YOUR_DATABASE_ID', 'contents', 'unique()', {
        creatorId: user.$id,
        title,
        description,
      });
      fetchContents();
    } catch (error) {
      console.error('Error adding content:', error);
    }
  };

  return (
    <div>
      <h1>Content Management</h1>
      <form onSubmit={handleAddContent}>
        <input name="title" placeholder="Title" required />
        <textarea name="description" placeholder="Description" required />
        <button type="submit">Add Content</button>
      </form>
      <ul>
        {contents.map((content) => (
          <li key={content.$id}>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}