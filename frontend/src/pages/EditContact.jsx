import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditContact = () => {
  const urltouse = 'http://localhost:5555/contacts'
  // const urltouse = 'https://contactlist-1-orkk.onrender.com/contacts'
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('');
  const [title, setTitle] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  
  useEffect(() => {
    setLoading(true);
    axios.get(urltouse + '/' + `${id}`)
    .then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setOrganization(response.data.organization);
      setTitle(response.data.title);
      setPhoneNumber(response.data.phoneNumber)
      setAddress(response.data.address)
      setEmail(response.data.email)
      setNotes(response.data.notes)
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false);
      alert('An error Occurred, please check console');
      console.log(error)
    })
  }, [])
  
  
  const handleEditContact = () => {
    const data = {
      firstName,
      lastName,
      organization,
      title,
      phoneNumber,
      address,
      email,
      notes
    };
    console.log(data)
    setLoading(true);
    axios
      .put(urltouse + '/' + `${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred, please check console');
        console.log(error);
      })
  }


  return (
    <div className='p-4'>
      <BackButton></BackButton>
      <h1 className='text-3xl my-4'>Edit Contact</h1>
      {loading ? <Spinner></Spinner> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>First Name</label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Last Name</label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Organization</label>
          <input
            type='text'
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Phone Number</label>
          <input
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Address</label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Other Notes</label>
          <input
            type='text'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'>

            </input>
        </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleEditContact}>
        Save Contact
      </button>

      </div>
      
    </div>
  )
}

export default EditContact