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
          <MenuItem title="Overview" icon="ic-menu-overview" href="/" active />
          <MenuItem
            title="Transactions"
            icon="ic-tote-bag"
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="ic-message" href="/member" />
          <MenuItem title="Card" icon="ic-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-reward" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-settings"
            href="/member/edit-profile"
          />
          <MenuItem title="Log Out" icon="ic-shutdown" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
