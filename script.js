const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

const btnContainer = document.querySelector('#border-button-container');

function createText() {
  memeText.textContent = inputText.value;
}
inputText.addEventListener('input', createText);

function loadImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
imageInsert.addEventListener('change', loadImage);

function getStyle(id, value) {
  const elementId = document.querySelector(id);
  const computedStyle = window.getComputedStyle(elementId);
  const style = computedStyle.getPropertyValue(value);

  return style;
}

function changeStyle(id, value) {
  const memeContainer = document.querySelector('#meme-image-container');
  const styleValue = getStyle(id, value);
  memeContainer.style[value] = styleValue;
}

btnContainer.addEventListener('click', (event) => {
  const btnId = event.target.id;
  if (btnId === 'fire' || btnId === 'water' || btnId === 'earth') {
    changeStyle(`#${btnId}`, 'border');
  }
});
