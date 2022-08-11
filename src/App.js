import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import add from './add.jpg';
import Add1 from './Add1.jpg';
import add2 from './add2.jpg';  
function App() {
  const [post, setPost] = useState([]);

  const imgLink=[add,Add1,add2];
  const link="https://dog.ceo/api/breeds/list/all";
  //const link1="http://localhost:8080/mens";
 useEffect(() => {
    
    axios.get(link).then((response) => {
      console.log(response);
        //response.data.message.map((dog,key) => console.log(dog));
        
         const newPost=[];
          for(var i in response.data.message)
          {
              // console.log(i);
               if(response.data.message[i].length !==0)
               {
                   for(var j of response.data.message[i])
                   {
                     // console.log(i+" "+j);
                      newPost.push(i+" "+j); 
                     // setPost(...+(i+" "+j));
                   }
               }
               else
                {
                     newPost.push(i); 
                   // setPost(...+(i)); 
                }      
       } 

       setPost(post=>newPost);    

   
    });           
  },[]); 
  
  const listNames = post.map((breed,key)=>                
  <>    
   
  <div className="val"> 
     {/* console.log(key)*/}
    <img src={imgLink[key%imgLink.length]} alt="Dog" style={{width:"100px", height:"150px", borderRadius:"8px"}}/>  
  
       
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
