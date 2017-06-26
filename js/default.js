for(var i = 1; i <= 100; i++)
{
  var li = document.createElement('li');
  li.textContent =i;
  
  
  
  if(i%15==0)
  {
   li.textContent='FizzBuzz'; 
  }else if(1%6==0){
    
    li.textContent='Im  CRAZY BOY!!!!!!!!'
   else if(i%3==0)
  {
   li.textContent='Fizz'; 
  }
   else if(i%5==0)
  {
   li.textContent='Buzz'; 
  }
  document.getElementById('list').appendChild(li);
}

