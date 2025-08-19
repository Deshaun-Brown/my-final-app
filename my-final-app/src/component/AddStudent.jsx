import React, {useState} from 'react';
import { nanoid } from 'nanoid';

function AddStudent() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[selectedfile, setSelectedFile] = useState();

    const imageUpdate = (e) => {
        setSelectedFile(e.target.files[0]);
}

const doWork =() => {
    const newStudent = {'id': nanoid(), 'firstName' : firstName, 'lastName': lastName, 'email':email, 'images':selectedfile.name}
}

  return (
    <div className='row'>AddStudent
    <div className='col-med-3'>
        <label htmlFor='txtFirstName' className='form-label'>First Name</label>
        <input type='text' id='txtFirstName' className='form-control' placeholder=' First Name' onChange={(evt)=>setFirstName(evt.currentTarget.value)} value={firstName}/>
    </div>
        <div className='col-med-3'>
        <label htmlFor='txtFirstName' className='form-label'>Last Name</label>
        <input type='text' id='txtLastName' className='form-control' placeholder='Last Name' onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName} />
    </div>
    <div className='col-med-3'>
        <label htmlFor='txtFirstName' className='form-label'>Email Address</label>
        <input type='text' id='txtEmail' className='form-control' placeholder='Email' onChange={(evt) => setEmail(evt.currentTarget.value)} value={email} />
    </div>
    <div className='col-med-3'>
        <label htmlFor='txtFirstName' className='form-label'>Student Image</label>
        <input type='text' id='fileUpload' name='file' className='form-control'  onChange={imageUpdate} />
    </div>
    <div className='col-med-2'>
        <label htmlFor='txtGradYear' className='form-label'>Graduation Year</label>
        <input type='text' id='txtGradYear' className='form-control' placeholder='Email Address' onChange={(evt) => setEmail(evt.currentTarget.value)} value={email}/>
    </div>
    <div className='col-md-4'>
        <button type='button' className='btn btn-success' id='AddStudent' onClick={doWork}>Add Student</button>
        </div>
    </div>
  )
}

export default AddStudent