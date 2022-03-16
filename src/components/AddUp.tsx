import { useState } from "react";

export function AddUp(){
    let x: number = 17;
    let y: string ="4";

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    function A(e: any){
        setFirstNumber(parseInt(e.target.value));
}
    function B(e:any){
        setSecondNumber(parseInt(e.target.value));
}
    function btnClick(){
        setResult(firstNumber + secondNumber)
    }
return (
    <>
    <div>{x}</div>
    <div>{y}</div>
    <input type="number" onChange={A}value={firstNumber}></input>
    <input type="number" onChange={B}value={secondNumber}></input>
    <button onClick={btnClick}>Tryck på knappen </button>
    <br></br>
    {result}
    </>
)
}