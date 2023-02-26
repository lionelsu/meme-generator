// Constantes de seletores de elementos
const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');

// Seletores para transformar em array com o MAP
const btnContainer = document.querySelector('#border-button-container');
const preselectedImgContainer = document.querySelector('#pre-meme-image');

// Função para criar textos. A ordem vai seguir com o escutador em baixo.
function createText() {
  memeText.textContent = inputText.value;
}
inputText.addEventListener('input', createText);

// Função para adicionar uma imagem no contexto de criação de memes, esta imagem vem do PC do cliente.
function loadImage(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
imageInsert.addEventListener('change', loadImage);

// Função auxiliar para pegar o valor dos estilos computados via CSS
function getStyle(id, value) {
  const elementId = document.querySelector(id);
  const computedStyle = window.getComputedStyle(elementId);
  const style = computedStyle.getPropertyValue(value);

  return style;
}

// Função para adicionar o estilo de borda no painel dos memes.
function changeStyle(id, value) {
  const styleValue = getStyle(id, value);
  memeContainer.style[value] = styleValue;
}

// Função auxiliar para utilizar no lugar dos escutadores e impedir repetição de código.
// Event é para especificar se será usado um evento do tipo 'click'
// selectorList refere-se a lista de seletores
// callback refere-se a chamada da função que vai chamar o evento especifico para o seletor específico
function auxListener(event, selectorList, callback) {
  const targetId = event.target.id;
  if (selectorList.includes(targetId)) {
    callback(event);
  }
}

// Função auxiliar para pegar os id dos elementos dentro dos pais
// container é a variável a qual o elemento pai está armazenado
// selector é o seletor que vamos buscar, no caso do nosso uso seria o img e o button
// usando o spread e o map, criamos um array de elementos com os ids de cada elemento e retornamos o array id.
function getElementIds(container, selector) {
  const ids = [...container.querySelectorAll(selector)].map(
    (element) => element.id,
  );

  return ids;
}

// E por fim, a chamada com a construção de cada escutador, para os botões
btnContainer.addEventListener('click', (event) => {
  const borderBtnId = getElementIds(btnContainer, 'button');
  auxListener(event, borderBtnId, () => {
    changeStyle(`#${event.target.id}`, 'border');
  });
});

// E para as imagens pré selecionadas
preselectedImgContainer.addEventListener('click', (event) => {
  const placehlrImgIds = getElementIds(preselectedImgContainer, 'img');
  auxListener(event, placehlrImgIds, () => {
    memeImage.src = event.target.src;
  });
});
