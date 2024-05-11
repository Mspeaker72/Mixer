import { useEffect, useState } from 'react'
import ColorSelection from './Components/ColorSelection'
import Result from './Components/Result'
import genColour from './Scripts/ColorGenerator'
import Textinput from './Components/Textinput'
import Operations from './Components/Operations'

function App() {
  const colours =["blue","red","yellow","white"]
  const[option,setOption]=useState(false)
  const [colour_1,setColor_1]=useState("")
  const [colour_2,setColor_2]=useState("")
  const [result,setResult]=useState("white")
  const[unlocked_colours,setUnlockedColours]=useState(colours)

  function updateColor(color){
    if(!option){
    setColor_1(color)
    console.log("color  1 is : "+color)
    setOption(prev=>!prev)
    return;
    }else{
      setColor_2(color)
      console.log("color  2 is : "+color)
      setOption(prev=>!prev)
      return;
    }

  }

  function reset(){
    setOption(prev=>!prev)
    setColor_1("")
    setColor_2("")
  }

  function updateResult(){

    if (colour_2==="" || colour_1===colour_2){
      setResult(colour_1)
      
    }

    else if(colour_1==="" || colour_1===colour_2){
      setResult(colour_2)
    }

   else{
    let result =genColour(colour_1,colour_2)
    if(result!=="" && !unlocked_colours.includes(result)){
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
    <header className='header'></header>
    <Operations></Operations>
    <div className='L1'>
    <p style={{background : colour_1 }}className='text'>{"Selection one :"+colour_1}</p>
    <p>+</p>
    {<p style={{background : colour_2 }} className='text'>{" Selection two :"+colour_2}</p>}
    <p>=</p>
    <p  className={"results"}hidden={result===""}><Result color={result}></Result></p>
    {unlocked_colours.map((colour)=><ColorSelection key={colour} 
    color={colour} 
    Classname={colour} 
    onclick={updateColor}>
    </ColorSelection>)}
    <div className='clear'> 
    <ColorSelection color={"clear"} onclick={()=>reset()}></ColorSelection></div>
    </div>
    <Textinput colour={result}></Textinput>
    <footer className="footer"><p>&copy;Mspeaker Productions</p></footer>
    
    

    </>
  )
}

export default App
