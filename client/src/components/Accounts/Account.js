import React from 'react';
import user from '../../images /resources/user.png';

const Account = () => {
  return (
    <div className='user-account'>
      <div className='user-info'>
        <img src={user} alt='' />
        <a href='/#' title=''>
          John
        </a>
        <i className='la la-sort-down'></i>
      </div>
      <div className='user-account-settingss' id='users'>
        <h3>Online Status</h3>
        <ul className='on-off-status'>
          <li>
            <div className='fgt-sec'>
              <input type='radio' name='cc' id='c5' />
              <label htmlfor='c5'>
                <span></span>
              </label>
              <small>Online</small>
            </div>
          </li>
          <li>
            <div className='fgt-sec'>
              <input type='radio' name='cc' id='c6' />
              <label for='c6'>
                <span></span>
              </label>
              <small>Offline</small>
            </div>
          </li>
        </ul>
        <h3>Custom Status</h3>
        <div className='search_form'>
          <form>
            <input type='text' name='search' />
            <button type='submit'>Ok</button>
          </form>
        </div>
        <h3>Setting</h3>
        <ul className='us-links'>
          <li>
            <a href='/profile-account-setting.html' title=''>
              Account Setting
            </a>
          </li>
          <li>
            <a href='/#' title=''>
              Privacy
            </a>
          </li>
          <li>
            <a href='/#' title=''>
              Faqs
            </a>
          </li>
          <li>
            <a href='/#' title=''>
              Terms & Conditions
            </a>
          </li>
        </ul>
        <h3 className='tc'>
          <a href='sign-in.html' title=''>
            Logout
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Account;
