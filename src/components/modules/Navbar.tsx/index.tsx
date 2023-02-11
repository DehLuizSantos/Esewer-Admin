import React from 'react';
import { Navbar } from '@mantine/core';

const NavBarLinks: React.FC = () => {
  return (
    <>
      <Navbar.Section grow mt="md">
        {/* <MainLinks /> */}
        links
      </Navbar.Section>
      <Navbar.Section>
        {/* <User /> */}
        user
      </Navbar.Section>
    </>
  );
};

export default NavBarLinks;
