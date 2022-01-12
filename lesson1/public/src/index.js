import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import "./style.css"

function sum(a, b) {
    alert (a + b)
}

function primeiroJSX() {
    return (
        <div>
            Holivane Holanda - Introdução ao ReactJS
            <h3>Soma: {sum(10, 20)}</h3>
        </div>
    )
}

function App () {
    return (
        <div className="App">
            Hello World
            {primeiroJSX};
            <Button onClick={() => sum(10, 20)} name="Holivane Holanda" />
        </div>
    )
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)