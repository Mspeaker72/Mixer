function Result({color}){
    return(<input readOnly={true} className={color} placeholder={color}></input>);
}

export default Result;