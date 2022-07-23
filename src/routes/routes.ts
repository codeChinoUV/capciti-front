/**
 * General routes
 */

import { LazyExoticComponent } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Roles } from '../models/Roles';
import {RegisterScreen} from "../components/register/RegisterScreen";

type JSXElement = () => JSX.Element;

export interface RouteI {
  /**
   * Route's name
   */
  name: string;
  /**
   * Route's path
   */
  path: string;
  /**
   * Component to show in the route
   */
  Component: LazyExoticComponent<JSXElement> | JSXElement;
  /**
   * link to go of the route
   */
  to: string;
  /**
   * Indicate if the route required a logged-in user
   */
  loginRequired: boolean;
  /**
   * The allowed roles for the route
   */
  allowedRoles?: Roles[];
  showInNavbar: boolean;
}

export const routes: RouteI[] = [
  {
    to: '/',
    path: '',
    name: 'Login',
    loginRequired: false,
    Component: LoginScreen,
    showInNavbar: false,
  },
  {
    to: '/register',
    path: 'register',
    name: 'Register',
    loginRequired: false,
    Component: RegisterScreen,
    showInNavbar: false,
  },

  {
    to: '/home',
    path: 'home/*',
    name: 'Home',
    loginRequired: true,
    Component: HomeScreen,
    allowedRoles: [ Roles.ALL ],
    showInNavbar: true
  },
]