// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
 
 let gnum=5;
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);