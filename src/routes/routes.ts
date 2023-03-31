const BASE_URLS = {
  auth: '/auth',
  authSuccessful: '/auth/successful',
  myAccount: '/my-account',
};

const successful = {
  base: BASE_URLS.authSuccessful,
  signUp: `${BASE_URLS.authSuccessful}/sign-up`,
  activation: `${BASE_URLS.authSuccessful}/activation`,
};

const auth = {
  base: BASE_URLS.auth,
  signIn: `${BASE_URLS.auth}/sign-in`,
  signUp: `${BASE_URLS.auth}/sign-up`,
  forgetPassword: `${BASE_URLS.auth}/forget-password`,
  activateAccount: `${BASE_URLS.auth}/activate-account`,
  successful,
};

const myAccount = {
  base: BASE_URLS.myAccount,
  addOffer: `${BASE_URLS.myAccount}/add-offer`,
};

const socialMedia = {
  Twitter: '/#',
  YouTube: '/#',
  Instagram: '/#',
};

export const ROUTES = {
  home: '/',
  auth,
  contact: '/contact',
  offers: '/offers',
  myAccount,
  blog: '/blog',
  about: '/about',
  socialMedia,
};
