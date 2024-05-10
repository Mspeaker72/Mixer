import { useEffect, useState } from 'react'
import ColorSelection from './Components/ColorSelection'
import Result from './Components/Result'
import genColour from './Scripts/ColorGenerator'
import './App.css'

function App() {
  const colours =["blue","red","green"]
  const[option,setOption]=useState(false)
  const [colour_1,setColor_1]=useState("white")
  const [colour_2,setColor_2]=useState("white")
  const [result,setResult]=useState("white")
  const[unlocked_colours,setUnlockedColours]=useState(colours)

  function updateColor(color){
    if(!option){
    setColor_1(color)
    console.log("color  1 is : "+color)
    setOption(true)
    return;
    }else{
      setColor_2(color)
      console.log("color  2 is : "+color)
      setOption(false)
      return;
    }

  }

  function reset(){
    setOption(false)
    setColor_1("white")
    setColor_2("white")
  }

  function updateResult(){

    if (colour_1==="white" || colour_1===colour_2){
      setResult(colour_2)
      
    }

    else if(colour_2==="white" || colour_1===colour_2){
      setResult(colour_1)
    }

   else{
    let result =genColour(colour_1,colour_2)
    if(result!=="white" && !unlocked_colours.includes(result)){
      let arr = unlocked_colours
      arr.push(result)
      setUnlockedColours(arr)
    }
    setResult(result)
   }
  }

  useEffect(()=>{
    updateResult();
  },[colour_1,colour_2])

  
  return (
    <>
    <h1>Mixer</h1>
    <p style={{background : colour_1 }}className='text'>{"Selection one :"+colour_1}</p>
    <p>+</p>
    {<p style={{background : colour_2 }} className='text'>{" Selection two :"+colour_2}</p>}
    <p>=</p>
    <p  className={"results"}hidden={result==="white"}><Result color={result}></Result></p>
    {unlocked_colours.map((colour)=><ColorSelection key={colour} 
    color={colour} 
    Classname={colour} 
    onclick={updateColor}>
    </ColorSelection>)}
    <div className='clear'> 
    <ColorSelection color={"clear"} onclick={()=>reset()}></ColorSelection></div>
    
    

    </>
  )
}

export default App
