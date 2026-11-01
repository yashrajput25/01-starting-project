import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

//reserved name dynamic as well unstavle_nostore
export const revalidate = 20;

export default async function MessagesPage() {
  // const response = await fetch('http://localhost:8080/messages');
  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
