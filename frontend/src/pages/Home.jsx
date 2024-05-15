import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfo, BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    // const urltouse = 'http://localhost:5555/contacts'
    const urltouse = 'https://contactlist-1-orkk.onrender.com/contacts'
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(urltouse)
            .then((response) => {
              setContacts(response.data.data);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            })
    }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Contacts List</h1>
        <Link to='/contacts/create'>
          <button className='text-sky-800 text-4xl p-2' style={{ fontSize: '24px', border: 'solid', background: 'none', cursor: 'pointer' }}>
            Add a Contact
          </button>
        </Link>
        <Link to='/contacts/upload'>
          <button className='text-sky-800 text-4xl p-2' style={{ fontSize: '24px', border: 'solid', background: 'none', cursor: 'pointer' }}>
            Add a Contact File
          </button>
        </Link>
      </div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <table className='w-full border-separate'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>Name</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Organization</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Title</th>
              <th className='border border-slate-600 rounded-md'>Phone Number</th>
              <th className='border border-slate-600 rounded-md'>Address</th>
              <th className='border border-slate-600 rounded-md'>Email</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {contact.name}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {contact.organization}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {contact.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {contact.phoneNumber}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {contact.address}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {contact.email}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <Link to={`/contacts/details/${contact._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800'>
                    </BsInfoCircle>
                  </Link>
                  <Link to={`/contacts/edit/${contact._id}`}>
                    <AiOutlineEdit className='text-2xl text-green-800'>
                    </AiOutlineEdit>
                  </Link>
                  <Link to={`/contacts/delete/${contact._id}`}>
                    <MdOutlineDelete className='text-2xl text-green-800'>
                    </MdOutlineDelete>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home