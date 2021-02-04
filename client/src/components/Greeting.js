import React, { Fragment, useState } from 'react';

const Greeting = () => {
    const [greeting,setGreeting] = useState("");

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/newGreeting",{
                method: 'POST',                
                body: JSON.stringify({ greeting }),
                headers: { 'Content-Type': 'application/json' },
            })
            setGreeting("")
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }
    return (
    <Fragment>
        <h1 className = "text-center mt-5">Greeting</h1>
        <form className = "d-flex mt-5" onSubmit ={onSubmitForm}>
            <input type = "text" className = "form-control" 
            value = {greeting} onChange = {e =>setGreeting(e.target.value)}/>
            <button className = "btn btn-success">Add</button>
        </form>
    </Fragment>)
}

export default Greeting;
