import {
  ActionReducerMap,
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-types';
import { routerReducer } from '@ngrx/router-store';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface AppState {
  user: User
}
export interface RouterState {
}

export const initialAuthState: AppState = {
  user: undefined
};
export const reducers: ActionReducerMap<RouterState> = {
  router: routerReducer
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    }
  })
);

export const metaReducers: MetaReducer<RouterState> [] = !environment.production ? []: [];