import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root() {
  return (
    <div className='flex flex-col'>
      <Navbar />

      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
}
