export default () => {
  const isAuth = ref(false);

  const currentUser = ref<string>();

  const usernameCookie = useCookie("username");
  const passwordCookie = useCookie("password");

  const users = useCookie<{ username: string; password: string }[]>("users", {
    default: () => [],
  });

  const login = (username: string, password: string, redirect: boolean = true) => {
    const user = users.value.find(
      (user) => user.username == username && user.password == password
    );

    if (user) {
      isAuth.value = true;
      usernameCookie.value = username;
      passwordCookie.value = password;

      currentUser.value = user.username;

      if (redirect) {
          navigateTo("/");
      }
      return true;
    }

    alert("Invalid username or password");
  };

  const register = (username: string, password: string) => {
    users.value.push({ username, password });

    navigateTo("/login");
  };

  const logout = () => {
    isAuth.value = false;

    usernameCookie.value = "";
    passwordCookie.value = "";

    navigateTo("/login");
  };

  const checkAuth = () => {
    if (usernameCookie.value && passwordCookie.value) {
      login(usernameCookie.value, passwordCookie.value, false);
    }
  }

  return {
    isAuth,
    login,
    register,
    logout,
    checkAuth
  };
}
