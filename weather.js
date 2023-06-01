let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let p1 = document.querySelector('p#name1');
p1.textContent = ("都市名: "+data.name); 
let p2 = document.querySelector('p#temp_max1');
p2.textContent = ("最高気温: "+data.main.temp_max+"℃");
let p3 = document.querySelector('p#temp_min1');
p3.textContent = ("最低気温: "+data.main.temp_min+"℃");
let b1 = document.querySelector('button#print');
b1.addEventListener('click', iroiro);
function iroiro() {
  let r = Math.floor(Math.random() * 12)+1;
  let body = document.querySelector('body');
  if(r==1){
    body.style.backgroundColor = '#ffbcbc';
  }else if(r==2){
    body.style.backgroundColor = '#ffbcdd';
  }else if(r==3){
    body.style.backgroundColor = '#ffbcff';
  }else if(r==4){
    body.style.backgroundColor = '#ddbcff';
  }else if(r==5){
    body.style.backgroundColor = '#bcbcff';
  }else if(r==6){
    body.style.backgroundColor = '#bcddff';
  }else if(r==7){
    body.style.backgroundColor = '#bcffff';
  }else if(r==8){
    body.style.backgroundColor = '#bcffdd';
  }else if(r==9){
    body.style.backgroundColor = '#bcffbc';
  }else if(r==10){
    body.style.backgroundColor = '#ddffbc';
  }else if(r==11){
    body.style.backgroundColor = '#fffbc';
  }else if(r==12){
    body.style.backgroundColor = '#ffddbc';
  }

}