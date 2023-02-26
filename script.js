const inputText = document.querySelector('#text-input');
function selectorFactory() {
  const memeText = document.querySelector('#meme-text');
  return {
    memeText,
  };
}

function createText() {
  const { memeText } = selectorFactory();
  memeText.textContent = inputText.value;
}
inputText.addEventListener('input', createText);
