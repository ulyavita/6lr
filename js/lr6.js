const question = document.getElementById("question");
const imageElement = document.getElementById("image");
const optionButtonsElement = document.getElementById("options-buttons");

// Функция , показывающая текст
function showQuestion(textNodeIndex) {
  
  // Поиск нужного варианта по его id
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  
  // Замена текста и изображения на странице
  question.innerText = textNode.text;
  imageElement.src = textNode.src;
  
  // Удаление кнопок
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  
  // Перебор количества и текстового содержания для кнопок
  textNode.options.forEach((option) => {
    if (showOption(option)) {
	  // Создание новой кнопки
      const button = document.createElement("button");
	  button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

// Показ кнопки
function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}


// Выбор варианта с помощью кнопки
function selectOption(option) {
  const nextTextNodeId = option.nextText;
  showQuestion(nextTextNodeId);
}

// Константа, которая содержит в себе массив, в котором лежат текст, изображение и варианты ответа
const textNodes = [
  {
    id: 1, 									
    text: `Готов доверить свою жизнь 20гранному кубику? Тогда вперед в мир приключений. Пусть удача всегда будет с вами...`,
	src: 'днд/начало.jpeg',
    options: [
      {
        text: `Присоединиться к пати`,
        nextText: 2,
      },
    ],
  },
  {
    id: 2, 									
    text: `По классике вы начинаете в таверне. Что вы хотите сделать?`,
	src: 'днд/таверна.jpg',
    options: [
      {
        text: `Выйти из таверны`,
        nextText: 3,
      },
      {
        text: `Бард начинает клянчить выпивку`,
        nextText: 4,
      },
	  {
        text: `Поговорить со странным типом в капюшоне в углу`,
        nextText: 5,
      },
    ],
  },
   {
    id: 3, 									
    text: `На улице сумерки. Вы видите:`,
	src: 'днд/сумерки.jpeg',
    options: [
      {
        text: `За вами следом вышел странный тип в капюшоне. Вы решаете спросить, что ему от вас нужно`,
        nextText: 5,
      },
      {
        text: `Бабушка идет к вам и просит о помощи`,
        nextText: 6,
      },
	  {
        text: `Вы решаете вернуться в таверну`,
        nextText: 7,
      },
    ],
  },
  {
    id: 5, 									
    text: `Вы ввязались в приключение и вашу пати съел дракон, ооо нееет`,
	src: 'днд/Съел дракон.jpg',
    options: [
      {
        text: `Начать заново`,
        nextText: 1,
      },
    ],
  },
  {
    id: 6, 									
    text: `Бабушка просит найти ее кота. Помочь?`,
	src: 'днд/бабушка.jpg',
    options: [
      {
        text: `Помогаем`,
        nextText: 8,
      },
      {
        text: `К черту бабку с ее котами`,
        nextText: 9,
      },
    ],
  },
  {
    id: 7, 									
    text: `Трактирщик все еще вас не забыл, лучше выйти обратно`,
	src: 'днд/трактирщик.jpg',
    options: [
      {
        text: `Выйти`,
        nextText: 3,
      },

    ],
  },
  {
    id: 4, 									
    text: `Держателю таверны это не понравилось и всю вашу компанию выкинули за порог`,
	src: 'днд/трактирщик.jpg',
    options: [
	  {
        text: `Оглядеться`,
        nextText: 3,
      },
    ],
  },
  {
    id: 8, 									
    text: `Внучок бабушки оказался не последней шишкой в этом городе. Вас одарили золотом до конца жизни, можно больше не работать. Поздравляем, вы выиграли!`,
	src: 'днд/золото.jpg',
    options: [
	  {
        text: `Пройти еще раз`,
        nextText: 1,
      },
    ],
  },
  {
    id: 9, 									
    text: `Внучок бабушки оказался не последней шишкой в этом городе. Вас убили за отказ. В ночи, пока все спали.`,
	src: 'днд/смэрт.jpg',
    options: [
      {
        text: `Попробовать заново`,
        nextText: 1,
      },
    ],
  },
];

showQuestion(1);
