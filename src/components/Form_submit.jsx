import { useRef, useState } from "react";



const Form_submit = () => {
    const [error, setError] = useState('')
     const nameRef = useRef('null');
     const emailRef = useRef('null');
     const passwordRef = useRef('null');


   const handleSubmit = e =>{
        e.preventDefault(); 
        if(passwordRef.length < 6){
            setError('password must be 6 character or longer')
        }
        else{
            setError('')
        }
        

        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }

    


    return (
        <div>
           <form onSubmit={handleSubmit} action="">

             <input
             ref={nameRef}
              type="text" name= "name"/>
            <br/>
            <input
            ref={emailRef}
             type="text" name= "email"/>
            <br/>
            <input
            ref={passwordRef} type="text" name= "password"/>
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