const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files (for the front-end)
app.use(express.static('public'));

// Handle prescription uploads
app.post('/upload', upload.single('prescription'), (req, res) => {
    // Process the uploaded prescription (add your logic here)
    const prescriptionFile = req.file;

    // For now, just send a success message
    res.status(200).json({ message: 'Prescription uploaded successfully.' });
});

// Serve the HTML file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
