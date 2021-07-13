import {MenuItem} from '../interfaces/interfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'widgets',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'collections',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-on',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'notifications',
    component: 'AlertScreen',
  },
  {
    name: 'Text inputs',
    icon: 'edit',
    component: 'TextInputScreen',
  },
];
