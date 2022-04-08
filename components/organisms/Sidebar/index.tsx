import React from 'react';
import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" active />
          <MenuItem title="Transactions" icon="ic-tote-bag" />
          <MenuItem title="Messages" icon="ic-message" />
          <MenuItem title="Card" icon="ic-card" />
          <MenuItem title="Rewards" icon="ic-reward" />
          <MenuItem title="Settings" icon="ic-settings" />
          <MenuItem title="Log Out" icon="ic-shutdown" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
