for(var i = 1; i <= 100; i++)
{
  var li = document.createElement('li');
 
  li.textContent='';
  

   else if(i%3==0)
  {
   li.textContent+='Fizz'; 
  }
   else if(i%5==0)
  {
   li.textContent+='Buzz'; 
  }else{
      li.textContent =i;
  }
  document.getElementById('list').appendChild(li);
}

