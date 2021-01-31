import React, { Fragment, useState } from 'react';

const RandomGreeting = () => {
    const [greeting,setGreeting] = useState('');

    const onClickRandomGreeting = async() =>{
        try {
            const response = await fetch('http://localhost:3000/getGreeting',{
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
        <button className = "text-center mt-5 btn" onClick={onClickRandomGreeting}>Pick Random Greeting</button>
        <h2 className = "text-center">{greeting}</h2>
    </Fragment>)
}

export default RandomGreeting;
