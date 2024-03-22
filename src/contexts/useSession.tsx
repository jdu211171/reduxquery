import React, {PropsWithChildren, useCallback, useContext} from 'react';
import {useMutation} from '@tanstack/react-query';
import {useStorageState} from '../storage/sessionStorage';
import {AuthContextType} from '../types/user-data-type.ts';
import {signIn} from '../utils/authorizationQuery.ts';

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useSession(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}

export function SessionProvider({children}: PropsWithChildren) {
  const [[loading, session], setSession] = useStorageState('session');
  const mutation = useMutation({mutationFn: signIn, onSuccess: setSession});
  const signOut = useCallback(() => {
    setSession(null);
  }, [setSession]);

  const value = {
    signIn: mutation.mutate,
    signOut,
    session,
    isLoading: loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
