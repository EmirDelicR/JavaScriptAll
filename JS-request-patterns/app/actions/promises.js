(function() {
  const buttonP = document.querySelector(".btn-promises");
  const divP = document.querySelector(".promises");

  const setTextP = text => {
    divP.textContent = text;
  };

  const checkAuthP = () => {
    return new Promise((resolve, reject) => {
      setTextP("Loading...");
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  const fetchUserP = () => {
    return new Promise((resolve, reject) => {
      setTextP("Checking...");
      setTimeout(() => {
        resolve({ name: "Some user" });
      }, 2000);
    });
  };

  buttonP.addEventListener("click", () => {
    checkAuthP()
      .then(isAuth => {
        if (isAuth) {
          return fetchUserP();
        }
      })
      .then(user => {
        setTextP(user.name);
      });
  });
})();
