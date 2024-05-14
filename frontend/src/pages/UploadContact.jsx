import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UploadContact = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [title, setTitle] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleSaveContact = () => {
    const data = {
      name,
      organization,
      title,
      phoneNumber,
      address,
      email,
      notes
    };
    setLoading(true);
    axios
      .post('https://contactlist-1-orkk.onrender.com/contacts', data)
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
        <h1 className='text-3xl my-4'>Upload Contact</h1>
        {loading ? <Spinner></Spinner> : ''}
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'></label>
          <input
            type='file'
            className='border-2 border-gray-500 px-4 py-2'>
            </input>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveContact}>
        Upload Contact
      </button>
    </div>
  )
}

export default UploadContact