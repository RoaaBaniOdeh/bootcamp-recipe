const fetchRecip = function(){
    $("#content").empty()
    let input=$("#ingred-name").val()
   $.get(`/recipes/${input}`,function(recipes){
    recipes.forEach(meal => {
            $("#content").append(`<div class="meal-info"><a href=${meal.href}>${meal.title} </a>  
            <div><ul>${meal.ingredients}<ul</div> 
            <img  src=${meal.thumbnail}>
            
            `)
        });
        
    })
}