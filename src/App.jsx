  

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import Map from './components/Map/Map'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'

// import RefForm from './components/RefForm/RefForm'

// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'



function App() {

  const handleSignUpSubmit = data =>{
        console.log('sign up data', data)
    }

   const handleUpdateProfile = data => {
    console.log('update profile', data)
   }

  // const [email, setEmail] = e => {

  // }


  return (
    <>

    <h2>Form Master</h2>

    <Grandpa></Grandpa>
      {/* <SimpleForm/> */}
      {/* <StatefullForm/> */}
      {/* <Form_submit/> */}
      {/* <RefForm/> */}
      {/* <HookForm/> */}

      <ReusableForm formTitle={'Sign Up'}
       handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText = 'update' handleSubmit={handleUpdateProfile} > 
      
      <div>
        <h2>Update profile</h2>
        <p>Always keep your profile updated</p>
      </div>
      </ReusableForm>
      <Map></Map>
    </>
  )
}

export default App
