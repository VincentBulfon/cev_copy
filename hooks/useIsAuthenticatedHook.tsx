import { isLoggedVar } from 'client/reactVars';
import { useRouter } from 'next/dist/client/router';

export const useIsAuthenticated = (): boolean => {
  if (!isLoggedVar().isLogged) {
    useRouter().push('/connect');
    return false;
  }
  return true;
};
