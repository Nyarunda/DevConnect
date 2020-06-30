import React from 'react';

const SidebarRight = () => {
  return (
    <div className='col-lg-3 pd-right-none no-pd'>
      <div className='right-sidebar'>
        <div className='widget widget-about'>
          <img src='images/wd-logo.png' alt='' />
          <h3>Let's Chat Sport</h3>
          <span>Share Betting Ideas and Odds</span>
          <div className='sign_link'>
            <h3>
              <a href='sign-in.html' title=''>
                Sign up
              </a>
            </h3>
            <a href='#' title=''>
              Learn More
            </a>
          </div>
        </div>
        {/* <!--widget-about end--> */}
        <div className='widget widget-jobs'>
          <div className='sd-title'>
            <h3>Top Jobs</h3>
            <i className='la la-ellipsis-v'></i>
          </div>
          <div className='jobs-list'>
            <div className='job-info'>
              <div className='job-details'>
                <h3>Odds</h3>
                <p>Oddodddodddodddo dododododododo..</p>
              </div>
              <div className='hr-rate'>
                <span>$25/hr</span>
              </div>
            </div>
            {/* <!--job-info end--> */}

            <div className='job-info'>
              <div className='job-details'>
                <h3>Senior Developer Designer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
              </div>
              <div className='hr-rate'>
                <span>$25/hr</span>
              </div>
            </div>
            {/* <!--job-info end--> */}
          </div>
          {/* <!--jobs-list end--> */}
        </div>
        {/* <!--widget-jobs end--> */}
      </div>
      {/* <!--right-sidebar end--> */}
    </div>
  );
};

export default SidebarRight;
