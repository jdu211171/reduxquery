import React, {PropsWithChildren, useCallback, useContext} from 'react';
import {useMutation} from '@tanstack/react-query';
import {useStorageState} from '../storage/sessionStorage';
import {AuthContextType} from '../types/user-data-type.ts';
import {AuthContext} from './session-context.tsx';
import {signIn} from '../requests/authorizationQuery.ts';

export function useSessionProvider(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSessionProvider must be used within a SessionProvider');
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
