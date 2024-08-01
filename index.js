const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index'); 
});


app.use(express.static('public'));




app.get('/', (req, res) => {
  
    res.render('index', { user: req.user || null });
  });

  app.get("/play", (req,res) => {

res.render('play', {user: req.user ||null})

  })

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


  

 