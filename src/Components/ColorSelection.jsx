function ColorSelection({Classname,color,onclick}){


    function handleClick(){
        onclick(color)
    }

    return(<button className={Classname} color={color}onClick={handleClick}>{color}</button>);
}

export default ColorSelection;