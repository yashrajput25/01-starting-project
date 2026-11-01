import sql from 'better-sqlite3';
import { cache } from 'react';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}


/*
When getMessages will be called for the
first time it will get the data from the db
and cache it, but after that if there is any call fro getMessages
it will returned the cached data.
*/

export const getMessages = cache(() => {

  console.log('Fetching messages from db');
  return db.prepare('SELECT * FROM messages').all();
})

// export function getMessages() {
//   console.log('Fetching messages from db');
//   return db.prepare('SELECT * FROM messages').all();
// }
