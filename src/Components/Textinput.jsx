import { useState } from "react";
function Textinput({colour}){

    const [message,setMessage]=useState("");

    function handleTextInput(event){
        setMessage(event.target.value)
        console.log(message)
    }

    function send(event){
        if(event.key==="Enter"){
        const requestData = {
            message: message
          };
          
          fetch('xxxxxxxxxxx', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Data received:', data);
            // Handle the received data here
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle errors here
          });
        }
    }


      


    return <div><textarea onChange={handleTextInput} style={{color : colour}} className="text-input"></textarea></div> 

}

export default Textinput;