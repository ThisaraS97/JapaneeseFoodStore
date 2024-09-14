const { MongoClient } = require('mongodb');

// Use your MongoDB connection string
const url = 'mongodb+srv://thisara:Z7QBGBExtU28pFu@cluster0.v9pau.mongodb.net/JapaneeseFood?retryWrites=true&w=majority';
const dbName = 'JapaneeseFood';
const collectionName = 'Foods'; // Replace with your actual collection name

async function fetchData() {
  const client = new MongoClient(url);
  
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Select the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch all documents in the collection
    const data = await collection.find({}).toArray();
    
    if (data.length === 0) {
      console.log('No documents found in the collection.');
    } else {
      console.log('Fetched Data:', data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

fetchData();
