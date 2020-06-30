import React, { Fragment } from 'react';
import icon1 from '../../images /icon1.png';
import icon2 from '../../images /icon2.png';
import icon3 from '../../images /icon3.png';
import icon4 from '../../images /cc-icon4.png';
import icon7 from '../../images /icon7.png';
import ic5 from '../../images /ic5.png';
import icon6 from '../../images /ic6.png';
import nyimg1 from '../../images /resources/ny-img2.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to='/' title=''>
              <span>
                <img src={icon1} alt=''></img>
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to='/profile' title=''>
              <span>
                <img src={icon2} alt=''></img>
              </span>
              Profiles
            </Link>
            <ul>
              <li>
                <Link to='/profile' title=''>
                  User Profile
                </Link>
              </li>
              <li>
                <Link to='/my-profile-feed' title=''>
                  my-profile-feed
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/' title='' className='not-box-openm'>
              <span>
                <img src={icon3} alt=''></img>
              </span>
              Messages
            </Link>
            <div className='notification-box msg' id='message'>
              <div className='nt-title'>
                <h4>Setting</h4>
                <Link to='/' title=''>
                  Clear all
                </Link>
              </div>
              <div className='nott-list'>
                <div className='notfication-details'>
                  <div className='noty-user-img'>
                    <img src={nyimg1} alt=''></img>
                  </div>
                  <div className='notification-info'>
                    <h3>
                      <Link to='/messages.html' title=''>
                        Jassica William
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempo incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <span>2 min ago</span>
                  </div>
                </div>
                <div className='view-all-nots'>
                  <Link to='/messages.html' title=''>
                    View All Messsages
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to='/' title='' className='not-box-open'>
              <span>
                <img src={icon7} alt=''></img>
              </span>
              Notification
            </Link>
            <div className='notification-box noti' id='notification'>
              <div className='nt-title'>
                <h4>Setting</h4>
                <a to='/#' title=''>
                  Clear all
                </a>
              </div>
              <div className='nott-list'>
                <div className='notfication-details'>
                  <div className='noty-user-img'>
                    <img src={nyimg1} alt=''></img>
                  </div>
                  <div className='notification-info'>
                    <h3>
                      <a to='#' title=''>
                        Jassica William
                      </a>{' '}
                      Comment on your project.
                    </h3>
                    <span>2 min ago</span>
                  </div>
                </div>
                <div className='view-all-nots'>
                  <a to='/#' title=''>
                    View All Notification
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      {/* Menu */}
      <div className='menu-btn'>
        <a to='/#' title=''>
          <i className='fa fa-bars'></i>
        </a>
      </div>
    </Fragment>
  );
};

export default Nav;
