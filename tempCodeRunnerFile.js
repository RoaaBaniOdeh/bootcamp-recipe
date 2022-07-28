const express=require('express')
const app = express()
const path = require('path')// package built-in to node
const axioss = require('axios')

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
  
let recipes = []



    
    
    
      






// Serving DATA
app.get('/sanity',function(req,res){
   
    res.send("ok")
})
-
app.get('/recipes/:ingredient',function(req,res){  
  axioss.get(`https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`)
  .then((result) => {
    recipes = result.data.results.map((recipe) => {
      return {
        ingredients: recipe.ingredients,
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        href: recipe.href,
      };
    });
    console.log(recipes);
    res.send(recipes)
  });
  
})


const port=8080
app.listen(port,function(){
    console.log("Server is running on port"+port)

})
