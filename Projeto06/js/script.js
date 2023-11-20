import modal from "./Modal.js"
import {resertTime} from "./constrols.js"
import {timer} from "./timer.js"

const ButtonPLay  = document.querySelector('#play')
const ButtonPause = document.querySelector('#pause')
const Buttontime  = document.querySelector('#time')
const ButtonStop  = document.querySelector('#stop')
const ButtonOn   = document.querySelector('#alarm-on')
const ButtonOff  = document.querySelector('#alarme-mute')



const MinutesDisplay = document.querySelector('.minute')
const SecundesDisplay= document.querySelector('.secundes')
const ImputMinutes   = document.querySelector('#input')


let minutos = Number(MinutesDisplay.textContent);

const controls = resertTime({
  ButtonPLay,
  ButtonPause,
  ButtonStop,
  Buttontime,
  
})

const Timer = timer({
  SecundesDisplay,
  MinutesDisplay,
  minutos,
  resertTime:controls.res(),
  ImputMinutes
})



ButtonPLay.addEventListener('click',()=>{
  controls.playTime()
  Timer.contRreg();
  modal.close();
})
ButtonPause.addEventListener('click',()=>{
  controls.pauseTime()
  Timer.Resertclock()
})
ButtonStop.addEventListener('click',()=>{
  controls.res();
  modal.open()
  Timer.resertTimeout();
})
Buttontime.addEventListener('click',()=>{
   ImputMinutes.value=""
   modal.open()
   document.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
      modal.close()

      let newminutes = Timer.updateTime()
      if(!newminutes){
        controls.res()
        return
      }
      
      minutos = newminutes;
      console.log(minutos)
      Timer.DisplayTime(minutos,0)
      Timer.UpdateMinutes(newminutes)
    }
   })
 
})
