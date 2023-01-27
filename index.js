const express = require('express');
const cors = require('cors');
const dpConnnector = require('./dbConnector');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    try {
      res.send("Connected Successfully")
    } catch (err) {
      console.error(err.message);
    }
  });

app.get('/v1/lake/products', async (req, res) => {
try {
    const userData = await dpConnnector.query("SELECT * FROM Products");
    res.json(userData[0]);
} catch (err) {
    console.error(err.message);
}
});
app.get('/v1/lake/customers', async (req, res) => {
    try {
        const userData = await dpConnnector.query("SELECT * FROM Customers");
        res.json(userData[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/v1/lake/salesperson', async (req, res) => {
    try {
        const userData = await dpConnnector.query("SELECT * FROM Salespersons");
        res.json(userData[0]);
    } catch (err) {
        console.error(err.message);
    }
});

const port = 5001;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})