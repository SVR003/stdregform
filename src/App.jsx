import { useState } from 'react'
import './App.css'

function App() {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    contact: '',
    address: '',
    dob: '',
    subject: '', 
  })

  const handleChanges = (e) =>{
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
    alert('Data Stored Successfully')
    
  }

  const resetFunc = () => {
    setValues({firstname: '',lastname: '',email: '',contact: '',gender: '',subject: '',address: '',dob: ''})
  }
  
  return (
    <>
      <div className='container' >
        
          <h1>Admission Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder='Enter First Name' name='firstname' onChange={(e) => handleChanges(e)} required  value={values.firstname}/>
  
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder='Enter Last Name' name='lastname' onChange={(e) => handleChanges(e)} required value={values.lastname}/>
  
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email Id' name='email' onChange={(e) => handleChanges(e)} required value={values.email}/>
  
            <label htmlFor="contact">Contact</label>
            <input type="number" placeholder='Enter Phone no' name='contact' onChange={(e) => handleChanges(e)} required value={values.contact}/>

            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" cols="20" onChange={(e) => handleChanges(e)} placeholder='Enter Your Address' value={values.address}></textarea>
  
            <label htmlFor="gender">Gender</label>
            <input type="radio" name='gender' onChange={(e) => handleChanges(e)} value={values.gender} /> Male
            <input type="radio" name='gender' onChange={(e) => handleChanges(e)} value={values.gender} /> Female
            <input type="radio" name='gender' onChange={(e) => handleChanges(e)} value={values.gender} /> Other

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required onChange={(e) => handleChanges(e)} value={values.dob}></input>
  
            <label htmlFor="subject">Course</label>
            <select name="subject" id="subject" required onChange={(e) => handleChanges(e)} value={values.subject}>
              <option value="select" actio>-Select-</option>
              <option value="biology">Biology</option>
              <option value="cs">Computer Science</option>
              <option value="commerce">Commerce</option>
              <option value="humanities">Humanities</option>
            </select>
  
            <button type='button' onClick={resetFunc}>Cancel</button>
            <button type='submit'>Submit</button>
  
          </form>
      </div>
    </>
  )
}

export default App
