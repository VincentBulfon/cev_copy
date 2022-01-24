import { makeVar } from '@apollo/client';

export const isLoggedVar = makeVar({
  isLogged: '',
});

export const isAdminVar = makeVar({
  isAdmin: false,
});

export const userFirstNameVar = makeVar({ userFirstName: '' });
