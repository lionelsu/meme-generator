const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

function createText() {
  memeText.textContent = inputText.value;
}
inputText.addEventListener('input', createText);

function loadImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
imageInsert.addEventListener('change', loadImage);
