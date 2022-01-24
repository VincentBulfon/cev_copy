import Image from 'next/image';
import React from 'react';
import { Hero as HeroType } from 'alltypes';

const Hero = ({
  src,
  width,
  height,
  title,
  children,
  className = '',
}: HeroType) => {
  return (
    <section className="core">
      <div className={`hero hero--low ${className}`}>
        <Image
          key={'hero_main_image'}
          aria-hidden="true"
          className="hero__img hero__img--spec"
          src={src}
          width={width}
          height={height}
          layout="responsive"
        />
        <div className="hero__title">
          <h2 className="hero__title__text">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Hero;
