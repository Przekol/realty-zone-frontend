export const LoggedLoader = async () => {
  const isLogged = JSON.parse(localStorage.getItem('isLogged') || 'false');
  return { isLogged };
};
