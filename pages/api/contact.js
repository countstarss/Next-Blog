import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    const mongodb_uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.5gvy97r.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    try {
      client = await MongoClient.connect(
        // mongodb_uri
        // `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.5gvy97r.mongodb.net/${process.env.mongodb_database}`
        process.env.MONDODB_URI
      );
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Succussfully stored message!", values: newMessage });
  }
}

export default handler;



// MARK: - Google




// MARK: - Gemini

// import { MongoClient } from 'mongodb';
// import { validator } from 'validator'; // Assuming validator is installed

// async function connectDatabase() {
//   const uri = process.env.MONGODB_URI;
//   if (!uri) {
//     throw new Error('MONGODB_URI environment variable not set');
//   }
//   const client = await MongoClient.connect(uri);
//   return client;
// }

// async function storeMessage(client, collectionName, message) {
//   const db = client.db();
//   const errors = [];

//   if (!validator.isEmail(message.email)) {
//     errors.push('Invalid email format');
//   }

//   if (!message.name || message.name.trim() === '') {
//     errors.push('Name is required and cannot be empty');
//   }

//   if (!message.message || message.message.trim() === '') {
//     errors.push('Message is required and cannot be empty');
//   }

//   if (errors.length > 0) {
//     throw new Error(`Validation errors: ${errors.join(', ')}`);
//   }

//   const result = await db.collection(collectionName).insertOne(message);
//   message.id = result.insertedId;
//   return message;
// }

// async function handler(req, res) {
//   if (req.method === 'POST') {
//     let client;
//     try {
//       const { email, name, message } = req.body;

//       const newMessage = { email, name, message };
//       client = await connectDatabase();

//       const storedMessage = await storeMessage(client,'message',newMessage);
//       console.log('Stored message:', storedMessage);

//       res.status(201).json({ message: 'Success! Message submitted.' });
//       client.close();
//     } catch (error) {
//       console.error('Error:', error);
//       client.close();
//       res.status(500).json({ message: 'Internal Server Error' }); // Consider more specific error messages
//     } 
//     // finally {
//     //     await client.close();
//     // }
//   } else {
//     // Handle GET requests (implementation not shown)
//     res.status(200).json({ message: 'GET method work!' }); 
//   }
// }

// export default handler;
