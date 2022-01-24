import { useRouter } from 'next/dist/client/router';
import { useIsAdmin } from './useIsAdminHook';
import { useIsAuthenticated } from './useIsAuthenticatedHook';

export const useIsAuthenticatedNotAdmin = () => {
  if (useIsAuthenticated()) {
    if (useIsAdmin()) {
      useRouter().push('/me');
      return false;
    }
    return true;
  }
  return false;
};
