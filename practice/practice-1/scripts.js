const selectedImage = document.querySelector("#selectedImage");
const cancelButton = document.querySelector("#cancelButton");
const imageInput = document.querySelector("#imageInput");
const reset = document.querySelector("#reset");
const form = document.querySelector(".darkness");
const buttonOpenForm = document.querySelector(".main__button");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  console.log(file);
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      selectedImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

cancelButton.addEventListener("click", (event) => {
  event.stopPropagation();
  selectedImage.src = "";
  imageInput.value = null;
});

reset.addEventListener("click", () => {
  form.classList.add("hidden");
});

buttonOpenForm.addEventListener("click", () => {
  form.classList.remove("hidden");
});
