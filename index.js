
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
//app.use(express.json());
app.use(express.text({ type: '*/*' }));
app.post('/submit-data', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'Data received successfully', data: receivedData });
    console.log(receivedData);
    const decodedData = Buffer.from(receivedData, 'base64').toString('utf-8');
    console.log(decodedData);

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})