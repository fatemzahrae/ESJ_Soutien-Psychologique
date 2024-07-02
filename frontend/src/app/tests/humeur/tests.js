const tests = {
    paix: [
      {
        question: "Je me sens tendu ou énervé.",
        answers: ["Jamais.", "De temps en temps.", "Souvent.", "La plupart du temps."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "J'ai une sensation de peur comme si quelque chose d'horrible allait m'arriver.",
        answers: ["Pas du tout.", "Un peu mais cela ne m'inquiète pas.", "Oui, mais ce n'est pas trop grave.", "Oui, c'est tout à fait le cas."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "Je me fais du souci.",
        answers: ["Très occasionnellement.", "Occasionnellement.", "Assez souvent.", "Très souvent."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "Je peux rester tranquillement assis à ne rien faire et me sentir décontracté.",
        answers: ["Oui, quoi qu'il arrive.", "Oui, en général.", "Rarement.", "Jamais."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "J'éprouve des sensations de peur et j'ai l'estomac noué.",
        answers: ["Jamais.", "Parfois.", "Assez souvent.", "Très souvent."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "J'ai la bougeotte et n'arrive pas à tenir en place.",
        answers: ["Pas du tout.", "Pas tellement.", "Un peu.", "Oui, c'est tout à fait le cas."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "J'éprouve des sensations soudaines de panique.",
        answers: ["Jamais.", "Pas très souvent.", "Assez souvent.", "Vraiment très souvent."],
        scores: [0, 1, 2, 3]
      }
    ],
    humeur: [
      {
        question: "Je prends plaisir aux mêmes choses qu'autrefois.",
        answers: ["Oui, tout autant.", "Pas autant.", "Un peu seulement.", "Presque plus."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "Je ris facilement et vois le bon côté des choses.",
        answers: ["Autant que par le passé.", "Plus autant qu'avant.", "Vraiment moins qu'avant.", "Plus du tout."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "Je suis de bonne humeur.",
        answers: ["La plupart du temps.", "Assez souvent.", "Rarement.", "Jamais."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "J'ai l'impression de fonctionner au ralenti.",
        answers: ["J'y prête autant d'attention que par le passé.", "Il se peut que je n'y fasse plus autant attention.", "Je n'y accorde pas autant d'attention que je devrais.", "Plus du tout."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "Je me m'intéresse plus à mon apparence.",
        answers: ["Jamais.", "Parfois.", "Très souvent.", "Presque toujours."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "Je me réjouis d'avance à l'idée de faire certaines choses.",
        answers: ["Autant qu'avant.", "Un peu moins qu'avant.", "Bien moins qu'avant.", "Presque jamais."],
        scores: [0, 1, 2, 3]
      },
      {
        question: "Je peux prendre plaisir à un bon livre ou à une bonne émission radio ou télévision.",
        answers: ["Souvent.", "Parfois.", "Rarement.", "Très rarement."],
        scores: [0, 1, 2, 3]
      }
    ]
  };
  
  export default tests;
  