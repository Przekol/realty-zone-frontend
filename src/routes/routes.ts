const BASE_URLS = {
  auth: '/auth',
  authSuccessful: '/auth/successful',
  myAccount: '/my-account',
  myAccountSuccessful: '/my-account/successful',
};

const successfulAuth = {
  base: BASE_URLS.authSuccessful,
  signUp: `${BASE_URLS.authSuccessful}/sign-up`,
  activation: `${BASE_URLS.authSuccessful}/activation`,
};

const auth = {
  base: BASE_URLS.auth,
  signIn: `${BASE_URLS.auth}/sign-in`,
  signUp: `${BASE_URLS.auth}/sign-up`,
  logout: `${BASE_URLS.auth}/logout`,
  forgetPassword: `${BASE_URLS.auth}/forget-password`,
  activateAccount: `${BASE_URLS.auth}/activate-account`,
  successful: successfulAuth,
};

const myAccountSuccessful = {
  base: BASE_URLS.myAccountSuccessful,
  addOffer: `${BASE_URLS.myAccountSuccessful}/add-offer`,
};
const myAccountWarning = {
  base: `${BASE_URLS.myAccount}/warning`,
  addOffer: `${BASE_URLS.myAccount}/warning/add-offer`,
};
const myAccount = {
  base: BASE_URLS.myAccount,
  addOffer: `${BASE_URLS.myAccount}/add-offer`,
  myOffers: `${BASE_URLS.myAccount}/my-offer`,
  settings: `${BASE_URLS.myAccount}/settings`,
  successful: myAccountSuccessful,
  warning: myAccountWarning,
  deleteOffer: `${BASE_URLS.myAccount}/delete-offer/:offerNumber`,
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
  offerDetails: '/offers/:offerNumber/:offerSlug?',
  myAccount,
  blog: '/blog',
  about: '/about',
  socialMedia,
};
