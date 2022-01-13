import React, { useState } from 'react';

 function App()  {

   const [ab, setlikes] = useState(1)
   const [value, inti] = useState('текст в инпуте')

   
   function decrement() {
    setlikes( ab - 1)
   }

   function increment() {
    setlikes( ab + 1)
     }
  
    
  return (
    <div className='App'>
      <h1>{ab}</h1>
      <h1>{value}</h1>
      <input type='text' value={value} onChange={event => inti(event.target.value)}/>
      <button onClick={increment}>increment</button> 
      <button onClick={decrement}>decrement</button> 
   </div>
   );
}



export default App;
