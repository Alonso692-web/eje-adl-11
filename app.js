//Definir variables de mi servidor
const express = require('express'); //HTTP
const hbs = require('hbs');///HTML - Dinamicos
const bodyParser = require('body-parser'); //Procesar solicitudes POST
const port = process.env.PORT || 3000; //Puerto

const app = express();
//Motor de vistas HTML Dinámicos
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definiri las rutas
app.post('/dashboard',(req,res)=>{
    res.render('dashboard',{
        nombre: "Alonso Dominguez Lopez",
        email: "alonso@gmail.com"
    })//Vista dinámica - HTML Dinamico
})
//res.send('Aqui va el dash')//Texto
//res.sendFile('dashboard.html')//Archivo - HTML

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log('El servidor express se está corriendo en el puerto: ',port)
})