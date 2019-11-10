(function() {
  const button = document.querySelector(".btn-call");
  const div = document.querySelector(".call");

  const setText = text => {
    div.textContent = text;
  };

  const checkAuth = cb => {
    setText("Loading...");
    setTimeout(() => {
      cb(true);
    }, 2000);
  };

  const fetchUser = cb => {
    setText("Fetching...");
    setTimeout(() => {
      cb({ name: "Some user" });
    }, 2000);
  };

  button.addEventListener("click", () => {
    checkAuth(auth => {
      if (auth) {
        fetchUser(user => {
          setText(user.name);
        });
      }
    });
  });
})();
