import React from 'react';
import us_pic from '../../images /resources/us-pic.png';
import envelop from '../../images /envelop.png';
import icon9 from '../../images /icon9.png';

const SidebarMd = () => {
  return (
    <div className='col-lg-6 col-md-8 no-pd'>
      <div className='main-ws-sec'>
        <div className='post-topbar'>
          <div className='user-picy'>
            <img src='images/resources/user-pic.png' alt='' />
          </div>
          <div className='post-st'>
            <ul>
              <li>
                <a className='post_project' href='/#' title=''>
                  Let's Chats Sports
                </a>
              </li>
            </ul>
          </div>
          {/* <!--post-st end--> */}
        </div>
        {/* <!--post-topbar end--> */}
        <div className='posts-section'>
          <div className='post-bar'>
            <div className='post_topbar'>
              <div className='usy-dt'>
                <img src='images/resources/us-pic.png' alt='' />
                <div className='usy-name'>
                  <h3>John Doe</h3>
                  <span>
                    <img src={us_pic} alt='' />3 min ago
                  </span>
                </div>
              </div>
              <div className='ed-opts'>
                <a href='/#' title='' className='ed-opts-open'>
                  <i className='la la-ellipsis-v'></i>
                </a>
                <ul className='ed-options'>
                  <li>
                    <a href='/#' title=''>
                      Edit Post
                    </a>
                  </li>
                  <li>
                    <a href='/#' title=''>
                      Unsaved
                    </a>
                  </li>
                  <li>
                    <a href='/#' title=''>
                      Unbid
                    </a>
                  </li>
                  <li>
                    <a href='/#' title=''>
                      Close
                    </a>
                  </li>
                  <li>
                    <a href='/#' title=''>
                      Hide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='epi-sec'>
              <ul className='descp'>
                <li>
                  <img src={icon9} alt='' />
                  <span>Epic Coder</span>
                </li>
                <li>
                  <img src={icon9} alt='' />
                  <span>India</span>
                </li>
              </ul>
              <ul className='bk-links'>
                <li>
                  <a href='/#' title=''>
                    <i className='la la-bookmark'></i>
                  </a>
                </li>
                <li>
                  <a href='/#' title=''>
                    <i className='la la-envelope'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='job_descp'>
              <h3>Senior Wordpress Developer</h3>
              <ul className='job-dt'>
                <li>
                  <a href='/#' title=''>
                    Full Time
                  </a>
                </li>
                <li>
                  <span>$30 / hr</span>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...
                <a href='/#' title=''>
                  view more
                </a>
              </p>
              <ul className='skill-tags'>
                <li>
                  <a href='/#' title=''>
                    HTML
                  </a>
                </li>
                <li>
                  <a href='/#' title=''>
                    PHP
                  </a>
                </li>
                <li>
                  <a href='/#' title=''>
                    CSS
                  </a>
                </li>
                <li>
                  <a href='/#' title=''>
                    Javascript
                  </a>
                </li>
                <li>
                  <a href='/#' title=''>
                    Wordpress
                  </a>
                </li>
              </ul>
            </div>
            <div className='job-status-bar'>
              <ul className='like-com'>
                <li>
                  <a href='/#'>
                    <i className='fas fa-heart'></i> Like
                  </a>
                  <img src={us_pic} alt='' />
                  <span>25</span>
                </li>
                <li>
                  <a href='/#' className='com'>
                    <i className='fas fa-comment-alt'></i> Comment 15
                  </a>
                </li>
              </ul>
              <a href='/#'>
                <i className='fas fa-eye'></i>Views 50
              </a>
            </div>
          </div>
          {/* <!--post-bar end--> */}
          <div className='top-profiles'>
            <div className='pf-hd'>
              <h3>Top Profiles</h3>
              <i className='la la-ellipsis-v'></i>
            </div>
            <div className='profiles-slider'>
              <div className='user-profy'>
                <img src={us_pic} alt='' />
                <h3>John Doe</h3>
                <span>Graphic Designer</span>
                <ul>
                  <li>
                    <a href='/#' title='' className='followw'>
                      Follow
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='envlp'>
                      <img src={envelop} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='hire'>
                      hire
                    </a>
                  </li>
                </ul>
                <a href='/#' title=''>
                  View Profile
                </a>
              </div>
              {/* <!--user-profy end--> */}
              <div className='user-profy'>
                <img src={us_pic} alt='' />
                <h3>John Doe</h3>
                <span>Graphic Designer</span>
                <ul>
                  <li>
                    <a href='/#' title='' className='followw'>
                      Follow
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='envlp'>
                      <img src={envelop} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='hire'>
                      hire
                    </a>
                  </li>
                </ul>
                <a href='/#' title=''>
                  View Profile
                </a>
              </div>
              {/* <!--user-profy end--> */}
              <div className='user-profy'>
                <img src='images/resources/user3.png' alt='' />
                <h3>John Doe</h3>
                <span>Graphic Designer</span>
                <ul>
                  <li>
                    <a href='/#' title='' className='followw'>
                      Follow
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='envlp'>
                      <img src={envelop} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='hire'>
                      hire
                    </a>
                  </li>
                </ul>
                <a href='/#' title=''>
                  View Profile
                </a>
              </div>
              {/* <!--user-profy end--> */}
              <div className='user-profy'>
                <img src='images/resources/user1.png' alt='' />
                <h3>John Doe</h3>
                <span>Graphic Designer</span>
                <ul>
                  <li>
                    <a href='/#' title='' className='followw'>
                      Follow
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='envlp'>
                      <img src={envelop} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='hire'>
                      hire
                    </a>
                  </li>
                </ul>
                <a href='/#' title=''>
                  View Profile
                </a>
              </div>
              {/* <!--user-profy end--> */}
              <div className='user-profy'>
                <img src={us_pic} alt='' />
                <h3>John Doe</h3>
                <span>Graphic Designer</span>
                <ul>
                  <li>
                    <a href='/#' title='' className='followw'>
                      Follow
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='envlp'>
                      <img src={envelop} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='/#' title='' className='hire'>
                      hire
                    </a>
                  </li>
                </ul>
                <a href='/#' title=''>
                  View Profile
                </a>
              </div>
            </div>
            {/* <!--profiles-slider end--> */}
          </div>
          {/* <!--top-profiles end--> */}
          <div className='process-comm'>
            <div className='spinner'>
              <div className='bounce1'></div>
              <div className='bounce2'></div>
              <div className='bounce3'></div>
            </div>
          </div>
          {/* <!--process-comm end--> */}
        </div>
        {/* <!--posts-section end--> */}
      </div>
      {/* <!--main-ws-sec end--> */}
    </div>
  );
};

export default SidebarMd;
