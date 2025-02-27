import type { StrapiApp } from '@strapi/strapi/admin';
import AuthLogo from "./extensions/logo.svg";
import MenuLogo from "./extensions/logo.svg";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
    locales: [
      'zh-Hans',
      'zh',
    ],
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Mooc',
        'Auth.form.welcome.subtitle': 'Log in to your Mooc account',
      },
      zh: {
        'Auth.form.welcome.title': '欢迎来到Mooc',
        'Auth.form.welcome.subtitle': '登录您的Mooc账户',
      },
      'zh-Hans': {
        'Auth.form.welcome.title': '欢迎来到Mooc',
        'Auth.form.welcome.subtitle': '登录您的Mooc账户',
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
