window.addEventListener('DOMContentLoaded',()=>{
  console.log('DOMContentLoaded');
  if(innerWidth>700){
    const aside=document.createElement('aside');
    const weather=document.createElement('div');
    weather.setAttribute('id','weather');
    document.querySelector('main').append(aside);
    document.querySelector('main > aside').prepend(weather);
    let put='http://localhost:3700/html/weather.html';
    function run(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `${put}`, true);
      xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          document.getElementById('weather').innerHTML=this.responseText;
        }
      }
      xhr.send();
    }//run
    run();
  }//if
});
