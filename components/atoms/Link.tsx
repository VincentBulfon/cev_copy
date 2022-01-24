import React from 'react';
import NextLink from 'next/link';
import { LinkType } from 'alltypes';

const NavLink = ({
  to,
  name,
  className = '',
  onClick = () => {},
}: LinkType): JSX.Element => {
  return (
    <NextLink href={to}>
      <a itemProp="url" onClick={onClick} className={className}>
        {name}
      </a>
    </NextLink>
  );
};

export default NavLink;
