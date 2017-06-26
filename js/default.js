for(var i = 1; i < 100; i++){
var li = document.createElement('li');
li.textContent = i + '回目';
document.getElementById('list').appendChild(li);
}

for(var i = 1; i < 100; i++){
  var li = document.createElement('li');
  var price = Math.floor(Math.random() * 1000);
  li.textContent =i;
  document.getElementById('price').appendChild(li);
}
