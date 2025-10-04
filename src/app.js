import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Card from "./components/Card";


   
  const arr = [{cloth:"Tshirt", Offer:"20-40%Off" , price:200},{cloth:"Panct", Offer:"30-50%Off",price:2000},{cloth:"Skirt", Offer:"10-20%Off",price:1100},{cloth:"Kurta", Offer:"30-60%Off",price:400},{cloth:"Patloon", Offer:"11-40%Off",price:500},{cloth:"Shoes", Offer:"40-60%Off",price:2200},{cloth:"Shirt", Offer:"10-20%Off",price:1400},{cloth:"Bag", Offer:"15-40%Off",price:600}]
function App() {
      
    let [A,setA]=useState(arr);
    function sortArray( ) {
      A.sort((a,b)=> a.price-b.price );
      setA([...A])

    }
    function sortArrayp( ) {
   let bb=arr.filter((value)=>value.price>499)
   setA(bb)

    }
  
    
    return(
        <>
        <Header/>
        <button onClick={sortArray} > sort  </button>
        <button onClick={sortArrayp} > filter  </button>
          <div style={{display:"flex",gap:"5px",flexWrap:"wrap",justifyContent:"center"}}>
         {
          A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price} />)   
        }
          </div>
        </>
    )

  }

 
  
let root=ReactDOM.createRoot(document.querySelector('.project'));
root.render(<App/>)