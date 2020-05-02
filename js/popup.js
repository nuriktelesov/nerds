    var btn = document.querySelector(".js-write-us");
    var popup = document.querySelector(".popup");
    var wraper = document.querySelector(".popup__wraper");
    var overlay = document.querySelector(".overlay");
    var close = document.querySelector(".popup__close");
    var form = popup.querySelector("form");
    var type = popup.querySelector("[name=name]");
    var mail = popup.querySelector("[name=e-mail]");
    var message = popup.querySelector("[name=message]");
    var storage = localStorage.getItem("type", "mail");

    btn.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("popup--show");
      type.focus();
      if (storage) {
        type.value = storage;
        mail.value = storage;
      }
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("popup--show");
      popup.classList.remove("popup__error");
    });

    overlay.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("popup--show");
      popup.classList.remove("popup__error");
    });

    form.addEventListener("submit", function(evt) {
     if (!type.value || !mail.value || !message.value) {
      evt.preventDefault ();
      popup.classList.add("popup__error");
     } else {
       localStorage.setItem("type", "type.value")
       localStorage.setItem("mail", "mail.value")
     }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27 ){

        if (popup.classList.contains("popup--show")) {
          evt.preventDefault();
          popup.classList.remove("popup--show");
          popup.classList.remove("popup__error");
        }
      }
    });
