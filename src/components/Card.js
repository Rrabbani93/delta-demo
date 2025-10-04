  export default function Card(props) {
         return (
     
       <div  style={{ backgroundColor:"green",border:"2px solid green",color:"white",justifyContent:"center",padding:"3px"}}>
      
            <img src="one.jpg" width="150px" height="150px"  />
            <div style={{textAlign:"center" ,color:"white"}}>
                <h2>{props.offer}</h2>
                <h4>{props.cloth}</h4>
                <h3>{props.price}</h3>
                <h4>Shop Now</h4>
            </div>
        </div>
    )
    } 