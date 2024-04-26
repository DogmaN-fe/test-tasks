const selectedImage = document.querySelector("#selectedImage");
const cancelButton = document.querySelector("#cancelButton");
const imageInput = document.querySelector("#imageInput");
const reset = document.querySelector("#reset");
const form = document.querySelector(".darkness");
const buttonOpenForm = document.querySelector(".main__button");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      selectedImage.style.setProperty(
        "background-image",
        `url(${e.target.result})`
      );
    };
    reader.readAsDataURL(file);
  }
});

cancelButton.addEventListener("click", (event) => {
  event.stopPropagation();

  selectedImage.style.setProperty(
    "background-image",
    "url(src/images/74f68b861331c84638bda7f9f9b5a0d4.png)"
  );
  imageInput.value = null;
});

reset.addEventListener("click", () => {
  form.classList.add("hidden");
});

buttonOpenForm.addEventListener("click", () => {
  form.classList.remove("hidden");
});
