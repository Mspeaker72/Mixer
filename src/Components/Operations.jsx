function Operations() {

    const bar =["Undo","Save","Restore","Email","Login"]

    return(
    <nav className="nav">
        <ul> {bar.map((operation)=> <li className="li" key={operation}>{operation}</li> )}</ul>
    </nav>)
}

export default Operations;