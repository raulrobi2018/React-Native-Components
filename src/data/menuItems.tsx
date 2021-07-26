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
  {
    name: 'Pull to refresh',
    icon: 'refresh',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section list',
    icon: 'list',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'call-to-action',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'menu-open',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'linear-scale',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'palette',
    component: 'ChangeThemeScreen',
  },
];
