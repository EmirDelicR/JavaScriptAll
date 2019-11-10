require("babel-polyfill");
const initDomAsync = () => {
  const buttonA = document.querySelector(".btn-asc");
  console.log(buttonA);
  const divA = document.querySelector(".asc");

  const setTextA = text => {
    divA.textContent = text;
  };

  const checkAuthA = () => {
    return new Promise((resolve, reject) => {
      setTextA("Checking Auth...");
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  const fetchUserA = () => {
    return new Promise((resolve, reject) => {
      setTextA("Fetching User...");
      setTimeout(() => {
        resolve({ name: "Some User" });
      }, 2000);
    });
  };

  buttonA.addEventListener("click", async () => {
    const isAuth = await checkAuthA();
    let user = null;
    if (isAuth) {
      user = await fetchUserA();
    }
    setTextA(user.name);
  });
};

const domReady = callBack => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callBack);
  }
  if (document.readyState === "interactive") {
    callBack();
  }
};

domReady(initDomAsync);
