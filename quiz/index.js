const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questoes-quiz")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".respostas-quiz")
const $answers = document.querySelectorAll(".resposta")


let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)


function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML =
    `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Reiniciar
    </button>
  `
}


const questions = [
  {
    question: "Qual é o termo independente em uma função afim representada por f(x) = 3x + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "2", correct: true },
      { text: "5", correct: false },
      { text: "-2", correct: false }
    ]
  }, 
  {
    question: "Se você tem uma função afim f(x) = -2x + 5, qual é o valor de f(4)?",
    answers: [
      { text: "-3", correct: true },
      { text: "3", correct: false },
      { text: "2", correct: false },
      { text: "-2", correct: false }
    ]
  }, 
  {
    question: "Resolva a equação quadrática 2x² - 5x + 3 = 0 usando a fórmula de Bhaskara.",
    answers: [
      { text: "x = 2 e x = 1/2", correct: false },
      { text: "x = 3 e x = -1/2", correct: false },
      { text: "x = 1 e x = 3/2", correct: true },
      { text: "x = 1 e x = -3/2", correct: false }
    ]
  }, 
  {
    question: "Encontre as raízes da equação x² + 6x + 9 = 0 usando a fórmula de Bhaskara.",
    answers: [
      { text: "x = -3", correct: true },
      { text: "x = 3", correct: false },
      { text: "x = 0", correct: false },
      { text: "x = -6", correct: false }
    ]
  }, 
  {
    question: "Em um triângulo retângulo, se um cateto mede 3 unidades e o outro cateto mede 4 unidades, qual é o comprimento da hipotenusa?",
    answers: [
      { text: "5 unidades", correct: true },
      { text: "6 unidades", correct: false },
      { text: "7 unidades", correct: false },
      { text: "8 unidades", correct: false }
    ]
  }, 
  {
    question: "Se a hipotenusa de um triângulo retângulo mede 10 cm e um dos catetos mede 6 cm, qual é o comprimento do outro cateto?",
    answers: [
      { text: "6 cm", correct: false },
      { text: "8 cm", correct: true },
      { text: "7 cm", correct: false },
      { text: "9 cm", correct: false }
    ]
  }, 
  {
    question: "Se você tem uma camiseta que custa $20 e está com desconto de 25%, qual é o preço com desconto?",
    answers: [
      { text: "$5", correct: false },
      { text: "$10", correct: false },
      { text: "$15", correct: true },
      { text: "$18", correct: false }
    ]
  }, 
  {
    question: "Se você ganhou um aumento de salário de 10%, e seu salário anterior era de $2.000 por mês, qual será o novo salário?",
    answers: [
      { text: "$2,100", correct: false },
      { text: "$2,200", correct: true },
      { text: "$2,1000", correct: false },
      { text: "$2,020", correct: false }
    ]
  }, 
  {
    question: "Calcule 2 elevado à quarta potência.",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "16", correct: true },
      { text: "32", correct: false }
    ]
  }, 
  {
    question: "Qual é o valor de 5 elevado à segunda potência?",
    answers: [
      { text: "10", correct: false },
      { text: "15", correct: false },
      { text: "20", correct: false },
      { text: "25", correct: true }
    ]
  }, 
  {
    question: "Dada a função quadrática f(x) = x² - 4x + 3, encontre as coordenadas do vértice.",
    answers: [
      { text: "(1, 2)", correct: false },
      { text: "(2, -1)", correct: true },
      { text: "(-1, 3)", correct: false },
      { text: "(3, -2)", correct: false }
    ]
  },  
  {
    question: "Encontre dois números cuja soma seja 10 e o produto seja 24.",
    answers: [
      { text: "4 e 6", correct: true },
      { text: "2 e 8", correct: false },
      { text: "5 e 5", correct: false },
      { text: "3 e 7", correct: false }
    ]
  }, 
  {
    question: "Se a soma de dois números é 15 e o produto é 56, quais são esses números?",
    answers: [
      { text: "7 e 8", correct: true },
      { text: "6 e 9", correct: false },
      { text: "5 e 10", correct: false },
      { text: "4 e 11", correct: false }
    ]
  }
]

var botaoEsconderMenu = document.getElementById('comecarquiz');

var barraMenu = document.querySelector('.dp-menu');

botaoEsconderMenu.addEventListener('click', function() {
  if (barraMenu.style.display !== 'none') {
    barraMenu.style.display = 'none';
  }
});

var botaoEsconderImagem = document.getElementById('comecarquiz');

var imagem = document.querySelector('.img-quiz');

botaoEsconderImagem.addEventListener('click', function() {
  if (imagem.style.display !== 'none') {
    imagem.style.display = 'none';
  }
});

var botaoEsconderP = document.getElementById('comecarquiz');

var paragrafo = document.querySelector('.paragrafo');

botaoEsconderP .addEventListener('click', function() {
  if (paragrafo.style.display !== 'none') {
    paragrafo.style.display = 'none';
  }
});
