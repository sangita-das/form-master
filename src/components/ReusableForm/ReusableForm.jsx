

const ReusableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }
    return (
        <div>
        {/* <h2>{formTitle}</h2> */}
        {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br/>
                <input type="text" name="email" placeholder="Email"/>
                <input type="text" name="password" placeholder="password"/>
                <br/>
                <input  type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;