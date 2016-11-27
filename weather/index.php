<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
	*,body,html{line-height:normal;margin:0;padding:0;font-family:arial,sans-serif;font-size:14px;color:#000}html{overflow-y:scroll;font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a,em,h1,h2,h3,h4,h5,h6,img,li,p,strong,table,tbody,td,tfoot,th,thead,tr,ul{margin:0;padding:0;border:none;font-weight:400;font-style:normal;font-size:100%;font-family:inherit}li,ol,ul{list-style:none}.clearfix:after{content:" ";display:block;clear:both;line-height:0;height:0}html[xmlns] .clearfix{display:block}*html .clearfix{height:1%}.CL{clear:both}a,a.active{text-decoration:none;outline:0}

	.TAC{text-align: center}
	.weather{width: 355px; margin: 0 auto; background: url("bg.jpg") no-repeat center center; box-sizing: border-box; padding: 15px; color: #fff;}
	.weather table{width: 100%; border-spacing:0; border-collapse: collapse;}
	.weather table tr td{ width: 50%; }
	.weather table tr td h3{ text-transform: uppercase; font-weight: bold; font-size: 20px; color: #fff;}
	.weather table tr td .date{ text-align: right; font-size: 12px; font-weight: bold; color: #fff; }
	.weather table tr td .temp{font-size: 15px; vertical-align: top; color: #fff; }
	.weather table tr td .weatherImg{height: 60px; width: 60px;}
	.weather table tr td .temp span{font-size: 35px; vertical-align: top; color: #fff;}
	.weather table tr td .data{font-size: 12px; padding: 5px 0; color: #fff; }
	.weather table tr td .data span{color: #fff;}
</style>
</head>
<body>
<div>
	Select Country:
	<select id="countryList" onchange="cityList()">
	<option value="0">Select Country</option>
	</select><br><br>
	Select City:
	<select id="cityList" style="width: 200px" onchange="crnt_weather()">
		
	</select>
</div>
<div class="weather">
	<table>
		<tr>
			<td>
			<h3>today</h3>
			</td>
			<td><p class="date" id="date">June, 06</p></td>
		</tr>
		<tr>
			<td><p class="temp"><span id="temp">26</span> &#x2103</p></td>
			<td class="TAC"><img src="images/clear.png" id="weatherImg" alt="" class="weatherImg"></td>
		</tr>
		<tr>
			<td>
				<p class="data">Humidity : <span id="humidity">18</span> %</p>
				<p class="data">Wind : <span id="wind">4</span> mph</p>
			</td>
			<td>
				<p class="data">Max-Temperature : <span id="max_temp">18</span> %</p>
				<p class="data">Max-Temperature : <span id="min_temp">4</span> mph</p>
			</td>
		</tr>
	</table>
</div>
<script src="script.js"></script>
</body>
</html>