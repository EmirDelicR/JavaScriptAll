(function() {
  const buttonH = document.querySelector(".btn-err");
  const divH = document.querySelector(".err");

  const handleError = fn => (...params) =>
    fn(...params).catch(err => {
      console.error(`Opss! `, err);
    });
  /*
    const handleError= (fn) => {
        return (...params) => {
            return fn(...params).catch(() => {
                console.error(`Opss!`, err);
            });
        }
    };
    */

  const setTextH = text => {
    divH.textContent = text;
  };

  const checkAuthH = () => {
    return new Promise((resolve, reject) => {
      setTextH("Checking Auth...");
      setTimeout(() => {
        /** Set this to false to invoke error */

        resolve(true);
      }, 2000);
    });
  };

  const fetchUserH = () => {
    return new Promise((resolve, reject) => {
      setTextH("Fetching User...");
      setTimeout(() => {
        resolve({ name: "Some User" });
      }, 2000);
    });
  };

  const test = async () => {
    const isAuth = await checkAuthH();
    let user = null;
    if (isAuth) {
      user = await fetchUserH();
    }
    setTextH(user.name);
  };

  const doWithErrorCheck = handleError(test);

  buttonH.addEventListener("click", doWithErrorCheck);
})();
