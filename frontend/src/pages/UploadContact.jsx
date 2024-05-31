import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import vCard from 'vcf';
import Constants from '../components/Constants'

const UploadContact = () => {
  const deployedurl = Constants.urltouse
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const vCards = vCard.parse(text);
      const contacts = vCards.map(card => ({
        firstName: card.get('n')?.valueOf()?.split(';')[1] || '',
        lastName: card.get('n')?.valueOf()?.split(';')[0] || '',
        organization: card.get('org')?.valueOf().slice(0,-1) || '',
        title: card.get('title')?.valueOf() || '',
        phoneNumber: card.get('tel')?.valueOf() || '',
        address: card.get('adr')?.valueOf() || '',
        email: card.get('email')?.valueOf() || '',
        note: card.get('note')?.valueOf() || ''
      }));
      console.log(contacts)
      handleUploadedContacts(contacts);
    };
    reader.readAsText(file);
    
  };

  const handleUploadedContacts = (contacts) => {
    setLoading(true);

    const uploadPromises = contacts.map(contact => axios.post(deployedurl, contact));

    Promise.all(uploadPromises)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred, please check console');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Upload Contacts</h1>
      {loading ? <Spinner /> : ''}
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>vCard File</label>
        <input
          type='file'
          accept='.vcf'
          onChange={handleFileChange}
          className='border-2 border-gray-500 px-4 py-2'
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={() => {}}>
        Upload Contacts
      </button>
    </div>
  );
};

export default UploadContact;
