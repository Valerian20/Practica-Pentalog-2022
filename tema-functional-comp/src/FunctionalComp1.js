import React from "react"
import Buton from "./FunctionalComp2"

// const TestComponent=()=>{
//    return(<h1>Welcome from test component</h1>)
// }

const Var1=()=>{
    const text="Text din componenta Var1"
    return(<Buton textProp={text}/>)
}
export default Var1