import React from 'react';
import Logoimg from '../../images /logo.png';

const Logo = () => {
  return (
    <div className='logo'>
      <a href='/' title=''>
        <img src={Logoimg} alt='' />
      </a>
    </div>
  );
};

export default Logo;
