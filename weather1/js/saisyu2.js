

  function displaylatlng(result){

    callWeatherAPI(result.lat,result.lng, displayWeather);

  }
  
  function getWeather1() {
    var inputLatitude = document.getElementById('area');

    callGeocodingAPI(inputLatitude.value, displaylatlng);
  }
  


  
  function displayWeather(result) {
    //current
    var dateObj = new Date();
    dateObj.setTime(Number(result.currdt) * 1000);
    var month = dateObj.getMonth()+1;
    var date = dateObj.getDate();
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();

    var currmon =document.getElementById('currmon');
    currmon.textContent = month+'月';
    var currday =document.getElementById('currdate');
    currday.textContent = date+'日';
    var currhour =document.getElementById('currhour');
    currhour.textContent = hour+'時';
    var currmin =document.getElementById('currmin');
    currmin.textContent = minutes+'分';

    var city = document.getElementById('city');
    var weather = document.getElementById('weather');
    var temperature = document.getElementById('temperature');
    var humidity = document.getElementById('humidity');
    var pressure = document.getElementById('pressure');
    var wd = document.getElementById('wd');
    var ws = document.getElementById('ws');
    ws.textContent = result.ws;

    var wdd = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var wddd = Math.round( result.wd / 22.5 )
    wd.textContent =wdd[wddd];
    
    var inputLatitude = document.getElementById('area');
    var tempfeel = document.getElementById('feelintemp');
    
    tempfeel.textContent=Math.round(result.tempfeel);
    city.textContent = inputLatitude.value;
    if (result.weather=="Thunderstorm"){
      weather.textContent = "雷"
    }
    if (result.weather=="Drizzle"){
      weather.textContent = "霧雨"
    }
    if (result.weather=="Rain"){
      weather.textContent = "雨"
    }
    if (result.weather=="Clouds"){
      weather.textContent = "くもり"
    }
    if (result.weather=="Clear"){
      weather.textContent = "晴れ"
    }

    temperature.textContent =Math.round(result.temperature);
    humidity.textContent = result.humidity;
    pressure.textContent = result.pressure;
    
    var img = document.getElementById("img");
    if (result.weather == "Clouds"){
      img.src = "../png/03d@2x.png";
    }
    if (result.weather == "Rain"){
      img.src = "../png/09d@2x.png";
    }
    if (result.weather == "Clear"){
      img.src = "../png/01d@2x.png";
    }
    if (result.weather == "Drizzle"){
      img.src = "../png/09d@2x.png";
    }
    if (result.weather == "Thunderstorm"){
      img.src = "../png/11d@2x.png";
    }
    if (result.weather == "Snow"){
      img.src = "../png/13d@2x.png";
    }

    //today
    //-date
    var tddateObj = new Date();
    tddateObj.setTime(Number(result.td) * 1000);
    var tdmonth = tddateObj.getMonth()+1;
    var tddate = tddateObj.getDate();

    var tdmon =document.getElementById('tdmon');
    tdmon.textContent = tdmonth;
    var tddat =document.getElementById('tddate');
    tddat.textContent = tddate;

    //sunrise-time
    var tdsunrdateObj = new Date();
    tdsunrdateObj.setTime(Number(result.tdsunr) * 1000);
    var tdsunrhour = tdsunrdateObj.getHours();
    var tdsunrminutes = tdsunrdateObj.getMinutes();

    var tdsunrhourr =document.getElementById('tdsunrhour');
    tdsunrhourr.textContent = tdsunrhour;
    var tdsunrminutess =document.getElementById('tdsunrminutes');
    tdsunrminutess.textContent = tdsunrminutes;

    //sunset-time
    var tdsunsdateObj = new Date();
    tdsunsdateObj.setTime(Number(result.tdsuns) * 1000);
    var tdsunshour = tdsunsdateObj.getHours();
    var tdsunsminutes = tdsunsdateObj.getMinutes();

    var tdsunshourr =document.getElementById('tdsunshour');
    tdsunshourr.textContent = tdsunshour;
    var tdsunsminutess =document.getElementById('tdsunsminutes');
    tdsunsminutess.textContent = tdsunsminutes;

    var tdw = document.getElementById('tdw');
    var tdtemp = document.getElementById('tdtemp');
    var tdtemp_min = document.getElementById('tdtemp-min');
    var tdtemp_max = document.getElementById('tdtemp-max');
    var tdrainam = document.getElementById('tdrainam');
    var tdfeeltemp = document.getElementById('tdfeeltemp');
    var tdwinddeg = document.getElementById('tdwinddeg');
    var tdwindsp = document.getElementById('tdwindsp');
    var tdpress = document.getElementById('tdpress');
    var tdhumid = document.getElementById('tdhumid');
    var tduv = document.getElementById('tduv');

    var dname = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex = Math.round( result.tdwinddeg / 22.5 )
    tdwinddeg.textContent =dname[dindex];


    
    if (result.tdw=="Thunderstorm"){
      tdw.textContent = "雷"
    }
    if (result.tdw=="Drizzle"){
      tdw.textContent = "霧雨"
    }
    if (result.tdw=="Rain"){
      tdw.textContent = "雨"
    }
    if (result.tdw=="Clouds"){
      tdw.textContent = "くもり"
    }
    if (result.tdw=="Clear"){
      tdw.textContent = "晴れ"
    }

    tdtemp.textContent = Math.round(result.tdtemp);
    tdtemp_min.textContent = Math.round(result.tdtemp_min);
    tdtemp_max.textContent = Math.round(result.tdtemp_max);
    tdrainam.textContent = result.tdrainam;
    if(result.tdrainam== null){
      tdrainam.textContent="0";
    }
    tdfeeltemp.textContent = Math.round(result.td_feel);
    
    tdwindsp.textContent = result.tdwindsp;
    tdpress.textContent = result.tdpress;
    tdhumid.textContent = result.tdhumid;
    tduv.textContent = result.tduvi;

    var imgtd = document.getElementById("img-tdw");
    if (result.tdw == "Clouds"){
      imgtd.src = "../png/03d@2x.png";
    }
    if (result.tdw == "Rain"){
      imgtd.src = "../png/09d@2x.png";
    }
    if (result.tdw == "Clear"){
      imgtd.src = "../png/01d@2x.png";
    }
    if (result.tdw == "Drizzle"){
      imgtd.src = "../png/09d@2x.png";
    }
    if (result.tdw == "Thunderstorm"){
      imgtd.src = "../png/11d@2x.png";
    }
    if (result.tdw == "Snow"){
      imgtd.src = "../png/13d@2x.png";
    }

    var netu = document.getElementById("netu");
    if((result.tdtemp>27) ||　(64< result.tdhumid <71)){
      netu.textContent = "警戒してください！";
    }
    else if(result.tdhumid>70 || result.tdtemp>30){
      netu.textContent = "厳重警戒レベル";
    }
    else{
      netu.textContent = "安全";
    }

    var uv = document.getElementById("uv");
    if(result.tduvi>10){
      uv.textContent =  "極端に強いです！　日傘必須。日焼け止め、帽子を利用しましょう。"
    }
    else if(result.tduvi>7){
      uv.textContent =  "非常に強いです！　日傘必須。日焼け止め、帽子を利用しましょう。"
    }
    else if(result.tduvi>5){
      uv.textContent =  "強いです！　日傘があるとよいでしょう。できるだけ日陰を利用しましょう。日焼け止め、帽子を利用しましょう"
    }
    else if(result.tduvi>2){
      uv.textContent =  "中程度です。できるだけ日陰を利用しましょう。日焼け止め、帽子を利用しましょう"
    }
    else{
      uv.textContent =  "弱いです！　安心して斗外で過ごせます。"
    }


    

    //tmorrow
    //-date
    var tmdateObj = new Date();
    tmdateObj.setTime(Number(result.tm) * 1000);
    var tmmonth = tmdateObj.getMonth()+1;
    var tmdate = tmdateObj.getDate();

    var tmmon =document.getElementById('tmmon');
    tmmon.textContent = tmmonth;
    var tmdat =document.getElementById('tmdate');
    tmdat.textContent = tmdate;

    //sunrise-time
    var tmsunrdateObj = new Date();
    tmsunrdateObj.setTime(Number(result.tmsunr) * 1000);
    var tmsunrhour = tmsunrdateObj.getHours();
    var tmsunrminutes = tmsunrdateObj.getMinutes();

    var tmsunrhourr =document.getElementById('tmsunrhour');
    tmsunrhourr.textContent = tmsunrhour;
    var tmsunrminutess =document.getElementById('tmsunrminutes');
    tmsunrminutess.textContent = tmsunrminutes;

    //sunset-time
    var tmsunsdateObj = new Date();
    tmsunsdateObj.setTime(Number(result.tmsuns) * 1000);
    var tmsunshour = tmsunsdateObj.getHours();
    var tmsunsminutes = tmsunsdateObj.getMinutes();

    var tmsunshourr =document.getElementById('tmsunshour');
    tmsunshourr.textContent = tmsunshour;
    var tmsunsminutess =document.getElementById('tmsunsminutes');
    tmsunsminutess.textContent = tmsunsminutes;

    var tmw = document.getElementById('tmw');
    if (result.tmw=="Thunderstorm"){
      tmw.textContent = "雷"
    }
    if (result.tmw=="Drizzle"){
      tmw.textContent = "霧雨"
    }
    if (result.tmw=="Rain"){
      tmw.textContent = "雨"
    }
    if (result.tmw=="Clouds"){
      tmw.textContent = "くもり"
    }
    if (result.tmw=="Clear"){
      tmw.textContent = "晴れ"
    }

    var tmtemp = document.getElementById('tmtemp');
    var tmtemp_min = document.getElementById('tmtemp-min');
    var tmtemp_max = document.getElementById('tmtemp-max');
    var tmrainam = document.getElementById('tmrainam');
    var tmfeeltemp = document.getElementById('tmfeeltemp');
    var tmwinddeg = document.getElementById('tmwinddeg');

    var dname2 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex2 = Math.round( result.tmwinddeg / 22.5 )
    tmwinddeg.textContent =dname2[dindex2];

    var tmwindsp = document.getElementById('tmwindsp');
    var tmpress = document.getElementById('tmpress');
    var tmhumid = document.getElementById('tmhumid');
    var tmuv = document.getElementById('tmuv');
    tmtemp.textContent = Math.round(result.tmtemp);
    tmtemp_min.textContent = Math.round(result.tmtemp_min);
    tmtemp_max.textContent = Math.round(result.tmtemp_max);
    tmrainam.textContent = result.tmrainam;
    if(result.tmrainam== null){
      tmrainam.textContent="0";
    }
    tmfeeltemp.textContent = Math.round(result.tm_feel);
    tmwindsp.textContent = result.tmwindsp;
    tmpress.textContent = result.tmpress;
    tmhumid.textContent = result.tmhumid;
    tmuv.textContent = result.tmuvi;

    var imgtm = document.getElementById("img-tmw");
    if (result.tmw == "Clouds"){
      imgtm.src = "../png/03d@2x.png";
    }
    if (result.tmw == "Rain"){
      imgtm.src = "../png/09d@2x.png";
    }
    if (result.tmw == "Clear"){
      imgtm.src = "../png/01d@2x.png";
    }
    if (result.tmw == "Drizzle"){
      imgtm.src = "../png/09d@2x.png";
    }
    if (result.tmw == "Thunderstorm"){
      imgtm.src = "../png/11d@2x.png";
    }
    if (result.tmw == "Snow"){
      imgtm.src = "../png/13d@2x.png";
    }

    //hourly
    //hourly date define
    //0h
    var h0dateObj = new Date();
    h0dateObj.setTime(Number(result.h0) * 1000);

    var h0date = h0dateObj.getDate();
    var h0datee = document.getElementById('h0d');
    h0datee.textContent = h0date;

    var h0hour = h0dateObj.getHours();
    var h0hourr =document.getElementById('h0h');
    h0hourr.textContent = h0hour;

    //1h
    var h1dateObj = new Date();
    h1dateObj.setTime(Number(result.h1) * 1000);

    var h1date = h1dateObj.getDate();
    var h1datee = document.getElementById('h1d');
    h1datee.textContent = h1date;

    var h1hour = h1dateObj.getHours();
    var h1hourr =document.getElementById('h1h');
    h1hourr.textContent = h1hour;
    //0h
    var h2dateObj = new Date();
    h2dateObj.setTime(Number(result.h2) * 1000);

    var h2date = h2dateObj.getDate();
    var h2datee = document.getElementById('h2d');
    h2datee.textContent = h2date;

    var h2hour = h2dateObj.getHours();
    var h2hourr =document.getElementById('h2h');
    h2hourr.textContent = h2hour;
    //0h
    var h3dateObj = new Date();
    h3dateObj.setTime(Number(result.h3) * 1000);

    var h3date = h3dateObj.getDate();
    var h3datee = document.getElementById('h3d');
    h3datee.textContent = h3date;

    var h3hour = h3dateObj.getHours();
    var h3hourr =document.getElementById('h3h');
    h3hourr.textContent = h3hour;
    //0h
    var h4dateObj = new Date();
    h4dateObj.setTime(Number(result.h4) * 1000);

    var h4date = h4dateObj.getDate();
    var h4datee = document.getElementById('h4d');
    h4datee.textContent = h4date;

    var h4hour = h4dateObj.getHours();
    var h4hourr =document.getElementById('h4h');
    h4hourr.textContent = h4hour;
    //0h
    var h4dateObj = new Date();
    h4dateObj.setTime(Number(result.h4) * 1000);

    var h4date = h4dateObj.getDate();
    var h4datee = document.getElementById('h4d');
    h4datee.textContent = h4date;

    var h4hour = h4dateObj.getHours();
    var h4hourr =document.getElementById('h4h');
    h4hourr.textContent = h4hour;
    //0h
    var h5dateObj = new Date();
    h5dateObj.setTime(Number(result.h5) * 1000);

    var h5date = h5dateObj.getDate();
    var h5datee = document.getElementById('h5d');
    h5datee.textContent = h5date;

    var h5hour = h5dateObj.getHours();
    var h5hourr =document.getElementById('h5h');
    h5hourr.textContent = h5hour;
    //0h
    var h6dateObj = new Date();
    h6dateObj.setTime(Number(result.h6) * 1000);

    var h6date = h6dateObj.getDate();
    var h6datee = document.getElementById('h6d');
    h6datee.textContent = h6date;

    var h6hour = h6dateObj.getHours();
    var h6hourr =document.getElementById('h6h');
    h6hourr.textContent = h6hour;
    //0h
    var h7dateObj = new Date();
    h7dateObj.setTime(Number(result.h7) * 1000);

    var h7date = h7dateObj.getDate();
    var h7datee = document.getElementById('h7d');
    h7datee.textContent = h7date;

    var h7hour = h7dateObj.getHours();
    var h7hourr =document.getElementById('h7h');
    h7hourr.textContent = h7hour;
    //0h
    var h8dateObj = new Date();
    h8dateObj.setTime(Number(result.h8) * 1000);

    var h8date = h8dateObj.getDate();
    var h8datee = document.getElementById('h8d');
    h8datee.textContent = h8date;

    var h8hour = h8dateObj.getHours();
    var h8hourr =document.getElementById('h8h');
    h8hourr.textContent = h8hour;
    //0h
    var h9dateObj = new Date();
    h9dateObj.setTime(Number(result.h9) * 1000);

    var h9date = h9dateObj.getDate();
    var h9datee = document.getElementById('h9d');
    h9datee.textContent = h9date;

    var h9hour = h9dateObj.getHours();
    var h9hourr =document.getElementById('h9h');
    h9hourr.textContent = h9hour;
    //0h
    var h10dateObj = new Date();
    h10dateObj.setTime(Number(result.h10) * 1000);

    var h10date = h10dateObj.getDate();
    var h10datee = document.getElementById('h10d');
    h10datee.textContent = h10date;

    var h10hour = h10dateObj.getHours();
    var h10hourr =document.getElementById('h10h');
    h10hourr.textContent = h10hour;
    //0h
    var h11dateObj = new Date();
    h11dateObj.setTime(Number(result.h11) * 1000);

    var h11date = h11dateObj.getDate();
    var h11datee = document.getElementById('h11d');
    h11datee.textContent = h11date;

    var h11hour = h11dateObj.getHours();
    var h11hourr =document.getElementById('h11h');
    h11hourr.textContent = h11hour;
    //0h
    var h12dateObj = new Date();
    h12dateObj.setTime(Number(result.h12) * 1000);

    var h12date = h12dateObj.getDate();
    var h12datee = document.getElementById('h12d');
    h12datee.textContent = h12date;

    var h12hour = h12dateObj.getHours();
    var h12hourr =document.getElementById('h12h');
    h12hourr.textContent = h12hour;
    //0h
    var h13dateObj = new Date();
    h13dateObj.setTime(Number(result.h13) * 1000);

    var h13date = h13dateObj.getDate();
    var h13datee = document.getElementById('h13d');
    h13datee.textContent = h13date;

    var h13hour = h13dateObj.getHours();
    var h13hourr =document.getElementById('h13h');
    h13hourr.textContent = h13hour;
    //0h
    var h14dateObj = new Date();
    h14dateObj.setTime(Number(result.h14) * 1000);

    var h14date = h14dateObj.getDate();
    var h14datee = document.getElementById('h14d');
    h14datee.textContent = h14date;

    var h14hour = h14dateObj.getHours();
    var h14hourr =document.getElementById('h14h');
    h14hourr.textContent = h14hour;
    //0h
    var h15dateObj = new Date();
    h15dateObj.setTime(Number(result.h15) * 1000);

    var h15date = h15dateObj.getDate();
    var h15datee = document.getElementById('h15d');
    h15datee.textContent = h15date;

    var h15hour = h15dateObj.getHours();
    var h15hourr =document.getElementById('h15h');
    h15hourr.textContent = h15hour;
    //0h
    var h16dateObj = new Date();
    h16dateObj.setTime(Number(result.h16) * 1000);

    var h16date = h16dateObj.getDate();
    var h16datee = document.getElementById('h16d');
    h16datee.textContent = h16date;

    var h16hour = h16dateObj.getHours();
    var h16hourr =document.getElementById('h16h');
    h16hourr.textContent = h16hour;

    //0h
    var h17dateObj = new Date();
    h17dateObj.setTime(Number(result.h17) * 1000);

    var h17date = h17dateObj.getDate();
    var h17datee = document.getElementById('h17d');
    h17datee.textContent = h17date;

    var h17hour = h17dateObj.getHours();
    var h17hourr =document.getElementById('h17h');
    h17hourr.textContent = h17hour;
    
    //0h
    var h18dateObj = new Date();
    h18dateObj.setTime(Number(result.h18) * 1000);

    var h18date = h18dateObj.getDate();
    var h18datee = document.getElementById('h18d');
    h18datee.textContent = h18date;

    var h18hour = h18dateObj.getHours();
    var h18hourr =document.getElementById('h18h');
    h18hourr.textContent = h18hour;

    //0h
    var h19dateObj = new Date();
    h19dateObj.setTime(Number(result.h19) * 1000);

    var h19date = h19dateObj.getDate();
    var h19datee = document.getElementById('h19d');
    h19datee.textContent = h19date;

    var h19hour = h19dateObj.getHours();
    var h19hourr =document.getElementById('h19h');
    h19hourr.textContent = h19hour;

    //0h
    var h20dateObj = new Date();
    h20dateObj.setTime(Number(result.h20) * 1000);

    var h20date = h20dateObj.getDate();
    var h20datee = document.getElementById('h20d');
    h20datee.textContent = h20date;

    var h20hour = h20dateObj.getHours();
    var h20hourr =document.getElementById('h20h');
    h20hourr.textContent = h20hour;

    //0h
    var h21dateObj = new Date();
    h21dateObj.setTime(Number(result.h21) * 1000);

    var h21date = h21dateObj.getDate();
    var h21datee = document.getElementById('h21d');
    h21datee.textContent = h21date;

    var h21hour = h21dateObj.getHours();
    var h21hourr =document.getElementById('h21h');
    h21hourr.textContent = h21hour;

    //0h
    var h22dateObj = new Date();
    h22dateObj.setTime(Number(result.h22) * 1000);

    var h22date = h22dateObj.getDate();
    var h22datee = document.getElementById('h22d');
    h22datee.textContent = h22date;

    var h22hour = h22dateObj.getHours();
    var h22hourr =document.getElementById('h22h');
    h22hourr.textContent = h22hour;

    //23h 23時間目の日付と時間(hour)
    var h23dateObj = new Date();
    h23dateObj.setTime(Number(result.h23) * 1000);

    var h23date = h23dateObj.getDate();
    var h23datee = document.getElementById('h23d');
    h23datee.textContent = h23date;

    var h23hour = h23dateObj.getHours();
    var h23hourr =document.getElementById('h23h');
    h23hourr.textContent = h23hour;

    //24h 24時間目の日付と時間(hour)
    var h24dateObj = new Date();
    h24dateObj.setTime(Number(result.h24) * 1000);

    var h24date = h24dateObj.getDate();
    var h24datee = document.getElementById('h24d');
    h24datee.textContent = h24date;

    var h24hour = h24dateObj.getHours();
    var h24hourr =document.getElementById('h24h');
    h24hourr.textContent = h24hour;

    //0h weather 0時間目の天気

    var img0 = document.getElementById("h0w");
    if (result.h0w == "Clouds"){
      img0.src = "../png/03d@2x.png";
    }
    if (result.h0w == "Rain"){
      img0.src = "../png/09d@2x.png";
    }
    if (result.h0w == "Clear"){
      img0.src = "../png/01d@2x.png";
    }
    if (result.h0w == "Drizzle"){
      img0.src = "../png/09d@2x.png";
    }
    if (result.h0w == "Thunderstorm"){
      img0.src = "../png/11d@2x.png";
    }
    if (result.h0w == "Snow"){
      img0.src = "../png/13d@2x.png";
    }


    //1h weather
    var img1 = document.getElementById("h1w");
    if (result.h1w == "Clouds"){
      img1.src = "../png/03d@2x.png";
    }
    if (result.h1w == "Rain"){
      img1.src = "../png/09d@2x.png";
    }
    if (result.h1w == "Clear"){
      img1.src = "../png/01d@2x.png";
    }
    if (result.h1w == "Drizzle"){
      img1.src = "../png/09d@2x.png";
    }
    if (result.h1w == "Thunderstorm"){
      img1.src = "../png/11d@2x.png";
    }
    if (result.h1w == "Snow"){
      img1.src = "../png/13d@2x.png";
    }

    //2h weather
    var img2 = document.getElementById("h2w");
    if (result.h2w == "Clouds"){
      img2.src = "../png/03d@2x.png";
    }
    if (result.h2w == "Rain"){
      img2.src = "../png/09d@2x.png";
    }
    if (result.h2w == "Clear"){
      img2.src = "../png/01d@2x.png";
    }
    if (result.h2w == "Drizzle"){
      img2.src = "../png/09d@2x.png";
    }
    if (result.h2w == "Thunderstorm"){
      img2.src = "../png/11d@2x.png";
    }
    if (result.h2w == "Snow"){
      img2.src = "../png/13d@2x.png";
    }

    //3h weather
    var img3 = document.getElementById("h3w");
    if (result.h3w == "Clouds"){
      img3.src = "../png/03d@2x.png";
    }
    if (result.h3w == "Rain"){
      img3.src = "../png/09d@2x.png";
    }
    if (result.h3w == "Clear"){
      img.src = "../png/01d@2x.png";
    }
    if (result.h3w == "Drizzle"){
      img3.src = "../png/09d@2x.png";
    }
    if (result.h3w == "Thunderstorm"){
      img3.src = "../png/11d@2x.png";
    }
    if (result.h3w == "Snow"){
      img3.src = "../png/13d@2x.png";
    }

    //4h weather
    var img4 = document.getElementById("h4w");
    if (result.h4w == "Clouds"){
      img4.src = "../png/03d@2x.png";
    }
    if (result.h4w == "Rain"){
      img4.src = "../png/09d@2x.png";
    }
    if (result.h44w == "Clear"){
      img4.src = "../png/01d@2x.png";
    }
    if (result.h4w == "Drizzle"){
      img4.src = "../png/09d@2x.png";
    }
    if (result.h4w == "Thunderstorm"){
      img4.src = "../png/11d@2x.png";
    }
    if (result.h4w == "Snow"){
      img4.src = "../png/13d@2x.png";
    }

    //5h weather
    var img5 = document.getElementById("h5w");
    if (result.h5w == "Clouds"){
      img5.src = "../png/03d@2x.png";
    }
    if (result.h5w == "Rain"){
      img5.src = "../png/09d@2x.png";
    }
    if (result.h5w == "Clear"){
      img5.src = "../png/01d@2x.png";
    }
    if (result.h5w == "Drizzle"){
      img5.src = "../png/09d@2x.png";
    }
    if (result.h5w == "Thunderstorm"){
      img5.src = "../png/11d@2x.png";
    }
    if (result.h5w == "Snow"){
      img5.src = "../png/13d@2x.png";
    }

    //6h weather
    var img6 = document.getElementById("h6w");
    if (result.h6w == "Clouds"){
      img6.src = "../png/03d@2x.png";
    }
    if (result.h6w == "Rain"){
      img6.src = "../png/09d@2x.png";
    }
    if (result.h6w == "Clear"){
      img6.src = "../png/01d@2x.png";
    }
    if (result.h6w == "Drizzle"){
      img6.src = "../png/09d@2x.png";
    }
    if (result.h6w == "Thunderstorm"){
      img6.src = "../png/11d@2x.png";
    }
    if (result.h6w == "Snow"){
      img6.src = "../png/13d@2x.png";
    }

    //7h weather
    var img7 = document.getElementById("h7w");
    if (result.h7w == "Clouds"){
      img7.src = "../png/03d@2x.png";
    }
    if (result.h7w == "Rain"){
      img7.src = "../png/09d@2x.png";
    }
    if (result.h7w == "Clear"){
      img7.src = "../png/01d@2x.png";
    }
    if (result.h7w == "Drizzle"){
      img7.src = "../png/09d@2x.png";
    }
    if (result.h7w == "Thunderstorm"){
      img7.src = "../png/11d@2x.png";
    }
    if (result.h7w == "Snow"){
      img7.src = "../png/13d@2x.png";
    }

    //8h weather
    var img8 = document.getElementById("h8w");
    if (result.h8w == "Clouds"){
      img8.src = "../png/03d@2x.png";
    }
    if (result.h8w == "Rain"){
      img8.src = "../png/09d@2x.png";
    }
    if (result.h8w == "Clear"){
      img8.src = "../png/01d@2x.png";
    }
    if (result.h8w == "Drizzle"){
      img8.src = "../png/09d@2x.png";
    }
    if (result.h8w == "Thunderstorm"){
      img8.src = "../png/11d@2x.png";
    }
    if (result.h8w == "Snow"){
      img8.src = "../png/13d@2x.png";
    }

    //9h weather
    var img9 = document.getElementById("h9w");
    if (result.h9w == "Clouds"){
      img9.src = "../png/03d@2x.png";
    }
    if (result.h9w == "Rain"){
      img9.src = "../png/09d@2x.png";
    }
    if (result.h9w == "Clear"){
      img9.src = "../png/01d@2x.png";
    }
    if (result.h9w == "Drizzle"){
      img9.src = "../png/09d@2x.png";
    }
    if (result.h9w == "Thunderstorm"){
      img9.src = "../png/11d@2x.png";
    }
    if (result.h9w == "Snow"){
      img9.src = "../png/13d@2x.png";
    }

    //10h weather
    var img10 = document.getElementById("h10w");
    if (result.h10w == "Clouds"){
      img10.src = "../png/03d@2x.png";
    }
    if (result.h10w == "Rain"){
      img10.src = "../png/09d@2x.png";
    }
    if (result.h10w == "Clear"){
      img10.src = "../png/01d@2x.png";
    }
    if (result.h10w == "Drizzle"){
      img10.src = "../png/09d@2x.png";
    }
    if (result.h10w == "Thunderstorm"){
      img10.src = "../png/11d@2x.png";
    }
    if (result.h10w == "Snow"){
      img10.src = "../png/13d@2x.png";
    }

    //11h weather
    var img11 = document.getElementById("h11w");
    if (result.h11w == "Clouds"){
      img11.src = "../png/03d@2x.png";
    }
    if (result.h11w == "Rain"){
      img11.src = "../png/09d@2x.png";
    }
    if (result.h11w == "Clear"){
      img11.src = "../png/01d@2x.png";
    }
    if (result.h11w == "Drizzle"){
      img11.src = "../png/09d@2x.png";
    }
    if (result.h11w == "Thunderstorm"){
      img11.src = "../png/11d@2x.png";
    }
    if (result.h11w == "Snow"){
      img11.src = "../png/13d@2x.png";
    }

    //h weather
    var img12 = document.getElementById("h12w");
    if (result.h12w == "Clouds"){
      img12.src = "../png/03d@2x.png";
    }
    if (result.h12w == "Rain"){
      img12.src = "../png/09d@2x.png";
    }
    if (result.h12w == "Clear"){
      img12.src = "../png/01d@2x.png";
    }
    if (result.h12w == "Drizzle"){
      img12.src = "../png/09d@2x.png";
    }
    if (result.h12w == "Thunderstorm"){
      img12.src = "../png/11d@2x.png";
    }
    if (result.h12w == "Snow"){
      img12.src = "../png/13d@2x.png";
    }

    //h weather
    var img13 = document.getElementById("h13w");
    if (result.h13w == "Clouds"){
      img13.src = "../png/03d@2x.png";
    }
    if (result.h13w == "Rain"){
      img13.src = "../png/09d@2x.png";
    }
    if (result.h13w == "Clear"){
      img13.src = "../png/01d@2x.png";
    }
    if (result.h13w == "Drizzle"){
      img13.src = "../png/09d@2x.png";
    }
    if (result.h13w == "Thunderstorm"){
      img13.src = "../png/11d@2x.png";
    }
    if (result.h13w == "Snow"){
      img13.src = "../png/13d@2x.png";
    }

    //14h weather
    var img14 = document.getElementById("h14w");
    if (result.h14w == "Clouds"){
      img14.src = "../png/03d@2x.png";
    }
    if (result.h14w == "Rain"){
      img14.src = "../png/09d@2x.png";
    }
    if (result.h14w == "Clear"){
      img14.src = "../png/01d@2x.png";
    }
    if (result.h14w == "Drizzle"){
      img14.src = "../png/09d@2x.png";
    }
    if (result.hw == "Thunderstorm"){
      img.src = "../png/11d@2x.png";
    }
    if (result.h14w == "Snow"){
      img14.src = "../png/13d@2x.png";
    }

    //15h weather
    var img15 = document.getElementById("h15w");
    if (result.h15w == "Clouds"){
      img15.src = "../png/03d@2x.png";
    }
    if (result.h15w == "Rain"){
      img15.src = "../png/09d@2x.png";
    }
    if (result.h15w == "Clear"){
      img15.src = "../png/01d@2x.png";
    }
    if (result.h15w == "Drizzle"){
      img15.src = "../png/09d@2x.png";
    }
    if (result.h15w == "Thunderstorm"){
      img15.src = "../png/11d@2x.png";
    }
    if (result.h15w == "Snow"){
      img15.src = "../png/13d@2x.png";
    }

    //16h weather
    var img16 = document.getElementById("h16w");
    if (result.h16w == "Clouds"){
      img16.src = "../png/03d@2x.png";
    }
    if (result.h16w == "Rain"){
      img16.src = "../png/09d@2x.png";
    }
    if (result.h16w == "Clear"){
      img16.src = "../png/01d@2x.png";
    }
    if (result.h16w == "Drizzle"){
      img16.src = "../png/09d@2x.png";
    }
    if (result.h16w == "Thunderstorm"){
      img16.src = "../png/11d@2x.png";
    }
    if (result.h16w == "Snow"){
      img16.src = "../png/13d@2x.png";
    }

    //h weather
    var img17 = document.getElementById("h17w");
    if (result.h17w == "Clouds"){
      img17.src = "../png/03d@2x.png";
    }
    if (result.h17w == "Rain"){
      img17.src = "../png/09d@2x.png";
    }
    if (result.h17w == "Clear"){
      img17.src = "../png/01d@2x.png";
    }
    if (result.h17w == "Drizzle"){
      img17.src = "../png/09d@2x.png";
    }
    if (result.h17w == "Thunderstorm"){
      img17.src = "../png/11d@2x.png";
    }
    if (result.h17w == "Snow"){
      img17.src = "../png/13d@2x.png";
    }

    //18h weather
    var img18 = document.getElementById("h18w");
    if (result.h18w == "Clouds"){
      img18.src = "../png/03d@2x.png";
    }
    if (result.h18w == "Rain"){
      img18.src = "../png/09d@2x.png";
    }
    if (result.h18w == "Clear"){
      img18.src = "../png/01d@2x.png";
    }
    if (result.h18w == "Drizzle"){
      img18.src = "../png/09d@2x.png";
    }
    if (result.h18w == "Thunderstorm"){
      img18.src = "../png/11d@2x.png";
    }
    if (result.h18w == "Snow"){
      img18.src = "../png/13d@2x.png";
    }

    //19h weather
    var img19 = document.getElementById("h19w");
    if (result.h19w == "Clouds"){
      img19.src = "../png/03d@2x.png";
    }
    if (result.h19w == "Rain"){
      img19.src = "../png/09d@2x.png";
    }
    if (result.h19w == "Clear"){
      img19.src = "../png/01d@2x.png";
    }
    if (result.h19w == "Drizzle"){
      img19.src = "../png/09d@2x.png";
    }
    if (result.h19w == "Thunderstorm"){
      img19.src = "../png/11d@2x.png";
    }
    if (result.h19w == "Snow"){
      img19.src = "../png/13d@2x.png";
    }

    //20h weather
    var img20 = document.getElementById("h20w");
    if (result.h20w == "Clouds"){
      img20.src = "../png/03d@2x.png";
    }
    if (result.h20w == "Rain"){
      img20.src = "../png/09d@2x.png";
    }
    if (result.h20w == "Clear"){
      img20.src = "../png/01d@2x.png";
    }
    if (result.h20w == "Drizzle"){
      img20.src = "../png/09d@2x.png";
    }
    if (result.h20w == "Thunderstorm"){
      img20.src = "../png/11d@2x.png";
    }
    if (result.h20w == "Snow"){
      img20.src = "../png/13d@2x.png";
    }

    //21h weather
    var img21 = document.getElementById("h21w");
    if (result.h21w == "Clouds"){
      img21.src = "../png/03d@2x.png";
    }
    if (result.h21w == "Rain"){
      img21.src = "../png/09d@2x.png";
    }
    if (result.h21w == "Clear"){
      img21.src = "../png/01d@2x.png";
    }
    if (result.h21w == "Drizzle"){
      img21.src = "../png/09d@2x.png";
    }
    if (result.h21w == "Thunderstorm"){
      img21.src = "../png/11d@2x.png";
    }
    if (result.h21w == "Snow"){
      img21.src = "../png/13d@2x.png";
    }

    //22h weather
    var img22 = document.getElementById("h22w");
    if (result.h22w == "Clouds"){
      img22.src = "../png/03d@2x.png";
    }
    if (result.h22w == "Rain"){
      img22.src = "../png/09d@2x.png";
    }
    if (result.h22w == "Clear"){
      img22.src = "../png/01d@2x.png";
    }
    if (result.h22w == "Drizzle"){
      img22.src = "../png/09d@2x.png";
    }
    if (result.h22w == "Thunderstorm"){
      img22.src = "../png/11d@2x.png";
    }
    if (result.h22w == "Snow"){
      img22.src = "../png/13d@2x.png";
    }

    //23h weather
    var img23 = document.getElementById("h23w");
    if (result.h23w == "Clouds"){
      img23.src = "../png/03d@2x.png";
    }
    if (result.h23w == "Rain"){
      img23.src = "../png/09d@2x.png";
    }
    if (result.h23w == "Clear"){
      img23.src = "../png/01d@2x.png";
    }
    if (result.h23w == "Drizzle"){
      img23.src = "../png/09d@2x.png";
    }
    if (result.h23w == "Thunderstorm"){
      img23.src = "../png/11d@2x.png";
    }
    if (result.h23w == "Snow"){
      img23.src = "../png/13d@2x.png";
    }

    //h weather
    var img24 = document.getElementById("h24w");
    if (result.h24w== "Clouds"){
      img24.src = "../png/03d@2x.png";
    }
    if (result.h24w == "Rain"){
      img24.src = "../png/09d@2x.png";
    }
    if (result.h24w == "Clear"){
      img24.src = "../png/01d@2x.png";
    }
    if (result.h24w == "Drizzle"){
      img24.src = "../png/09d@2x.png";
    }
    if (result.h24w == "Thunderstorm"){
      img24.src = "../png/11d@2x.png";
    }
    if (result.h24w == "Snow"){
      img24.src = "../png/13d@2x.png";
    }

    //h0 temp
    var h0t = document.getElementById('h0t');
    h0t.textContent =Math.round(result.h0tmp);

    //h1 temp
    var h1t = document.getElementById('h1t');
    h1t.textContent =Math.round(result.h1tmp);

    //h2 temp
    var h2t = document.getElementById('h2t');
    h2t.textContent =Math.round(result.h2tmp);

    //h3 temp
    var h3t = document.getElementById('h3t');
    h3t.textContent =Math.round(result.h3tmp);

    //h4 temp
    var h4t = document.getElementById('h4t');
    h4t.textContent =Math.round(result.h4tmp);

    //h5 temp
    var h5t = document.getElementById('h5t');
    h5t.textContent =Math.round(result.h5tmp);

    //h temp
    var h6t = document.getElementById('h6t');
    h6t.textContent =Math.round(result.h6tmp);

    //7h temp
    var h7t = document.getElementById('h7t');
    h7t.textContent =Math.round(result.h7tmp);

    //h8 temp
    var h8t = document.getElementById('h8t');
    h8t.textContent =Math.round(result.h8tmp);

    //h9 temp
    var h9t = document.getElementById('h9t');
    h9t.textContent =Math.round(result.h9tmp);

    //h10 temp
    var h10t = document.getElementById('h10t');
    h10t.textContent =Math.round(result.h10tmp);

    //h11 temp
    var h11t = document.getElementById('h11t');
    h11t.textContent =Math.round(result.h11tmp);

    //h temp
    var h12t = document.getElementById('h12t');
    h12t.textContent =Math.round(result.h12tmp);

    //h13 temp
    var h13t = document.getElementById('h13t');
    h13t.textContent =Math.round(result.h13tmp);

    //h14 temp
    var h14t = document.getElementById('h14t');
    h14t.textContent =Math.round(result.h14tmp);

    //h15 temp
    var h15t = document.getElementById('h15t');
    h15t.textContent =Math.round(result.h15tmp);

    //h temp
    var h16t = document.getElementById('h16t');
    h16t.textContent =Math.round(result.h16tmp);

    //h temp
    var h17t = document.getElementById('h17t');
    h17t.textContent =Math.round(result.h17tmp);

    //h18 temp
    var h18t = document.getElementById('h18t');
    h18t.textContent =Math.round(result.h18tmp);

    //h19 temp
    var h19t = document.getElementById('h19t');
    h19t.textContent =Math.round(result.h19tmp);

    //h10 temp
    var h20t = document.getElementById('h20t');
    h20t.textContent =Math.round(result.h20tmp);

    //h21 temp
    var h21t = document.getElementById('h21t');
    h21t.textContent =Math.round(result.h21tmp);

    //h22 temp
    var h22t = document.getElementById('h22t');
    h22t.textContent =Math.round(result.h22tmp);

    //h23 temp
    var h23t = document.getElementById('h23t');
    h23t.textContent =Math.round(result.h23tmp);

    //h24 temp
    var h24t = document.getElementById('h24t');
    h24t.textContent =Math.round(result.h24tmp);

    

    
    //h0  wind
    var h0wd = document.getElementById('h0wd');
    var h0wsp = document.getElementById('h0wsp');
    h0wsp.textContent = result.h0ws;

    var dname3 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex3 = Math.round( result.h0wd / 22.5 )
    h0wd.textContent =dname3[dindex3];

    //h1  wind
    var h1wd = document.getElementById('h1wd');
    var h1wsp = document.getElementById('h1wsp');
    h1wsp.textContent = result.h1ws;

    var dname4 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex4 = Math.round( result.h1wd / 22.5 )
    h1wd.textContent =dname4[dindex4];

    //h2  wind
    var h2wd = document.getElementById('h2wd');
    var h2wsp = document.getElementById('h2wsp');
    h2wsp.textContent = result.h2ws;

    var dname5 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex5 = Math.round( result.h2wd / 22.5 )
    h2wd.textContent =dname5[dindex5];

    //h3  wind
    var h3wd = document.getElementById('h3wd');
    var h3wsp = document.getElementById('h3wsp');
    h3wsp.textContent = result.h3ws;
    var dname6 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex6 = Math.round( result.h3wd / 22.5 )
    h3wd.textContent =dname6[dindex6];

    //h4  wind
    var h4wd = document.getElementById('h4wd');
    var h4wsp = document.getElementById('h4wsp');
    h4wsp.textContent = result.h4ws;

    var dname7 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex7 = Math.round( result.h4wd / 22.5 )
    h4wd.textContent =dname7[dindex7];

    //h5  wind
    var h5wd = document.getElementById('h5wd');
    var h5wsp = document.getElementById('h5wsp');
    h5wsp.textContent = result.h5ws;

    var dname8 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex8 = Math.round( result.h5wd / 22.5 )
    h5wd.textContent =dname8[dindex8];

    //h6  wind
    var h6wd = document.getElementById('h6wd');
    var h6wsp = document.getElementById('h6wsp');
    h6wsp.textContent = result.h6ws;

    var dname9 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex9 = Math.round( result.h6wd / 22.5 )
    h6wd.textContent =dname9[dindex9];

    //h 7 wind
    var h7wd = document.getElementById('h7wd');
    var h7wsp = document.getElementById('h7wsp');
    h7wsp.textContent = result.h7ws;

    var dname10 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex10 = Math.round( result.h7wd / 22.5 )
    h7wd.textContent =dname10[dindex10];

    //h8  wind
    var h8wd = document.getElementById('h8wd');
    var h8wsp = document.getElementById('h8wsp');
    h8wsp.textContent = result.h8ws;

    var dname11 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex11 = Math.round( result.h8wd / 22.5 )
    h8wd.textContent =dname11[dindex11];

    //h9  wind
    var h9wd = document.getElementById('h9wd');
    var h9wsp = document.getElementById('h9wsp');
    h9wsp.textContent = result.h9ws;

    var dname12 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex12 = Math.round( result.h9wd / 22.5 )
    h9wd.textContent =dname12[dindex12];

    //h10  wind
    var h10wd = document.getElementById('h10wd');
    var h10wsp = document.getElementById('h10wsp');
    h10wsp.textContent = result.h10ws;

    var dname13 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex13 = Math.round( result.h10wd / 22.5 )
    h10wd.textContent =dname13[dindex13];

    //h11  wind
    var h11wd = document.getElementById('h11wd');
    var h11wsp = document.getElementById('h11wsp');
    h11wsp.textContent = result.h11ws;

    var dname14 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex14 = Math.round( result.h11wd / 22.5 )
    h11wd.textContent =dname14[dindex14];

    //h12  wind
    var h12wd = document.getElementById('h12wd');
    var h12wsp = document.getElementById('h12wsp');
    h12wsp.textContent = result.h12ws;

    var dname15 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex15 = Math.round( result.h12wd / 22.5 )
    h12wd.textContent =dname15[dindex15];

    //h13  wind
    var h13wd = document.getElementById('h13wd');
    var h13wsp = document.getElementById('h13wsp');
    h13wsp.textContent = result.h13ws;

    var dname16 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex16 = Math.round( result.h13wd / 22.5 )
    h13wd.textContent =dname16[dindex16];

    //h14  wind
    var h14wd = document.getElementById('h14wd');
    var h14wsp = document.getElementById('h14wsp');
    h14wsp.textContent = result.h14ws;

    var dname17 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex17 = Math.round( result.h14wd / 22.5 )
    h14wd.textContent =dname17[dindex17];

    //h15  wind
    var h15wd = document.getElementById('h15wd');
    var h15wsp = document.getElementById('h15wsp');
    h15wsp.textContent = result.h15ws;

    var dname18 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex18 = Math.round( result.h15wd / 22.5 )
    h15wd.textContent =dname18[dindex18];

    //h16  wind
    var h16wd = document.getElementById('h16wd');
    var h16wsp = document.getElementById('h16wsp');
    h16wsp.textContent = result.h16ws;

    var dname19 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex19 = Math.round( result.h16wd / 22.5 )
    h16wd.textContent =dname19[dindex19];

    //h 17 wind
    var h17wd = document.getElementById('h17wd');
    var h17wsp = document.getElementById('h17wsp');
    h17wsp.textContent = result.h17ws;

    var dname20 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex20 = Math.round( result.h17wd / 22.5 )
    h17wd.textContent =dname20[dindex20];

    //h18  wind
    var h18wd = document.getElementById('h18wd');
    var h18wsp = document.getElementById('h18wsp');
    h18wsp.textContent = result.h18ws;

    var dname21 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex21 = Math.round( result.h18wd / 22.5 )
    h18wd.textContent =dname21[dindex21];

    //h19  wind
    var h19wd = document.getElementById('h19wd');
    var h19wsp = document.getElementById('h19wsp');
    h19wsp.textContent = result.h19ws;

    var dname22 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex22 = Math.round( result.h19wd / 22.5 )
    h19wd.textContent =dname22[dindex22];

    //h20  wind
    var h20wd = document.getElementById('h20wd');
    var h20wsp = document.getElementById('h20wsp');
    h20wsp.textContent = result.h20ws;

    var dname23 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex23 = Math.round( result.h20wd / 22.5 )
    h20wd.textContent =dname23[dindex23];

    //h21  wind
    var h21wd = document.getElementById('h21wd');
    var h21wsp = document.getElementById('h21wsp');
    h21wsp.textContent = result.h21ws;

    var dname24 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex24 = Math.round( result.h21wd / 22.5 )
    h21wd.textContent =dname24[dindex24];

    //h22  wind
    var h22wd = document.getElementById('h22wd');
    var h22wsp = document.getElementById('h22wsp');
    h22wsp.textContent = result.h22ws;

    var dname25 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex25 = Math.round( result.h22wd / 22.5 )
    h22wd.textContent =dname25[dindex25];

    //h23  wind
    var h23wd = document.getElementById('h23wd');
    var h23wsp = document.getElementById('h23wsp');
    h23wsp.textContent = result.h23ws;

    var dname26 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex26 = Math.round( result.h23wd / 22.5 )
    h23wd.textContent =dname26[dindex26];

    //h24  wind
    var h24wd = document.getElementById('h24wd');
    var h24wsp = document.getElementById('h24wsp');
    h24wsp.textContent = result.h24ws;

    var dname27 = ["北","北北東","北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
    var dindex27 = Math.round( result.h24wd / 22.5 )
    h24wd.textContent =dname27[dindex27];

    //daily
    //2d after
    var d2dObj = new Date();
    d2dObj.setTime(Number(result.sec) * 1000);
    var d2d = d2dObj.getDate();
    var d2dd =document.getElementById('d2d');
    d2dd.textContent = d2d;
    var d2dw = document.getElementById('d2dw');
    var dayOfWeek = d2dObj.getDay() ;
    var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ] ;
    d2dw.textContent = dayOfWeekStr[dayOfWeek];

    var dmx2 = document.getElementById('dmx2');
    dmx2.textContent = Math.round(result.sectemp_max);
    var dmn2 = document.getElementById('dmn2');
    dmn2.textContent = Math.round(result.sectemp_min);
    var dh2 = document.getElementById('dh2');
    dh2.textContent = result.sechumid;

    var idw2 = document.getElementById("dw2");
    if (result.secw == "Clouds"){
      idw2.src = "../png/03d@2x.png";
    }
    if (result.secw == "Rain"){
      idw2.src = "../png/09d@2x.png";
    }
    if (result.secw == "Clear"){
      idw2.src = "../png/01d@2x.png";
    }
    if (result.secw == "Drizzle"){
      idw2.src = "../png/09d@2x.png";
    }
    if (result.secw == "Thunderstorm"){
      idw2.src = "../png/11d@2x.png";
    }
    if (result.secw == "Snow"){
      idw2.src = "../png/13d@2x.png";
    }


    //d3 after
    var d3dObj = new Date();
    d3dObj.setTime(Number(result.thir) * 1000);
    var d3d = d3dObj.getDate();
    var d3dd =document.getElementById('d3d');
    d3dd.textContent = d3d;
    var d3mx = document.getElementById('dmx3');
    d3mx.textContent = Math.round(result.thirtemp_max);
    var d3mn = document.getElementById('dmn3');
    d3mn.textContent = Math.round(result.thirtemp_min);
    var d3h = document.getElementById('dh3');
    d3h.textContent = result.thirhumid;

    var d3dw = document.getElementById('d3dw');
    var dayOfWeek3 = d3dObj.getDay() ;
    d3dw.textContent = dayOfWeekStr[dayOfWeek3];

    var idw3 = document.getElementById("dw3");
    if (result.thirw == "Clouds"){
      idw3.src = "../png/03d@2x.png";
    }
    if (result.thirw == "Rain"){
      idw3.src = "../png/09d@2x.png";
    }
    if (result.thirw == "Clear"){
      idw3.src = "../png/01d@2x.png";
    }
    if (result.thirw == "Drizzle"){
      idw3.src = "../png/09d@2x.png";
    }
    if (result.thirw == "Thunderstorm"){
      idw3.src = "../png/11d@2x.png";
    }
    if (result.thirw == "Snow"){
      idw3.src = "../png/13d@2x.png";
    }

    //d after
    var d4dObj = new Date();
    d4dObj.setTime(Number(result.four) * 1000);
    var d4d = d4dObj.getDate();
    var d4dd =document.getElementById('d4');
    d4dd.textContent = d4d;

    var d4dw = document.getElementById('d4dw');
    var dayOfWeek4 = d4dObj.getDay() ;
    d4dw.textContent = dayOfWeekStr[dayOfWeek4];

    var d4mx = document.getElementById('dmx4');
    d4mx.textContent = Math.round(result.fourtemp_max);
    var d4mn = document.getElementById('dmn4');
    d4mn.textContent = Math.round(result.fourtemp_min);
    var d4h = document.getElementById('dh4');
    d4h.textContent = result.fourhumid;

    var idw4 = document.getElementById("dw4");
    if (result.fourw == "Clouds"){
      idw4.src = "../png/03d@2x.png";
    }
    if (result.fourw == "Rain"){
      idw4.src = "../png/09d@2x.png";
    }
    if (result.fourw == "Clear"){
      idw4.src = "../png/01d@2x.png";
    }
    if (result.fourw == "Drizzle"){
      idw4.src = "../png/09d@2x.png";
    }
    if (result.fourw == "Thunderstorm"){
      idw4.src = "../png/11d@2x.png";
    }
    if (result.fourw == "Snow"){
      idw4.src = "../png/13d@2x.png";
    }

    //5d after
    var d5dObj = new Date();
    d5dObj.setTime(Number(result.fif) * 1000);
    var d5d = d5dObj.getDate();
    var d5dd =document.getElementById('d5d');
    d5dd.textContent = d5d;
    var d5mx = document.getElementById('dmx5');
    d5mx.textContent = Math.round(result.fiftemp_max);
    var d5mn = document.getElementById('dmn5');
    d5mn.textContent = Math.round(result.fiftemp_min);
    var d5h = document.getElementById('dh5');
    d5h.textContent = result.fifhumid;

    var d5dw = document.getElementById('d5dw');
    var dayOfWeek5 = d5dObj.getDay() ;
    d5dw.textContent = dayOfWeekStr[dayOfWeek5];

    var idw5 = document.getElementById("dw5");
    if (result.fifw == "Clouds"){
      idw5.src = "../png/03d@2x.png";
    }
    if (result.fifw == "Rain"){
      idw5.src = "../png/09d@2x.png";
    }
    if (result.fifw == "Clear"){
      idw5.src = "../png/01d@2x.png";
    }
    if (result.fifw == "Drizzle"){
      id5w.src = "../png/09d@2x.png";
    }
    if (result.fifw == "Thunderstorm"){
      idw5.src = "../png/11d@2x.png";
    }
    if (result.fifw == "Snow"){
      idw5.src = "../png/13d@2x.png";
    }


    //6d after
    var d6dObj = new Date();
    d6dObj.setTime(Number(result.six) * 1000);
    var d6d = d6dObj.getDate();
    var d6dd =document.getElementById('d6d');
    d6dd.textContent = d6d;
    var d6mx = document.getElementById('dmx6');
    d6mx.textContent = Math.round(result.sixtemp_max);
    var d6mn = document.getElementById('dmn6');
    d6mn.textContent = Math.round(result.sixtemp_min);
    var d6h = document.getElementById('dh6');
    d6h.textContent = result.sixhumid;

    var d6dw = document.getElementById('d6dw');
    var dayOfWeek6 = d6dObj.getDay() ;
    d6dw.textContent = dayOfWeekStr[dayOfWeek6];

    var idw6 = document.getElementById("dw6");
    if (result.sixw == "Clouds"){
      idw6.src = "../png/03d@2x.png";
    }
    if (result.sixw == "Rain"){
      idw6.src = "../png/09d@2x.png";
    }
    if (result.sixw == "Clear"){
      idw6.src = "../png/01d@2x.png";
    }
    if (result.sixw == "Drizzle"){
      idw6.src = "../png/09d@2x.png";
    }
    if (result.sixw == "Thunderstorm"){
      idw6.src = "../png/11d@2x.png";
    }
    if (result.sixw == "Snow"){
      idw6.src = "../png/13d@2x.png";
    }

    //7d after
    var d7dObj = new Date();
    d7dObj.setTime(Number(result.sev) * 1000);
    var d7d = d7dObj.getDate();
    var d7dd =document.getElementById('d7d');
    d7dd.textContent = d7d;
    var d7mx = document.getElementById('dmx7');
    d7mx.textContent = Math.round(result.sevtemp_max);
    var d7mn = document.getElementById('dmn7');
    d7mn.textContent = Math.round(result.sevtemp_min);
    var d7h = document.getElementById('dh7');
    d7h.textContent = result.sevhumid;

    var d7dw = document.getElementById('d7dw');
    var dayOfWeek7 = d7dObj.getDay() ;
    d7dw.textContent = dayOfWeekStr[dayOfWeek7];

    var idw7 = document.getElementById("dw7");
    if (result.sevw == "Clouds"){
      idw7.src = "../png/03d@2x.png";
    }
    if (result.sevw == "Rain"){
      idw7.src = "../png/09d@2x.png";
    }
    if (result.sevw == "Clear"){
      idw7.src = "../png/01d@2x.png";
    }
    if (result.sevw == "Drizzle"){
      idw7.src = "../png/09d@2x.png";
    }
    if (result.sevw == "Thunderstorm"){
      idw7.src = "../png/11d@2x.png";
    }
    if (result.sevw == "Snow"){
      idw7.src = "../png/13d@2x.png";
    }

    //8d after
    var d8dObj = new Date();
    d8dObj.setTime(Number(result.ei) * 1000);
    var d8d = d8dObj.getDate();
    var d8dd =document.getElementById('d8d');
    d8dd.textContent = d8d;
    var d8mx = document.getElementById('dmx8');
    d8mx.textContent = Math.round(result.eitemp_max);
    var d8mn = document.getElementById('dmn8');
    d8mn.textContent = Math.round(result.eitemp_min);
    var d8h = document.getElementById('dh8');
    d8h.textContent = result.eihumid;

    var d8dw = document.getElementById('d8dw');
    var dayOfWeek8 = d8dObj.getDay() ;
    d8dw.textContent = dayOfWeekStr[dayOfWeek8];

    var idw8 = document.getElementById("dw8");
    if (result.eiw == "Clouds"){
      idw8.src = "../png/03d@2x.png";
    }
    if (result.eiw == "Rain"){
      idw8.src = "../png/09d@2x.png";
    }
    if (result.eiw == "Clear"){
      idw8.src = "../png/01d@2x.png";
    }
    if (result.eiw == "Drizzle"){
      idw8.src = "../png/09d@2x.png";
    }
    if (result.eiw == "Thunderstorm"){
      idw8.src = "../png/11d@2x.png";
    }
    if (result.eiw == "Snow"){
      idw8.src = "../png/13d@2x.png";
    }










    
  }

  