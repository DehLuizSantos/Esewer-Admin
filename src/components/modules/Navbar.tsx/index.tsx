import React, { useState } from 'react';
import { Navbar } from '@mantine/core';
import * as S from './styles';
import Image from 'next/image';

type LinksProps = {
  link: string;
  href: string;
  icon: string;
};

type NavBarLinksProps = {
  links: Array<LinksProps>;
};

const NavBarLinks: React.FC<NavBarLinksProps> = ({ links }) => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      {links.map((link, index) => (
        <Navbar.Section key={index} onClick={() => setSelected(index)}>
          <S.NavbarLinksContainer>
            <div className={link.link}>
              <Image src={link.icon} width={15} height={15} alt={link.link} />
            </div>
            <p>{link.link}</p>
          </S.NavbarLinksContainer>
        </Navbar.Section>
      ))}
    </>
  );
};

export default NavBarLinks;
