export  function resertTime({
  ButtonPLay,
  ButtonPause,
  ButtonStop,
  Buttontime,
  ImputMinutes
}){

  function res(){
    ButtonPLay.classList.remove('hide')
    ButtonPause.classList.add('hide')
    ButtonStop.classList.add('hide')
    Buttontime.classList.remove('hide')
  }

  function playTime(){
    ButtonPLay.classList.add('hide')
    ButtonPause.classList.remove('hide')
    Buttontime.classList.add('hide')
    ButtonStop.classList.remove('hide')
  }

  function pauseTime (){
    ButtonPLay.classList.remove('hide');
    ButtonPause.classList.add('hide');
  }

  
 return{
  res,
  playTime,
  pauseTime,
  
 }

  
}

