import { useState } from "react";


const Form_submit = () => {
     const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');
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

    const handleName = e =>{
        setName(e.target.value)
    }

    const handleEmail = e =>{
        setEmail(e.target.value)
    }

    const handlepassword = e =>{
        setPassword(e.target.value)
    }


    return (
        <div>
           <form onSubmit={handleSubmit} action="">

             <input
             onChange={handleName}
              type="text" name= "name"/>
            <br/>
            <input
            onChange={handleEmail}
             type="text" name= "email"/>
            <br/>
            <input
            onChange={handlepassword} type="text" name= "password"/>
            <br/>
            <input type="submit" value="Submit"/>

            {
                error && <p>{error}</p>
            }
           </form>
        </div>
    );
};

export default Form_submit;