import React from 'react';
import userimg from '../../images /resources/user-pic.png';
import logo2 from '../../images /logo2.png';
import cp from '../../images /cp.png';

const Sidebar = () => {
  return (
    <div className='col-lg-3 col-md-4 pd-left-none no-pd'>
      <div className='main-left-sidebar no-margin'>
        <div className='user-data full-width'>
          <div className='user-profile'>
            <div className='username-dt'>
              <div className={userimg}>
                <img src='' alt='' />
              </div>
            </div>
            {/* <!--username-dt end--> */}
            <div className='user-specs'>
              <h3>John Doe</h3>
              <span>Graphic Designer at Self Employed</span>
            </div>
          </div>
          {/* <!--user-profile end--> */}
          <ul className='user-fw-status'>
            <li>
              <h4>Following</h4>
              <span>34</span>
            </li>
            <li>
              <h4>Followers</h4>
              <span>155</span>
            </li>
            <li>
              <a href='/my-profile.html' title=''>
                View Profile
              </a>
            </li>
          </ul>
        </div>
        {/* <!--user-data end--> */}
        <div className='tags-sec full-width'>
          <ul>
            <li>
              <a href='/#' title=''>
                Help Center
              </a>
            </li>
            <li>
              <a href='/#' title=''>
                About
              </a>
            </li>
            <li>
              <a href='/#' title=''>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/#' title=''>
                Community Guidelines
              </a>
            </li>
            <li>
              <a href='/#' title=''>
                Cookies Policy
              </a>
            </li>
            <li>
              <a href='/#' title=''>
                Career
              </a>
            </li>
            <li>
              <a href='/#' title=''>
                Language
              </a>
            </li>
            <li>
              <a href='/#' title=''>
                Copyright Policy
              </a>
            </li>
          </ul>
          <div className='cp-sec'>
            <img src={logo2} alt='' />
            <p>
              <img src={cp} alt='' />
              Copyright 2019
            </p>
          </div>
        </div>
        {/* <!--tags-sec end--> */}
      </div>
      {/* <!--main-left-sidebar end--> */}
    </div>
  );
};

export default Sidebar;
