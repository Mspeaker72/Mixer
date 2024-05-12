import { useState ,useEffect} from "react";
function Operations({arr}) {

    const[selected,setSelection]=useState("");

    function handleClick(value){
        setSelection(value)
        console.log(value)
    }

    return(
    <nav className="nav">
         {arr.map((operation)=> <li onClick={ ()=>handleClick(operation===selected ? "":operation)} 
         value={operation}className={operation===selected ?"li-selected":"li"} key={operation}>{operation}</li> )}
    </nav>)
}

export default Operations;