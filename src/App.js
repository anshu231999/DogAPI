import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import add from './add.jpg';
function App() {
  const [post, setPost] = useState([]);

 useEffect(() => {
   
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
        //response.data.message.map((dog,key) => console.log(dog));
      
          for(var i in response.data.message)
          {
              // console.log(i);
               if(response.data.message[i].length !==0)
               {
                   for(var j of response.data.message[i])
                   {
                     // console.log(i+" "+j);
                      post.push(i+" "+j); 
                     // setPost(...+(i+" "+j));
                   }
               }
               else
                {
                     post.push(i); 
                   // setPost(...+(i)); 
                }      
       }     
    
   
    });           
  },[]);
  const listNames = post.map((breed,key)=>              
  <>       
     
  <div className="val"> 
     {/* console.log(key)*/}
    <img src={add} alt="Dog" style={{width:"100px", height:"150px", borderRadius:"8px"}}/>  
  
       
      <p>{breed}</p>
    </div> 
   
   </>   
  );    
  return (   
    <div className="App">                                                          
    <h1>Dog Breed</h1>  
          
    <div className="container">    
     
          
         {listNames}  
           
    </div>
    </div>
   
  );
}

export default App;
