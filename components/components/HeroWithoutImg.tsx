import React from 'react';

import { HeroWithoutImage } from 'alltypes';
const Hero = ({ children, title }: HeroWithoutImage) => {
  return (
    <section className="core">
      <div className="hero hero--wi">
        <div className="hero__title hero__title--wi">
          <h2 className="hero__title__text hero__title__text--wi">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Hero;
