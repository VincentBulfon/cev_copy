import { isAdminVar } from 'client/reactVars';
import { useIsAuthenticated } from './useIsAuthenticatedHook';

export const useIsAdmin = (): boolean => {
  if (useIsAuthenticated()) {
    if (isAdminVar().isAdmin) {
      return true;
    }
    return false;
  }
  return false;
};
