import { Account, Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('YOUR_PROJECT_ID'); // Replace with your Appwrite project ID

export const account = new Account(client);
export const databases = new Databases(client);

export { client };