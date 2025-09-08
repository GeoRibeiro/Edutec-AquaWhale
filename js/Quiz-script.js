// Base de perguntas
const quizzes = {
    algas: {
      title: "Algas e Plânctons",
      questions: [
        {
          q: "Sobre as algas, é correto afirmar: I. Todas elas têm capacidade de realizar a fotossíntese; II. Em muitas delas há alternância de gerações, ou seja, em seu ciclo de vida, alternam-se gerações de indivíduos haploides e diploides; III. A maioria delas apresenta o amido como substância de reserva. Dentre as afirmações, relativas às algas, assinale:",
          a: ["se somente I estiver correta.", "se somente II estiver correta.", "se somente I e II estiverem corretas.", "se somente I e III estiverem corretas."],
          correct: 2,
        },
        {
          q: "Observando criteriosamente a característica das algas, podemos englobá-la em qual reino?",
          a: ["Monera.", "Protista.", "Fungi.", "Animalia."],
          correct: 1,
        },
        {
          q: "Responder à questão com base nas afirmações abaixo, sobre as algas verdes do grupo Chlorophyta: I. São organismos autotróficos que possuem clorofila a e b. II. A substância de reserva é o amido. III. A maioria é aquática. IV. Todas são unicelulares. V. As algas marrons e vermelhas não são os seus parentes mais próximos. Estão corretas todas as afirmações, EXCETO a:",
          a: ["I e V.", "II.", "III.", "IV."],
          correct: 3,
        },
        {
          q: "Sabemos que grande parte das algas possui como produto de reserva (carboidrato) o amido, entretanto, algumas possuem outras substâncias. Marque a alternativa que indica um grupo de algas que não possui essa substância de reserva.",
          a: ["Rhodophyta.", "Chlorophyta.", "Euglenophyta.", "Dinophyta."],
          correct: 2,
        },
        {
          q: "As algas são organismos encontrados tanto em água doce como no ambiente marinho e, apesar de terem diversas utilidades para o homem, muitas vezes causam transtornos quando crescem em proporções indesejáveis. Esse processo, muitas vezes acompanhado de grande liberação de toxina, recebe o nome de:",
          a: ["endossimbiose.", "poluição.", "floração.", "calcificação."],
          correct: 2,
        },
      ],
    },
    oceanografia: {
      title: "Oceanografia",
      questions: [
        {
          q: "Nas áreas onde se constituem as dorsais oceânicas, as formas de relevo submarino mais comuns são:",
          a: ["as fossas subductivas", "as plataformas continentais", "as cordilheiras oceânicas", "as ilhas vulcânicas"],
          correct: 2,
        },
        {
          q: "As dorsais oceânicas formam-se pela ação do tectonismo em movimentos do tipo:",
          a: ["convergente", "divergente", "de obducção", "de subducção"],
          correct: 1,
        },
        {
          q: "Do ponto de vista da movimentação litosférica e sua estruturação geológica, as dorsais oceânicas representam:",
          a: ["o encerramento do relevo", "a transformação mineralógica", "a renovação das rochas", "a subducção da superfície"],
          correct: 2,
        },
        {
          q: "O ambiente marinho pode ser classificado com base na profundidade. Podemos chamar de zona litorânea a região:",
          a: ["em que não há luminosidade e organismos fotossintetizante.", "em que a profundidade é maior que 2000 metros.", "entre marés.", "localizada abaixo da zona nerítica."],
          correct: 2,
        },
        {
          q: "De acordo com a classificação do ambiente marinho com relação à profundidade, a região mais profunda, sem luz e com espécies adaptadas à grande pressão é chamada de:",
          a: ["Zona litorânea.", "Zona batial.", "Zona nerítica.", "Zona abissal."],
          correct: 3,
        },
      ],
    },
    bioluminescencia: {
      title: "Bioluminescência",
      questions: [
        {
          q: "A bioluminescência é resultado de uma reação:",
          a: ["Biológica", "Física", "Química", "Mecânica"],
          correct: 0,
        },
        {
          q: "De acordo com a teoria sintética da evolução, a bioluminescência em vaga-lumes pode ser explicada:",
          a: ["pelo estímulo ambiental, que induziu indivíduos adaptados a expressarem mais intensamente esse fenômeno.", "pela seleção natural em populações que viviam em ambientes escuros e emitiam luz através desse fenômeno.", "por mutações e recombinações gênicas em indivíduos que passaram a alterar os alelos responsáveis nesse fenômeno.", "pela seleção natural de indivíduos que expressavam os alelos correspondentes às moléculas envolvidas nesse fenômeno."],
          correct: 3,
        },
        {
          q: "O que gera a bioluminescência?",
          a: ["A luz do sol refletida.", "Um tipo de energia gerada pelo calor.", "A reação química entre a luciferina e o oxigênio, catalisada por uma enzima.", "A eletricidade natural do corpo do animal."],
          correct: 2,
        },
        {
          q: "Como ocorre o fenômeno da bioluminescência?",
          a: ["O animal absorve a luz do ambiente e a armazena.", "A energia luminosa é transformada em energia química.", "A luz é produzida pela queima de compostos orgânicos.", "A oxidação da luciferina, com o auxílio da luciferase, libera energia em forma de luz."],
          correct: 3,
        },
        {
          q: "Por que os animais bioluminescentes brilham?",
          a: ["Para se camuflarem em ambientes escuros.", "Para sinalizarem perigo para outros animais.", "Para encontrar parceiros para reprodução ou atrair presas.", "Para iluminar o caminho em águas profundas."],
          correct: 2,
        },
      ],
    },
    recife: {
      title: "Recife de Corais",
      questions: [
        {
          q: "Os recifes de corais são formados, principalmente, por organismos denominados genericamente de corais. Os corais normalmente estão associados a ____________, que lhe fornecem compostos orgânicos em troca de proteção, uma associação conhecida como _______________. Marque a alternativa que apresenta os termos que completam respectivamente os espaços acima.",
          a: ["plantas e mutualismo facultativo.", "parasitas e simbiose", "algas e simbiose.", "algas e mutualismo facultativo."],
          correct: 2,
        },
        {
          q: "Os corais, apesar do que muitos pensam, são organismos que vivem em colônias e são capazes de produzir um esqueleto constituído de carbonato de cálcio. Esses esqueletos formam os famosos recifes de corais, que se destacam por agrupar uma grande biodiversidade. Os recifes de corais podem ser classificados em três tipos básicos, sendo aqueles formados próximos à costa chamados de:",
          a: ["recifes em franja.", "recifes em bloco.", "recifes em barreira.", "atóis."],
          correct: 0,
        },
        {
          q: "Há 500 milhões de anos, minúsculos animais flutuantes associaram-se a algas microscópicas e fixaram-se às rochas marinhas, formando colônias. A concentração destas colônias dá origem a áreas naturais inigualáveis, pela sua cor, beleza, forma e grande variedade de vida. Esses locais, verdadeiros oásis de vida marinha, são dos mais produtivos ecossistemas do planeta. O texto refere-se a:",
          a: ["poliquetos do Filo Annelida, formadores de colônias de tubos.", "recifes de corais, formados por seres do Filo Cnidaria.", "colônias de organismos do Filo Mollusca.", "zooplâncton, formado, principalmente, por organismos do Filo Arthropoda."],
          correct: 1,
        },
        {
          q: "O “branqueamento dos recifes de coral” tem sido um dos desastres ambientais mais preocupantes. O fenômeno caracteriza-se pela morte de algas microscópicas que vivem, de forma mutualística, na cavidade gastrovascular de cnidários. A respeito desse processo, considere as seguintes afirmativas. I. A destruição de recifes afeta grande parte da teia alimentar marinha, uma vez que eles são importantes locais de abrigo e reprodução de várias espécies marinhas. II. As algas, ao realizarem fotossíntese, fornecem parte da matéria orgânica para o cnidário e este, por sua vez, fornece abrigo e elementos necessários para a fotossíntese. III. Como se trata de uma relação mutualística, os corais não são capazes de sobreviver sem as algas em seu interior. Assinale:",
          a: ["se somente as afirmativas I e II forem corretas.", "se somente as afirmativas II e III forem corretas.", "se todas as afirmativas forem corretas.", "se somente a afirmativa I for correta."],
          correct: 2,
        },
        {
          q: "As algas que fazem associação com os corais são chamadas de:",
          a: ["cnidário.", "porífera", "anelídeos.", "zooxantelas."],
          correct: 3,
        },
      ],
    },
  };
  
  let currentQuiz = null;
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Página inicial
  function startQuiz(topic) {
    localStorage.setItem("quizTopic", topic);
    window.location.href = "Quiz-perguntas.html";
  }
  
  // Página de perguntas
  if (window.location.pathname.includes("Quiz-perguntas.html")) {
    const topic = localStorage.getItem("quizTopic");
    currentQuiz = quizzes[topic];
    showQuestion();
  }
  
  function updateProgress() {
    const total = currentQuiz.questions.length;
    const progress = (currentQuestionIndex / total) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  }
  
  function updateQuestionCount() {
    const total = currentQuiz.questions.length;
    document.getElementById("question-count").innerText = `Pergunta ${currentQuestionIndex + 1}/${total}`;
  }
  
  function showQuestion() {
    const container = document.getElementById("question-container");
    const question = currentQuiz.questions[currentQuestionIndex];
    
    container.innerHTML = `
      <div class="question">${question.q}</div>
      <div class="answers">
        ${question.a.map((answer, i) =>
          `<button onclick="selectAnswer(${i})">${answer}</button>`
        ).join("")}
      </div>
    `;
    
    updateProgress();
    updateQuestionCount();
  }
  
  function selectAnswer(i) {
    const question = currentQuiz.questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answers button");
    
    buttons.forEach((btn, index) => {
      btn.disabled = true;
      if (index === question.correct) {
        btn.classList.add('correct');
      }
      if (index === i && index !== question.correct) {
        btn.classList.add('incorrect');
      }
    });
  
    if (i === question.correct) score++;
    document.getElementById("next-btn").style.display = "flex";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
      document.getElementById("next-btn").style.display = "none";
      showQuestion();
    } else {
      localStorage.setItem("quizScore", score);
      localStorage.setItem("quizTotal", currentQuiz.questions.length);
      window.location.href = "Quiz-result.html";
    }
  }
  
  // Lógica para o botão "Finalizar"
  const finalizarBtn = document.querySelector('.finalizar-btn');
  if (finalizarBtn) {
    finalizarBtn.addEventListener('click', () => {
      localStorage.setItem("quizScore", score);
      localStorage.setItem("quizTotal", currentQuiz.questions.length);
      window.location.href = "Quiz-result.html";
    });
  }
  
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
      nextBtn.addEventListener('click', nextQuestion);
  }
  
  
  // Página de resultado
  if (window.location.pathname.includes("Quiz-result.html")) {
    const score = localStorage.getItem("quizScore");
    const total = localStorage.getItem("quizTotal");
    document.getElementById("result-text").innerText = `${score}/${total}`;
  }