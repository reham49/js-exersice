var param=new URLSearchParams(location.search);
var recipeId=param.get('rid');
var receipeDetails={};
var img=document.getElementById("detailsImg");
var link=document.getElementById("receipeLink")
var ingredients=[];
var httpRequest=new XMLHttpRequest();
httpRequest.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
httpRequest.send();
httpRequest.addEventListener("readystatechange",function(){
    if(httpRequest.readyState==4&&httpRequest.status==200)
    {
        receipeDetails=JSON.parse(httpRequest.response).recipe;
        img.src=receipeDetails.image_url;
        ingredients=receipeDetails.ingredients;
        link.href=receipeDetails.source_url;
        displayIngradients()
    }
})
function displayIngradients(){
    var lis=``;
    for(var i=0;i<ingredients.length;i++){
        lis+=`<li>${ingredients[i]}</li>`
    }
    document.getElementById("ingredientsUl").innerHTML=lis
}

