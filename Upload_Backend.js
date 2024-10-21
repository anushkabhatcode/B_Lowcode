const express = require('express');
const multer = require('multer'); // For handling file uploads
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

// Configure Multer to store files in the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file)
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded!' });
  }

  // You can store the file in cloud storage or process it as needed
  res.json({ success: true, message: 'File uploaded successfully!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
