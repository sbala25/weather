var cuntry_srt;
function crnt_weather(){
	var option = document.getElementById("cityList").getElementsByTagName("option");
 	for(var x=0; x<option.length; x++){
        if(option[x].selected) var city = option[x].text;
 	}
 	var xmlhttp = new XMLHttpRequest();
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+cuntry_srt+"&units=metric&appid=fdb965a12b44e06397546d0d8f8c1694";
	xmlhttp.open("GET", url);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var data = JSON.parse(xmlhttp.responseText);
	        document.getElementById("temp").innerHTML = data.main.temp;
	        document.getElementById("humidity").innerHTML = data.main.humidity;
	        document.getElementById("wind").innerHTML = data.wind.speed;
	        document.getElementById("max_temp").innerHTML = data.main.temp_max;
	        document.getElementById("min_temp").innerHTML = data.main.temp_min;
	        weartherImages(data.weather[0].main);
	    }
	};
}
 function cityList(){
 	var option = document.getElementById("countryList").getElementsByTagName("option");
 	for(var x=0; x<option.length; x++){
        if(option[x].selected){
        	cuntry_srt = option[x].value;
        var Name = option[x].text;
        }
 	}
 	var xmlhttp = new XMLHttpRequest();
	var url = "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json";
	xmlhttp.open("GET", url);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var data = JSON.parse(xmlhttp.responseText);
	        var city = data[Name].sort();
	         for (var i = 0; i < city.length; i++) {
	         	insert_city(city[i]);
	        }
	        startCity();
	        crnt_weather();
	    }
	};
 };
function insert_city(city){
	var result = document.getElementById("cityList");
	var node = document.createElement("option");
	var textnode = document.createTextNode(city);
	node.appendChild(textnode);
	result.appendChild(node);
}
function insert_country(country, val){
	var result = document.getElementById("countryList");
	var node = document.createElement("option");
	node.value = val;
	var textnode = document.createTextNode(country);
	node.appendChild(textnode);
	result.appendChild(node);
}

// read country
 function countryList(){
 	var xmlhttp = new XMLHttpRequest();
	var url = "country.json";
	xmlhttp.open("GET", url);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var data = JSON.parse(xmlhttp.responseText);
	        for(var i = 0; i < data.length; i++) {
	        	insert_country(data[i].name, data[i].code);
	        }
	        startCnt();
	        cityList();
	    }
	};
};

function startCnt(){
		var option = document.getElementById("countryList").getElementsByTagName("option");
	 	for(var x=0; x<option.length; x++){
	        if(option[x].value == "IN"){
	        	option[x].selected = true;
        }
 	}
}
function startCity(){
		var option = document.getElementById("cityList").getElementsByTagName("option");
	 	for(var x=0; x<option.length; x++){
	        if(option[x].text == "Kolkata"){
	        	option[x].selected = true;
        }
 	}
}

function weartherImages(e){
	e = e.toLowerCase();
	console.log(e);
	clear = e.indexOf("clear")> -1;
	cloud = e.indexOf("cloud")> -1;
	rain = e.indexOf("rain")> -1;
	snow = e.indexOf("snow")> -1;
	storm = e.indexOf("snow")> -1;
	smoke = e.indexOf("smoke")> -1;
	haze = e.indexOf("haze")> -1;
	if (clear) image("clear");
	if (cloud) image("cloud");
	if (rain) image("rain");
	if (snow) image("snow");
	if (storm) image("storm");
	if (smoke) image("smoke");
	if (haze) image("haze");
	function image(img){
		document.getElementById("weatherImg").src="images/"+img+".png";
	}
}
window.onload = function() {
	countryList();
};