// const express = require('express');
// const cors = require('cors');
// const serverless = require('serverless-http');

// const app = express();
// //const port = 3010;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// //Routes
// const reportRoute = require('./Routes/report.route');
// const divisionRoute = require('./Routes/division.route');
// const authRoutes = require('./Routes/auth.route');

// app.use('/api',reportRoute);
// app.use('/api', divisionRoute);
// app.use('/api/auth', authRoutes);

// app.use('/uploads', express.static('uploads'));

// //Init DB
// const {initDB} = require('./Models');
// initDB();

// //Server
// // app.listen(port, ()=>{
// //     console.log ('simpal server runing on port '+ port)
// // })

// app.get('/', (req, res) => {
//   res.send('Simpal Backend API is running');
// });

// // Export handler untuk Vercel
// module.exports = app;
// module.exports.handler = serverless(app);


const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

app.use(cors({
  origin: 'https://simpal-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const reportRoute = require('./Routes/report.route');
const divisionRoute = require('./Routes/division.route');
const authRoutes = require('./Routes/auth.route');

app.use('/api', reportRoute);
app.use('/api', divisionRoute);
app.use('/api/auth', authRoutes);

app.use('/uploads', express.static('uploads'));

// Init DB
const { initDB } = require('./Models');
initDB();

// Serverless export for Vercel
app.get('/', (req, res) => {
  res.send('Simpal Backend API is running');
});

module.exports = app;
module.exports.handler = serverless(app);
