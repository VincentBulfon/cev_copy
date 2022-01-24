import React from 'react';
import NavLink from '../atoms/Link';
import SvgFacebookLogo from '../atoms/Svg/SvgFacebookLogo';

const Footer = () => {
  return (
    <footer className="footer clearfix">
      <h2 className="sro">Pied de page</h2>
      <section className="footer__section__contact">
        <h3 className="footer__section__title">Contact&nbsp;:</h3>
        <dl itemProp="employee" itemScope itemType="https://schema.org/Person">
          <dd className="sro">Nom</dd>
          <dt className="footer__contact__item">
            <span itemProp="givenName">Nicolas</span>{' '}
            <span itemProp="givenName">OLIVIER</span>
          </dt>
          <dd className="sro">Adresse email</dd>
          <dt className="footer__contact__item" itemType="email">
            nicolivier@gmail.com
          </dt>
          <dd className="sro">Numero de gsm</dd>
          <dt className="footer__contact__item" itemProp="telephone">
            0496 99 50 88
          </dt>
        </dl>
      </section>
      <section className="footer__section__socials">
        <h3 className="sro">Réseaux sociaux</h3>
        <a
          itemProp="url"
          href="https://www.facebook.com/groups/835274709858614/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="sro">Le lcub d'escalade sur Facebook</span>
          <SvgFacebookLogo />
        </a>
      </section>
      <section className="footer__section__legals">
        <h3 className="sro">Mention légales</h3>
        <NavLink
          className="footer__legals"
          to="/legals"
          name="Mentions légales"
        />
      </section>
    </footer>
  );
};

export default Footer;
