import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef (null);
    const emailRef = useRef (null);
    const passwordRef = useRef(null);

    useEffect( () =>{
        nameRef.current.focus();
    },[])


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Name"/>
                <br/>
                <input ref={emailRef} type="text" name="email" defaultValue={'hakimuki@gmail.com'} placeholder="Email"/>
                <input ref={passwordRef} type="text" name="password" placeholder="Password"/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;