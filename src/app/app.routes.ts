
import { Routes } from '@angular/router';

import { Home } from './home/home';

import { Login } from './login/login';

import { Register } from './register/register';

import { Dashboard } from './dashboard/dashboard';

import { Orders } from './orders/orders';

import { Tracking } from './tracking/tracking';

import { CreateOrder } from './create-order/create-order';

import { Payment } from './payment/payment';

import { Profile } from './profile/profile';

import { Reports } from './reports/reports';

import { DeliveryAgent } from './delivery-agent/delivery-agent';

import { Support } from './support/support';



export const routes: Routes = [

  { path: '', component: Home },

  { path: 'login', component: Login },

  { path: 'register', component: Register },

  { path: 'dashboard', component: Dashboard },

  { path: 'orders', component: Orders },

  { path: 'tracking', component: Tracking },

  { path: 'create-order', component: CreateOrder },

  { path: 'payment', component: Payment },

  { path: 'profile', component: Profile },

  { path: 'reports', component: Reports },

  { path: 'delivery-agent', component: DeliveryAgent },

  { path: 'support', component: Support }
  

];