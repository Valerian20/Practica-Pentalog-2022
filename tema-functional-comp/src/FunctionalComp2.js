import React, { useState } from "react"

const Buton=(props)=>{

    const [contor, setCount]=useState(0)

    const handleClick=()=>{
        return setCount(contor+1)
    }
    return(
        <div>
            <button onClick={handleClick}>Click Here!</button>
            <div>{contor}</div>

            <p>{props.textProp}</p>
        </div>
    )
}
export default Buton