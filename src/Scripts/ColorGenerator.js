

function genColour(colour_1,colour_2){

    let arr =[colour_1,colour_2]
    console.log(arr)
    //filter interates throught the entire list as opposed to find thaht stops at the first value to meet condition
    if (arr.filter((colour) => colour === "blue").length > 0 && arr.filter((colour) => colour === "red").length > 0){
        return "purple";
    }else if(arr.includes("yellow") && arr.includes("blue")){
        // for learning purposes I will keep this conditional here as opposed to the first
        return "green"

    }else if(arr.includes("blue") && arr.includes("green")){
        // for learning purposes I will keep this conditional here as opposed to the first
        return "cyan"

    }else if(arr.includes("yellow") && arr.includes("red")){
        // for learning purposes I will keep this conditional here as opposed to the first
        return "orange"
    }else if(arr.includes("green") && arr.includes("red")){
        // for learning purposes I will keep this conditional here as opposed to the first
        return "brown"
    }
    else if(arr.includes("white") && arr.includes("red")){
        // for learning purposes I will keep this conditional here as opposed to the first
        return "pink"
    }else if (arr.includes("white") && arr.includes("blue")) {
        return "light-blue";
    } else if (arr.includes("red") && arr.includes("brown")) {
        return "maroon";
    }


    return ""
        

}



export default genColour;