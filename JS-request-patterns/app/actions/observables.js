// Fix for server
import { fromEvent, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

(function() {
  const buttonO = document.querySelector(".btn-obs");
  const divO = document.querySelector(".obs");

  const setTextO = text => {
    divO.textContent = text;
  };

  const checkAuthO = () => {
    return Observable.create(observer => {
      setTextO("Checking Auth...");
      setTimeout(() => {
        observer.next(true);
      }, 2000);
    });
  };

  const fetchUserO = () => {
    return Observable.create(observer => {
      setTextO("Fetching User...");
      setTimeout(() => {
        observer.next({ name: "Some user" });
      }, 2000);
    });
  };

  fromEvent(buttonO, "click")
    .pipe(switchMap(event => checkAuthO()))
    .pipe(
      switchMap(isAuth => {
        if (isAuth) {
          return fetchUserO();
        }
      })
    )
    .subscribe(user => {
      setTextO(user.name);
    });
})();
