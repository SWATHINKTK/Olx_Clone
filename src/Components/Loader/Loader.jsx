import React from 'react';
import './loader.css';

function Loader() {
  return (
    <div className='flex items-center justify-center h-svh'>
        <div class="loader">
            <span class="loader-text">loading</span>
            <span class="load"></span>
        </div>
    </div>
  )
}

export default Loader
