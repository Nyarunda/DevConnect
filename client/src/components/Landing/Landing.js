import React from 'react';
import SidebarLeft from '../Sidebar/SidebarLeft';
import SidebarMd from '../Sidebar/SidebarMd';
import SidebarRight from '../Sidebar/SidebarRight';

const Landing = () => {
  return (
    <main>
      <div className='main-section'>
        <div className='container'>
          <div className='main-section-data'>
            <div className='row'>
              <SidebarLeft />
              <SidebarMd />
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
