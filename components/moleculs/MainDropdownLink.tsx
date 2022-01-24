import React from 'react';

import { NavDropDownTypes } from 'alltypes';
import NavLink from '../atoms/Link';
import Link from '../atoms/Link';
import { isAdminVar, isLoggedVar } from 'client/reactVars';

const MainDropdownLink = ({ refName, hideMenuFunc }: NavDropDownTypes) => {
  return (
    <div className="nav__dropdown" ref={refName}>
      <ul>
        {isLoggedVar().isLogged !== '' && isAdminVar().isAdmin !== true && (
          <>
            <li>
              {' '}
              <NavLink
                key={'link_1'}
                className="nav__dropdown__link nav__link__elmt"
                to="/me/payments"
                name="Mes paiements"
                onClick={hideMenuFunc}
              />
            </li>
            <li>
              <NavLink
                key={'link_2'}
                className="nav__dropdown__link nav__link__elmt"
                to="/me/subscriptions"
                name="Mes inscriptions"
                onClick={hideMenuFunc}
              />
            </li>
          </>
        )}
        {isAdminVar().isAdmin && (
          <>
            <li>
              <Link
                key={'link_04'}
                className="nav__dropdown__link nav__link__elmt"
                to="/management/users"
                name="Liste des inscrits"
                onClick={hideMenuFunc}
              />
            </li>
            <li>
              <NavLink
                key={'link_22'}
                className="nav__dropdown__link nav__link__elmt"
                to="/calendar"
                name="Calendrier"
                onClick={hideMenuFunc}
              />
            </li>
            <li>
              <Link
                key={'link_02'}
                className="nav__dropdown__link nav__link__elmt"
                to="/management/courses"
                name="Cours"
                onClick={hideMenuFunc}
              />
            </li>
            <li>
              <Link
                key={'link_03'}
                className="nav__dropdown__link nav__link__elmt"
                to="/management/prices"
                name="Tarifs"
                onClick={hideMenuFunc}
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MainDropdownLink;
