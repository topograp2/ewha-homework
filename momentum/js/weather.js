const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY= "96e7d0a302acec2523c7cc6d5cb26284";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
       
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText= data.name;
    });

}

function onGeoError(){
    alert("위치 정보를 얻을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);