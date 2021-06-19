var API_KEY_GOOGLE = 'AIzaSyCQmcTCoxvxXpPHWwYQJG04bLkmtjbySjU';
var API_KEY_WEATHER = '86865297a8ae3ca28e0c00af2d260338';

function callGeocodingAPI(address, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) {
			return;
		}
		if (xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			if (data.results.length > 0) {
				callback({
					lat: data.results[0].geometry.location.lat,
					lng: data.results[0].geometry.location.lng
				});
			} else {
				callback(null);
			}
		} else {
			callback(null);
		}
	};
	xhr.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + API_KEY_GOOGLE);
	xhr.send();
}

function callWeatherAPI(lat,lon, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) {
			return;
		}
		if (xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			callback({

				//current
				currdt: data.current.dt,
				weather: data.current.weather[0].main,
				temperature: data.hourly[0].temp - 273.15,
				humidity: data.current.humidity,
				pressure: data.current.pressure,
				tempfeel: data.current.feels_like- 273.15,
				rainam: data.current.rain,
				wd: data.current.wind_deg,
				ws: data.current.wind_speed,


				//today
				td: data.daily[0].dt,
				tdw: data.daily[0].weather[0].main,
				tdtemp: data.daily[0].temp.day - 273.15,
				tdtemp_min: data.daily[0].temp.min - 273.15,
				tdtemp_max: data.daily[0].temp.max - 273.15,
				td_feel: data.daily[0].feels_like.day - 273.15,
				tdpress: data.daily[0].pressure,
				tdhumid: data.daily[0].humidity,
				tdwindsp: data.daily[0].wind_speed,
				tdwinddeg: data.daily[0].wind_deg,
				tdclouds: data.daily[0].clouds,
				tduvi: data.daily[0].uvi,
				tdrainam: data.daily[0].rain,
				tdsunr: data.daily[0].sunrise,
				tdsuns: data.daily[0].sunset,

				//tmorrow
				tm: data.daily[1].dt,
				tmw: data.daily[1].weather[0].main,
				tmtemp: data.daily[1].temp.day - 273.15,
				tmtemp_min: data.daily[1].temp.min - 273.15,
				tmtemp_max: data.daily[1].temp.max - 273.15,
				tm_feel: data.daily[1].feels_like.day - 273.15,
				tmpress: data.daily[1].pressure,
				tmhumid: data.daily[1].humidity,
				tmwindsp: data.daily[1].wind_speed,
				tmwinddeg: data.daily[1].wind_deg,
				tmclouds: data.daily[1].clouds,
				tmuvi: data.daily[1].uvi,
				tmrainam: data.daily[1].rain,
				tmsunr: data.daily[1].sunrise,
				tmsuns: data.daily[1].sunset,

				//daily 2日後
				sec: data.daily[2].dt,
				secw: data.daily[2].weather[0].main,
				sectemp: data.daily[2].temp.day - 273.15,
				sectemp_min: data.daily[2].temp.min - 273.15,
				sectemp_max: data.daily[2].temp.max - 273.15,
				sechumid: data.daily[2].humidity,
				secwindsp: data.daily[2].wind_speed,
				secwinddeg: data.daily[2].wind_deg,

				//daily 3日後
				thir: data.daily[3].dt,
				thirw: data.daily[3].weather[0].main,
				thirtemp: data.daily[3].temp.day - 273.15,
				thirtemp_min: data.daily[3].temp.min - 273.15,
				thirtemp_max: data.daily[3].temp.max - 273.15,
				thirhumid: data.daily[3].humidity,
				thirwindsp: data.daily[3].wind_speed,
				thirwinddeg: data.daily[3].wind_deg,

				//daily 4日後
				four: data.daily[4].dt,
				fourw: data.daily[4].weather[0].main,
				fourtemp: data.daily[4].temp.day - 273.15,
				fourtemp_min: data.daily[4].temp.min - 273.15,
				fourtemp_max: data.daily[4].temp.max - 273.15,
				fourhumid: data.daily[4].humidity,
				fourwindsp: data.daily[4].wind_speed,
				fourwinddeg: data.daily[4].wind_deg,

				//daily 5日後
				fif: data.daily[5].dt,
				fifw: data.daily[5].weather[0].main,
				fiftemp: data.daily[5].temp.day - 273.15,
				fiftemp_min: data.daily[5].temp.min - 273.15,
				fiftemp_max: data.daily[5].temp.max - 273.15,
				fifhumid: data.daily[5].humidity,
				fifwindsp: data.daily[5].wind_speed,
				fifwinddeg: data.daily[5].wind_deg,

				//daily 6日後
				six: data.daily[6].dt,
				sixw: data.daily[6].weather[0].main,
				sixtemp: data.daily[6].temp.day - 273.15,
				sixtemp_min: data.daily[6].temp.min - 273.15,
				sixtemp_max: data.daily[6].temp.max - 273.15,
				sixhumid: data.daily[6].humidity,
				sixwindsp: data.daily[6].wind_speed,
				sixwinddeg: data.daily[6].wind_deg,

				//daily 7日後
				sev: data.daily[7].dt,
				sevw: data.daily[7].weather[0].main,
				sevtemp: data.daily[7].temp.day - 273.15,
				sevtemp_min: data.daily[7].temp.min - 273.15,
				sevtemp_max: data.daily[7].temp.max - 273.15,
				sevhumid: data.daily[7].humidity,
				sevwindsp: data.daily[7].wind_speed,
				sevwinddeg: data.daily[7].wind_deg,

				//daily 8日後
				ei: data.daily[1].dt,
				eiw: data.daily[1].weather[0].main,
				eitemp: data.daily[1].temp.day - 273.15,
				eitemp_min: data.daily[1].temp.min - 273.15,
				eitemp_max: data.daily[1].temp.max - 273.15,
				eihumid: data.daily[1].humidity,
				eiwindsp: data.daily[1].wind_speed,
				eiwinddeg: data.daily[1].wind_deg,

				//hourly 0hafter

				h0: data.hourly[1].dt,
				h0w: data.hourly[1].weather[0].main,
				h0tmp: data.hourly[1].temp - 273.15,
				h0ram: data.hourly[1].rain,
				h0wd: data.hourly[1].wind_deg,
				h0ws: data.hourly[1].wind_speed,

				//hourly 1h after
				h1: data.hourly[2].dt,
				h1w: data.hourly[2].weather[0].main,
				h1tmp: data.hourly[2].temp - 273.15,
				h1ram: data.hourly[2].rain,
				h1wd: data.hourly[2].wind_deg,
				h1ws: data.hourly[2].wind_speed,

				//hourly 2h after
				h2: data.hourly[3].dt,
				h2w: data.hourly[3].weather[0].main,
				h2tmp: data.hourly[3].temp - 273.15,
				h2ram: data.hourly[3].rain,
				h2wd: data.hourly[3].wind_deg,
				h2ws: data.hourly[3].wind_speed,

				//hourly 3h after
				h3: data.hourly[4].dt,
				h3w: data.hourly[4].weather[0].main,
				h3tmp: data.hourly[4].temp - 273.15,
				h3ram: data.hourly[4].rain,
				h3wd: data.hourly[4].wind_deg,
				h3ws: data.hourly[4].wind_speed,

				//hourly 4h after
				h4: data.hourly[5].dt,
				h4w: data.hourly[5].weather[0].main,
				h4tmp: data.hourly[5].temp - 273.15,
				h4ram: data.hourly[5].rain,
				h4wd: data.hourly[5].wind_deg,
				h4ws: data.hourly[5].wind_speed,

				//hourly 5h after
				h5: data.hourly[6].dt,
				h5w: data.hourly[6].weather[0].main,
				h5tmp: data.hourly[6].temp - 273.15,
				h5ram: data.hourly[6].rain,
				h5wd: data.hourly[6].wind_deg,
				h5ws: data.hourly[6].wind_speed,

				//hourly 6h after
				h6: data.hourly[7].dt,
				h6w: data.hourly[7].weather[0].main,
				h6tmp: data.hourly[7].temp - 273.15,
				h6ram: data.hourly[7].rain,
				h6wd: data.hourly[7].wind_deg,
				h6ws: data.hourly[7].wind_speed,

				//hourly 7h after
				h7: data.hourly[8].dt,
				h7w: data.hourly[8].weather[0].main,
				h7tmp: data.hourly[8].temp - 273.15,
				h7ram: data.hourly[8].rain,
				h7wd: data.hourly[8].wind_deg,
				h7ws: data.hourly[8].wind_speed,

				//hourly 8h after
				h8: data.hourly[9].dt,
				h8w: data.hourly[9].weather[0].main,
				h8tmp: data.hourly[9].temp - 273.15,
				h8ram: data.hourly[9].rain,
				h8wd: data.hourly[9].wind_deg,
				h8ws: data.hourly[9].wind_speed,

				//hourly 9h after
				h9: data.hourly[10].dt,
				h9w: data.hourly[10].weather[0].main,
				h9tmp: data.hourly[10].temp - 273.15,
				h9ram: data.hourly[10].rain,
				h9wd: data.hourly[10].wind_deg,
				h9ws: data.hourly[10].wind_speed,

				//hourly 10h after
				h10: data.hourly[11].dt,
				h10w: data.hourly[11].weather[0].main,
				h10tmp: data.hourly[11].temp - 273.15,
				h10ram: data.hourly[11].rain,
				h10wd: data.hourly[11].wind_deg,
				h10ws: data.hourly[11].wind_speed,

				//hourly 11h after
				h11: data.hourly[12].dt,
				h11w: data.hourly[12].weather[0].main,
				h11tmp: data.hourly[12].temp - 273.15,
				h11ram: data.hourly[12].rain,
				h11wd: data.hourly[12].wind_deg,
				h11ws: data.hourly[12].wind_speed,

				//hourly 12h after
				h12: data.hourly[13].dt,
				h12w: data.hourly[13].weather[0].main,
				h12tmp: data.hourly[13].temp - 273.15,
				h12ram: data.hourly[13].rain,
				h12wd: data.hourly[13].wind_deg,
				h12ws: data.hourly[13].wind_speed,

				//hourly 13h after
				h13: data.hourly[14].dt,
				h13w: data.hourly[14].weather[0].main,
				h13tmp: data.hourly[14].temp - 273.15,
				h13ram: data.hourly[14].rain,
				h13wd: data.hourly[14].wind_deg,
				h13ws: data.hourly[14].wind_speed,

				//hourly 14h after
				h14: data.hourly[15].dt,
				h14w: data.hourly[15].weather[0].main,
				h14tmp: data.hourly[15].temp - 273.15,
				h14ram: data.hourly[15].rain,
				h14wd: data.hourly[15].wind_deg,
				h14ws: data.hourly[15].wind_speed,

				//hourly 15h after
				h15: data.hourly[16].dt,
				h15w: data.hourly[16].weather[0].main,
				h15tmp: data.hourly[16].temp - 273.15,
				h15ram: data.hourly[16].rain,
				h15wd: data.hourly[16].wind_deg,
				h15ws: data.hourly[16].wind_speed,

				//hourly 16h after
				h16: data.hourly[17].dt,
				h16w: data.hourly[17].weather[0].main,
				h16tmp: data.hourly[17].temp - 273.15,
				h16ram: data.hourly[17].rain,
				h16wd: data.hourly[17].wind_deg,
				h16ws: data.hourly[17].wind_speed,

				//hourly 17h after
				h17: data.hourly[18].dt,
				h17w: data.hourly[18].weather[0].main,
				h17tmp: data.hourly[18].temp - 273.15,
				h17ram: data.hourly[18].rain,
				h17wd: data.hourly[18].wind_deg,
				h17ws: data.hourly[18].wind_speed,

				//hourly 18h after
				h18: data.hourly[19].dt,
				h18w: data.hourly[19].weather[0].main,
				h18tmp: data.hourly[19].temp - 273.15,
				h18ram: data.hourly[19].rain,
				h18wd: data.hourly[19].wind_deg,
				h18ws: data.hourly[19].wind_speed,

				//hourly 19h after
				h19: data.hourly[20].dt,
				h19w: data.hourly[20].weather[0].main,
				h19tmp: data.hourly[20].temp - 273.15,
				h19ram: data.hourly[20].rain,
				h19wd: data.hourly[20].wind_deg,
				h19ws: data.hourly[20].wind_speed,

				//hourly 20h after
				h20: data.hourly[21].dt,
				h20w: data.hourly[21].weather[0].main,
				h20tmp: data.hourly[21].temp - 273.15,
				h20ram: data.hourly[21].rain,
				h20wd: data.hourly[21].wind_deg,
				h20ws: data.hourly[21].wind_speed,

				//hourly 21h after
				h21: data.hourly[22].dt,
				h21w: data.hourly[22].weather[0].main,
				h21tmp: data.hourly[22].temp - 273.15,
				h21ram: data.hourly[22].rain,
				h21wd: data.hourly[22].wind_deg,
				h21ws: data.hourly[22].wind_speed,

				//hourly 20h after
				h22: data.hourly[23].dt,
				h22w: data.hourly[23].weather[0].main,
				h22tmp: data.hourly[23].temp - 273.15,
				h22ram: data.hourly[23].rain,
				h22wd: data.hourly[23].wind_deg,
				h22ws: data.hourly[23].wind_speed,

				//hourly 20h after
				h23: data.hourly[24].dt,
				h23w: data.hourly[24].weather[0].main,
				h23tmp: data.hourly[24].temp - 273.15,
				h23ram: data.hourly[24].rain,
				h23wd: data.hourly[24].wind_deg,
				h23ws: data.hourly[24].wind_speed,

				//hourly 20h after
				h24: data.hourly[25].dt,
				h24w: data.hourly[25].weather[0].main,
				h24tmp: data.hourly[25].temp - 273.15,
				h24ram: data.hourly[25].rain,
				h24wd: data.hourly[25].wind_deg,
				h24ws: data.hourly[25].wind_speed,


			});
		} else {
			callback(null);
		}
	};
	xhr.open('GET', 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+lon+'&appid='+API_KEY_WEATHER);
	xhr.send();
}
