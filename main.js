// grab the input
//var input= document.querySelector("input").value;


document.querySelector(".js-go").addEventListener('click',function(){
    var inputValue= document.querySelector("input").value;
    var userInput = getUserInput();
    search(userInput);
});
document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    var inputValue= document.querySelector("input").value;
    
    if(e.which===13)
   { var userInput = getUserInput();
    search(userInput);
}
    
});
//evaluate the inout, when clicked
/* 2. do the data stuff with the API */
function search(input){

    var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + input;

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(data){
    var actualData = data.target.response;
            result(actualData);
            console.log(actualData);

});}
function getUserInput(){
var inputValue= document.querySelector('.js-userinput').value;
return inputValue;
}
//show the required gifs.
function result(input){
    var response= JSON.parse(input);
    var imageUrls = response.data;
    var container=document.querySelector(".js-container");
    container.innerHTML = "";
  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
  
    container.innerHTML+="<img src=\" "+src+"\" >"; });

}