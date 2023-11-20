export function timer({
  MinutesDisplay,
  SecundesDisplay,
  minutos,
  resertTime,
  ImputMinutes
}){
  let timeout;
  
  function resertTimeout(){
    clearTimeout(timeout);
    DisplayTime(minutos,0)
  }
  
  function DisplayTime(minutos , segundos){
    MinutesDisplay.textContent  = String(minutos).padStart(2,"0");
    SecundesDisplay.textContent = String(segundos).padStart(2,"0");
  }
  function contRreg(){
    
    

    timeout = setTimeout(()=>{
       
   
       let segundos = Number(SecundesDisplay.textContent);
       let minutos  = Number(MinutesDisplay.textContent);
       
   
       console.log(segundos)
   
       if(minutos == 0 && segundos == 0 ){
   
         resertTime()
   
         return;
       }
   
       if(segundos <= 0){
         segundos = 2;
        --minutos;
       }
       
       DisplayTime(minutos,String(segundos-1))
       
   
       contRreg();
     },1000)
     
   }
   function Resertclock(){
    clearTimeout(timeout);
   }
   function UpdateMinutes(newminutes){
    minutos= newminutes
   }
   function updateTime(){
    let newminutes = Number(ImputMinutes.value)
    if(!newminutes){
      return false;
    }
    
    return newminutes;
  }
  return{
    contRreg,
    DisplayTime,
    resertTimeout,
    Resertclock,
    UpdateMinutes,
    updateTime
    
  }
}




  

