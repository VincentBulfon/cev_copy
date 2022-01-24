import { useState, useEffect, useCallback } from 'react';

import { isAdminVar, isLoggedVar, userFirstNameVar } from 'client/reactVars';

import { VERIFY_TOKEN } from 'operations/mutations/token';
import client from './apollo-provider';
import {
  verifyToken,
  verifyTokenVariables,
} from 'operations/__generated__/verifyToken';
import { RoleEnum } from 'operations/__generated__/globalTypes';

const AppLifecycleProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const [loaded, setLoaded] = useState(false);

  const init = useCallback(async () => {
    const sessionToken = localStorage.getItem('token');
    if (sessionToken) {
      const res = await client.mutate<verifyToken, verifyTokenVariables>({
        mutation: VERIFY_TOKEN,
        variables: {
          token: {
            token: sessionToken,
          },
        },
      });
      if (res.data) {
        if (
          res.data.verifyToken.response === true &&
          res.data.verifyToken.userId &&
          res.data.verifyToken.userRole
        ) {
          isLoggedVar({ isLogged: res.data.verifyToken.userId });
          isAdminVar({
            isAdmin:
              res.data.verifyToken.userRole === RoleEnum.ADMIN ||
              res.data.verifyToken.userRole === RoleEnum.MONITOR,
          });
          userFirstNameVar({
            userFirstName: res.data.verifyToken.userFirstName,
          });
        } else {
          isLoggedVar({ isLogged: '' });
          isAdminVar({ isAdmin: false });
          userFirstNameVar({ userFirstName: '' });
        }
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    init();
  }, []);
  return loaded ? children : null;
};

export default AppLifecycleProvider;
