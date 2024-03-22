import React from 'react';
import {AuthContextType} from '../types/user-data-type.ts';
export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined,
);
