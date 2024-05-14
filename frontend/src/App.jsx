import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import DeleteContact from './pages/DeleteContact';
import CreateContact from './pages/CreateContact';
import ShowContact from './pages/ShowContact';
import EditContact from './pages/EditContact';
import UploadContact from './pages/UploadContact';


const App = () => {
  return (
    <Routes>
      <Route path='/' element ={<Home></Home>} />
      <Route path='/contacts/create' element ={<CreateContact></CreateContact>} />
      <Route path='/contacts/details/:id' element ={<ShowContact></ShowContact>} />
      <Route path='/contacts/edit/:id' element ={<EditContact></EditContact>} />
      <Route path='/contacts/delete/:id' element ={<DeleteContact></DeleteContact>} />
      <Route path='/contacts/upload' element ={<UploadContact></UploadContact>} />
    </Routes>
  );
}

export default App