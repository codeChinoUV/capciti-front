
/**
 * Actions for the reducer
 */
export type AuthAction =
  | { type: 'signing', payload: { user: string, token: string } }
  | { type: 'sign-out' }

/**
 * Interface for the state of the reducer
 */
export interface AuthReducerStateI {
  /**
   * Indicate if the user is logged in
   */
  loggedIn: boolean;
  /**
   * The user logged in
   */
  user: string | null;
  /**
   * The token of the user
   */
  token: string | null;
}

/**
 * Initial state for the reducer
 */
const initialState: AuthReducerStateI = {
  loggedIn: false,
  user: null,
  token: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthReducerStateI => {
  switch(action.type) {
    case 'signing':
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token,
        user: action.payload.user
      }
    case 'sign-out':
      return {...initialState};
    default:
      return {...state};
  }
}