import React from "react";
import { render } from "react-dom";

function Test(){
    return <h2>Hello World!</h2>
}

render(<Test/>, document.getElementById('app'));