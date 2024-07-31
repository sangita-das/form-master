import { useState } from "react";


const StatefullForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault(); 
        if(password.length < 6){
            setError('password must be 6 character or longer')
        }
        else{
            setError('')
        }
        console.log(name, email, password);
    }
    const handleNameChange = e => {
        console.log(e.target.value)
        setName(e.target.value);
    }


    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                 type="text" name="name" placeholder="name"/>
                <br/>
                <input 
                onChange={handleEmailChange}
                type="text" name="email" placeholder="email"/>
                <br/>
                <input
                onChange={handlePasswordChange}
                 type="text" name="password" placeholder="password" required/>
                <br/>
                <input type="submit" value="Submit"/>

                {
                    error && <p> {error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;