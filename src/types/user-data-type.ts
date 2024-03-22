import {UseMutateFunction} from '@tanstack/react-query';

export interface SessionType {
  id: number;
  username: string;
  token: string;
}

export interface AuthContextType {
  signIn: UseMutateFunction<SessionType, Error, void, unknown>;
  signOut: () => void;
  session: SessionType | null;
  isLoading: boolean;
}
