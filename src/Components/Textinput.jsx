function Textinput({colour}){

    function handleTextInput(event){
        console.log(event.target.value)
    }


    return <div><textarea onChange={handleTextInput} style={{color : colour}} className="text-input"></textarea></div> 

}

export default Textinput;