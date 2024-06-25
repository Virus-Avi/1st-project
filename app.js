const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';

let myid=document.getElementById("hello");

const options = {

 method: 'GET',

headers: {

'X-RapidAPI-Key': '8eb42888camshc7437fd5a927f1bp142e92jsna5c572812987',

'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'

}

}

const a = document.getElementById("main");

const temp = document.getElementById("temp");

const cont = document.getElementById("cont");

const humiP = document.getElementById("hp");

const windS = document.getElementById("sp");

const inputJs = document.getElementById("inp");

const seach = document.getElementById("citybox");

const contain = document.getElementById("container");









async function weather(city) {

 const response = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13" + city,options);

var data = await response.json();

let time = data.location.localtime.trim().slice("10");

console.log(data);

 data.location.country = inputJs.value;




temp.innerHTML = data.current.temp_c + "°C";

cont.innerHTML = data.location.country;

 humiP.innerHTML = data.current.humidity + "%";

 windS.innerHTML = data.current.wind_kph + "km/h";


if (data.current.is_day == 0 && data.current.cloud < 60) {

body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEo6-IhRMzxwBszKpUBV8PE84YoSFbcAEC9TvjKVMRjolZ3VeG_zsPGik&s=10')";

}

else if (data.current.is_day == 1 && data.current.cloud < 60) {

body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnj479vyyR8JvrOOU8gNAd4fsm0pk9D9imh8DWczw6W1vpRa_iEh29CZZO&s=10')";

}

else if (time >= 18 && time <= 21 && data.current.cloud < 60) {

body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9Fogpoc7WrQPVKNlvQ5sTRfoCjqZeThDA4VvJovhXuDcMqtbF11ZIGuf&s=10')";

}

if (data.current.cloud == 0) {

forecast.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZl-OA57JbmrnGgVoyEfMKVB5IOofHa0dLw&usqp=CAU";

}

else if (data.current.cloud >= 30 && data.current.cloud < 60) {

forecast.src = "/drizzle.png";

}

else if (data.current.cloud >= 60) {

body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzAahhtbU8l_IUbnyrCF2KeRP8Ayh8ZEcyw&s')";

forecast.src = "/clouds.png";

 }

 a.style.display = "block";

}


seach.addEventListener("click", () => {

 weather(inputJs.value);

});

