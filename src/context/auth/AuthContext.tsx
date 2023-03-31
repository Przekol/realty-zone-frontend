import { UserSerializerResponse } from '@backendTypes';
import React, { createContext, Dispatch, useReducer } from 'react';

type User = UserSerializerResponse;

export interface AuthState {
  user: User | null;
  isLoading: boolean;
}

export type AuthActions =
  | { type: 'RESET_USER' }
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_LOADING' };

export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, isLoading: true };
    }
    case 'CLEAR_LOADING': {
      return { ...state, isLoading: false };
    }
    case 'SET_USER': {
      return { ...state, user: action.payload };
    }
    case 'RESET_USER': {
      return { ...state, user: null };
    }
    default:
      return state;
  }
};

const initialState = {
  user: null,
  isLoading: false,
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state: { ...state }, dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { state: authState, dispatch } = React.useContext(AuthContext);
  if (authState === null) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return { state: authState, dispatch };
};
