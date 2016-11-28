var cuntry_srt;
function crnt_weather(){
	var option = document.getElementById("cityList").getElementsByTagName("option");
 	for(var x=0; x<option.length; x++){
        if(option[x].selected) var city = option[x].text;
 	}
 	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.apixu.com/v1/current.json?key=266904ef3f224f84b1481917162811&q="+city;
	xmlhttp.open("GET", url);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var data = JSON.parse(xmlhttp.responseText);
	        document.getElementById("temp").innerHTML = data.current.temp_c;
	        document.getElementById("humidity").innerHTML = data.current.humidity;
	        document.getElementById("wind").innerHTML = data.current.wind_mph;
	        document.getElementById("weatherImg").src= data.current.condition.icon;
	        console.log(data.location.localtime);
	        var d = data.location.localtime;
	        d = d.split(" ");
	        document.getElementById("date").src= data.current.condition.icon;
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

window.onload = function() {
	countryList();
};
