const express = require('express')
const port = 3000
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')
// const Show = require('./views/Show');
const app = express()



//Middleware

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

// Routes Here

// Show all
app.get('/fruits/', (req, res) => {
    res.render('IndexFruits', { fruits: fruits })
})

app.get('/vegetables/', (req, res) => {
    res.render('IndexVegetables', { vegetables: vegetables })
})



// get certain fruit
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('ShowFruit', { // second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray]
    })
})

app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('ShowVegetables', { // second param must be an object
        vegetables: vegetables[req.params.indexOfVegetablesArray]
    })
})

// Tell express to listen
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


// induces

// Index: show all things
// New: an empty form for a new thing
// Delete: get rif of this thing
// Update: update this specific thing
// Create: Make a new thing
// Edit: A prefilled form that needs to update a specific thing
// Show: Show ONE thing