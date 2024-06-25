import './App.css';

function App() {

  let a = 20;
  return (
  
  <div className='App'>

     <button onClick={()=>{
      while (a < 100){
        console.log(`a is ${a}`);
        a++;
      }
     }}>
      while
     </button>

     <button onClick={()=>{
      do{
      console.log("inside do while");
      }while(a < 100)
     }}>Do while</button>


<button onClick={()=>{
      for(let i=1;i<=5000;i++){
        if(i == 2599){
          break;
        }
        console.log(i); 
      }
     }}>For Loop (Break)</button>

     <button onClick={()=>{
      for(let i=1;i<=5000;i++){
        if(i > 500 && i <=3500){
          continue;
        }
        console.log(i); 
      }
     }}>For Loop(Continue)</button>

     <button onClick={()=>{
      for(let i = 1; i<=500; i++){
        for(let j = 1; j<=10; j++){
          if(i*j == 7){
            break;
          }
          if(i*j == 40){
            break;
          }
          if(i*j == 50){
            break;
          }
          if(i*j == 70){
            break;
          }
          if(i*j == 150){
            break;
          }
          if(i*j == 190){
            break;
          }
          if(i*j == 250){
            break;
          }

          if(i*j == 320){
            break;
          }
          if(i*j == 350){
            break;
          }
          if(i*j == 420){
            break;
          }
          if(i*j == 450){
            break;
          }
          if(i*j == 490){
            break;
          }
          console.log(`${i}*${j} =${i*j}`);
        }
      }
     }}>Nested Loop(Tables)</button>

     <button onClick={()=>{
      for(let i = 1; i<=1; i++){
        for(let j = 1; j<=100; j++){
          console.log(`${i}/${j} =${i/j}`);
        }
      }
     }}>Nested Loop(Divided)</button>

     <br></br>

     <button onClick={()=>{
      for(let i = 200; i<=1000; i++){
        for(let j = 49; j<=100; j++){
          console.log(`${i}+${j} =${i+j}`);
        }
      }
     }}>Nested Loop(Adding)</button>
  </div>

  );
}

export default App;
