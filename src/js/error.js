const errorElement = document.querySelector(".error");
const errorButton = document.querySelector(".username__button");

errorButton.addEventListener("click", () => {
  errorElement.dataset.state =
    errorElement.dataset.state == "error" ? "" : "error";
});
