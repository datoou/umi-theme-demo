import { proxy } from '@umijs/max';

export const globalState = proxy({
  currentTheme: 'light',
});
