import React from 'react';
import Link from 'next/link';

import { CallToAction as CtaType } from 'alltypes';

const CallToAction = ({
  to,
  name,
  className = '',
  children,
  main,
}: CtaType) => {
  return (
    <Link href={to}>
      <a className={main ? `cta cta--main ${className}` : `cta ${className}`}>
        <div className="cta__content">
          {children}
          <p className="cta__content__text">{name}</p>
        </div>
      </a>
    </Link>
  );
};

export default CallToAction;
