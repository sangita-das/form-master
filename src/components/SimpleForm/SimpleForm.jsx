

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log(e.target.name.value);
        // e.prevent.value
console.log('form submit')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br/>
                <input type="text" name="email" placeholder="Email"/>
                <input type="text" name="phone" placeholder="Phone"/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;  