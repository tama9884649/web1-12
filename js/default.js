for(var i = 1; i <= 100; i++)
{
  var li = document.createElement('li');
 
 
  

   if(i%3==0)
  {
   li.textContent='Fizz'; 
  if(i%5==0)
  {
   li.textContent='FizzBuzz'; 
  }
  }else{
     if(i%5==0)
  {
   li.textContent='Buzz'; 
  }
    li.textContent =i;
  }
  document.getElementById('list').appendChild(li);
}

