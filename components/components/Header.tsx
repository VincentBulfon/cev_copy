import React, { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import NavLink from 'components/atoms/Link';
import Svg_logo_small from 'components/atoms/Svg/SvgLogoSmall';
import MainDropdownLink from 'components/moleculs/MainDropdownLink';
import useClickOutsideHook from 'hooks/useClickOutsideHook';
import { isAdminVar, isLoggedVar, userFirstNameVar } from 'client/reactVars';

const Header = () => {
  //meun checkbox
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const route = useRouter().asPath;
  const [isUserMenuVisivble, setIsUserMenuVisivble] = useState<boolean>(false);
  const [isManagementMenuVisible, setIsManagementMenuVisible] =
    useState<boolean>(false);

  //todo change userPicture for link for user picture if he have one
  const userPicture = false;

  const dropLabel = useRef<HTMLLabelElement | null>(null);
  const menuToggle = useRef<HTMLInputElement | null>(null);
  const toggleLabel = useRef<HTMLLabelElement | null>(null);
  const navDropDown = useRef<HTMLInputElement | null>(null);
  const dropDownWrapper = useRef<HTMLDivElement | null>(null);
  const userMenu = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  let navLinks: NodeListOf<Element> | null;
  //update burger menu color
  useEffect(() => {
    navLinks = document.querySelectorAll('.nav__link__elmt');

    function toggleLabelColor() {
      if (toggleLabel.current?.children) {
        for (let i = 0; i < toggleLabel.current?.children.length; i++) {
          toggleLabel.current?.children[i].classList.toggle('orange');
          toggleLabel.current?.children[i].classList.toggle('close');
        }
      }
    }

    //handle change when menu is open or closed
    menuToggle.current?.addEventListener('change', () => {
      if (toggleLabel.current?.childNodes) {
        toggleLabelColor();
        setIsUserMenuVisivble(false);
        setIsManagementMenuVisible(false);
      }
    });

    //set uderline under current link
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', _ev => {
        toggleLabelColor();
        if (menuToggle.current?.checked) {
          //active menuToggle.onChange
          menuToggle.current.checked = false;
          setMenuIsOpen(false);
        }
        dropLabel.current?.classList.remove('nav__drop--active');
      });
    });

    //reset of useEffect
    return () => {
      menuToggle.current?.removeEventListener('change', () => {});
    };
  }, []);

  //set underline under current page link
  useEffect(() => {
    navLinks = document.querySelectorAll('.nav__link__elmt');
    if (navLinks) {
      navLinks.forEach(navLink => {
        navLink.getAttribute('href') === route
          ? navLink.classList.add('nav__link--active')
          : navLink.classList.remove('nav__link--active');
      });
    }

    if (navDropDown.current) {
      navDropDown.current?.querySelector('.nav__link--active')
        ? dropLabel.current?.classList.add('nav__link--active')
        : dropLabel.current?.classList.remove('nav__link--active');
    }
    //dropLabel.current?.classList.remove("nav__link--active");
  }, [route]);

  useEffect(() => {
    isManagementMenuVisible
      ? dropLabel.current?.classList.add('nav__drop--active')
      : dropLabel.current?.classList.remove('nav__drop--active');
  }, [isManagementMenuVisible]);

  //Disconnect the user recieve an envent.
  const handleDisconnect = function (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault;
    //if local storage clean the local storage
    if (localStorage) {
      localStorage.removeItem('token');
    }
    //set reactVar to default
    isLoggedVar({ isLogged: '' });
    isAdminVar({ isAdmin: false });
    //close the menu
    hideMenu();
    //return to home page
    router.push('/');
    return;
  };

  const hideMenu = () => {
    setIsManagementMenuVisible(false);
    setIsUserMenuVisivble(false);
    setMenuIsOpen(false);
  };

  useClickOutsideHook({
    ref: dropDownWrapper,
    callback: () => {
      setIsManagementMenuVisible(false);
    },
  });

  useClickOutsideHook({
    ref: userMenu,
    callback: () => {
      setIsUserMenuVisivble(false);
    },
  });

  return (
    <header className="header">
      <h1>
        <NextLink href="/">
          <a>
            <span className="sro">Club d'escalade visétois</span>
            <Svg_logo_small width={78} height={28} />
          </a>
        </NextLink>
      </h1>
      <div className="nav__wrapper">
        <input
          ref={menuToggle}
          tabIndex={0}
          type="checkbox"
          id="toggle"
          className="sro"
          onChange={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        />
        <label htmlFor="toggle" className="toggle__label" ref={toggleLabel}>
          <span className="sro">Déployer le menu</span>
          <span className="burger1"></span>
          <span className="burger2"></span>
          <span className="burger3"></span>
        </label>
        {}
        <nav className="main__nav" tabIndex={menuIsOpen ? 0 : -1}>
          <h2 className="sro">Navigation principale</h2>
          {/* #TODO create a reactive var to store connection state and check if user
      is connected here, replace "true" with reactiveVar value */}
          {isLoggedVar().isLogged !== '' && (
            <div className="nav__profil__container">
              <label htmlFor="profil">
                <span className="sro">Voir les options de mon profil</span>
                <Image
                  src={`${userPicture ? userPicture : '/assets/pp.svg'}`}
                  width="38"
                  height="38"
                  alt="photo de profil"
                  className="pp"
                  layout="responsive"
                />
              </label>
              <input
                ref={userMenu}
                onChange={() => {
                  setIsUserMenuVisivble(!isUserMenuVisivble);
                }}
                checked={isUserMenuVisivble}
                type="checkbox"
                name="profil"
                id="profil"
                className="sro"
              />
              <div className="nav__profil__menu">
                <p className="nav__profil__title">
                  {userFirstNameVar().userFirstName}
                </p>
                <NavLink
                  key={'link 0'}
                  className="nav__dropdown__link nav__dropdown__link--sb nav__link__elmt"
                  to="/me"
                  name="Profil"
                  onClick={hideMenu}
                />
                <a
                  onClick={e => handleDisconnect(e)}
                  className="nav__dropdown__link nav__dropdown__link--sb nav__link__elmt">
                  Déconnexion{' '}
                </a>
              </div>
            </div>
          )}
          <ul className="nav__links">
            <li>
              <NavLink
                key={'link_1'}
                className="nav__link nav__link__elmt"
                to="/"
                name="Le club"
                onClick={hideMenu}
              />
            </li>
            <li>
              <NavLink
                key={'link_2'}
                className="nav__link nav__link__elmt"
                to="/calendar"
                name="Calendrier"
                onClick={hideMenu}
              />
            </li>
            <li>
              <NavLink
                key={'link_3'}
                className="nav__link nav__link__elmt"
                to="/courses"
                name="Les cours"
                onClick={hideMenu}
              />
            </li>
            <li>
              <NavLink
                key={'link_4'}
                className="nav__link nav__link__elmt"
                to="/about"
                name="À propos"
                onClick={hideMenu}
              />
            </li>
            {!isAdminVar().isAdmin && (
              <li>
                <NavLink
                  key={'link_5'}
                  className="nav__link nav__link__elmt"
                  to={'/register'}
                  name="S'inscrire"
                  onClick={hideMenu}
                />
              </li>
            )}
            {isLoggedVar().isLogged === '' && isAdminVar().isAdmin === false && (
              <li>
                <NavLink
                  key={'link_6'}
                  className="nav__link nav__link__elmt"
                  to="/sign_in"
                  name="Se connecter"
                  onClick={hideMenu}
                />
              </li>
            )}
            {/* #TODO create a reactive var to store connection state and check if
          user is connected here, replace true with reactiveVar value */}
            {/* #TODO do not forget to do the logig here */}
            {isLoggedVar().isLogged !== '' && (
              <div className="drop__wrapper" ref={dropDownWrapper}>
                <label
                  ref={dropLabel}
                  htmlFor="manage"
                  className="nav__link nav__drop"
                  tabIndex={1}>
                  Gestion
                </label>
                <input
                  onChange={() => {
                    setIsManagementMenuVisible(!isManagementMenuVisible);
                  }}
                  checked={isManagementMenuVisible}
                  className="sro"
                  type="checkbox"
                  name="manage"
                  id="manage"
                  tabIndex={-1}
                />
                <MainDropdownLink
                  role={1}
                  refName={navDropDown}
                  hideMenuFunc={hideMenu}
                />
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
