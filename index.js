function time(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  
  document.getElementById('horas').innerHTML = h;
  document.getElementById('minutos').innerHTML = m;
  document.getElementById('segundos').innerHTML = s;
  setTimeout('time()',500)
};


