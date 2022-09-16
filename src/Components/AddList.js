import React from 'react'

const AddList = (props) => {

  const button={
    backgroundColor: "Red",
    border: "none",
    color: "white",
    padding: "5px 12px",
    textDecoration: "none",
    margin: "4px 2px",
    cursor:"pointer",
    width: "15%",
    border: "2px solid red",
    borderRadius: "4px",
      fontSize: "10px",
      textAlign:"center"


  };
 

  return (
    <div  style={{display:"flex" ,width:"100%"}} >
     <div style={{flex: "30%", padding: "10px",height: "20px"}}>
      <li style={{listStyleType: "none",margin: "0",padding: "0"}}>{props.text}</li>
      </div> 
   <div style={{flex: "50%", padding: "10px",height: "20px"}}> 
   <button  style={button}  onClick={()=>{ console.log(props.id);props.onSelect(props.id)}}>Completed</button>
   </div>
    </div>
  );
}

export default AddList;


// style={{
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
 
// }}


