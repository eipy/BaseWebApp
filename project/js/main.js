
$(document).ready(function(){
 getWeather();
})

function getWeather(searchQuery) {
 var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&appid="+apiKey;

 $(".city").text("");
 $(".temp").text("");
 $(".humidity").text("");
 $(".rain").text("");
 $(".error-message").text("");

 $.ajax(url, {success: function(data){
 	$(".city").text(data.name);
	$(".temp").text(data.main.temp);
	$(".humidity").text(data.main.humidity+"%");
	$(".rain").text(data.rain);
	console.log(data);
}, error: function(error){
	$(".error-message").text("An error occured");
}})
}

function searchWeather() {
 var searchQuery = $(".search").val();
 getWeather(searchQuery);
 
}

function handleSignIn() {
 var provider = new firebase.auth.GoogleAuthProvider();

 firebase.auth().signInWithPopup(provider).then(function(result) {
	//this gives you a google access token. You can use it to access the Google API. 
	var token = result.credential.accessToken;
	//the signed-in user info.
	var user = result.user;
	console.log(user);
	}).catch(function(error) {
	var errorCode = error.code;
	var errorMessage = error.message;
	var email = error.email;
	var credential = error.credential;
	});

}
