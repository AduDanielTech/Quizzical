import React from 'react';
function Help() {
    const[user,setUser] = React.useState([])
    
    const[ret,setRet] = React.useState({
        gender: '',
        name:[] ,
        location: [],
        email: ''

    })
    const[Name,setName] = React.useState([])
      
    React.useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data=> setUser(data.results[0]) ) 
        .then(returned)
    },[])
console.log(ret.name);
    function returned() {
        
     /*    setName(pre => ({
            ...pre,
            title: name.title
        })) */
        setRet(pre => ({
            ...pre,
            gender: user.gender,
            name:  ret.name.push(user.name)
            
 })) 
    }


  
    return (  
        <div>
           <h1> Name: {ret.name}</h1>
           <h1> gender: {ret.gender}</h1>
           <h1> location: {ret.location}</h1>
           <h1> email: {ret.email}</h1>
          
      {/*  {user.map((data) => {
       return (
        <div>
            {console.log(data)}
        </div>
       )
    })} */}
 
        </div>
    );
}

export default Help;