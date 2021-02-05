import React, { Fragment, useState } from 'react';

const RandomGreeting = () => {
    
    const [greeting,setGreeting] = useState('');

    const onClickRandomGreeting = async() =>{
        try {
            const response = await fetch('http://localhost:4000/getGreeting',{            
                method: 'get',                
            }).then(function(response){    
                return response.json();
            })            
            setGreeting(response)
        } catch (error) {
            console.error(error);
        }
    }    

    return (
    <Fragment>
        <div className = "text-center mt-5">
            <button className = "text-center mt-3 btn" onClick={onClickRandomGreeting}>Pick Random Greeting</button>
        </div>
        <h2 className = "display-1 text-center mt-3">{greeting}</h2>
    </Fragment>)
}

export default RandomGreeting;
