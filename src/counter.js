import React,{useState} from "react";
import ReactDOM from "react-dom/client";
   
function APP() {
 
   let [count,setcount]=useState(0);
    function call () {
        count=count+1;
        setcount(count);
    }
    
    function call1 () {
        count=count-1;
        setcount(count);
    }
    
   return(
    <div id="APP" style={{backgroundColor:"pink", width:"300px",textAlign:"center"}}>
        <h1>countdown {count} </h1>
        <button onClick={call }>+</button>
        <button onClick={call1}>-</button>
    </div>
   )

}

ReactDOM.createRoot(document.getElementById('root')).render(<APP count="jhdgjfg" />)