import React, { useState } from 'react'
import AddList from './AddList';

const Create = () => {
    const mystyle = {
        width: "50%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        border: "2px solid blue",
  borderRadius: "4px"
      };
      const button={
        backgroundColor: "blue",
        border: "none",
        color: "white",
        padding: "16px 32px",
        textDecoration: "none",
        margin: "4px 2px",
        cursor:"pointer",
        width: "50%",
        border: "2px solid blue",
        borderRadius: "4px",
          fontSize: "15px"


      };

      const [inputList,setInputList] = useState("");
      const [items,setItems] =useState([]);

      const itemEvent = (event)=>{
        setInputList(event.target.value);
}

      const listOfItems = ()=>{
           setItems((oldItems)=>{
            return [...oldItems,inputList];
           })
 setInputList("")}
      function deleted (id){
        console.log("delete")
        console.log(id);
        setItems((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
                return index !== id;

            })
        })
       
      }
 return (
    <div className='create'> 
    <h1> Add Your Task</h1>  
  
    
    <input  style={mystyle}  type="text" placeholder="Add your task" onChange={itemEvent} value={inputList}></input><br></br>
    <button style={button} onClick={listOfItems}>ADD</button>
   

    <ol>
      {  items.map((items,index)=>{

        return    <AddList key ={index} id={index} text = {items} onSelect = {deleted}

        />
        })}
    </ol>
  </div>
  )
}

export default Create