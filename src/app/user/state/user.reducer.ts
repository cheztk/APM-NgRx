import { createAction , createReducer, on } from '@ngrx/store';
import { User } from '../user';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}


export const userReduser = createReducer(
  { maskUserName: false },
  on(createAction('[User] Mask User Name'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    }
  })
);
