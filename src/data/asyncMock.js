const questions = [
    {
        id: 1,
        title: '¿Cuál es un color primario?',
        options: [
            { id: 1, answerText: 'Rojo', correct: true },
            { id: 2, answerText: 'Verde', correct: false },
            { id: 3, answerText: 'Naranja', correct: false },
        ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 2,
        title: '¿Cuáles de los siguientes seres vivos pertenecen al reino animal?',
        options: [
            { id: 1, answerText: 'Perro', correct: true },
            { id: 2, answerText: 'Gato', correct: true },
            { id: 3, answerText: 'Tulipán', correct: false },
            { id: 4, answerText: 'Ameba', correct: false },
            { id: 5, answerText: 'Portobello', correct: false },
            { id: 6, answerText: 'Araña del rincón', correct: true },
        ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 3,
        title: '¿Cuáles son capitales de provincias argentinas?',
        options: [
            { id: 1, answerText: 'Buenos Aires', correct: false },
            { id: 2, answerText: 'Córdoba', correct: true },
            { id: 3, answerText: 'La Plata', correct: true },
            { id: 4, answerText: 'Rosario', correct: false },
            { id: 5, answerText: 'Santa Fe', correct: true },
            { id: 6, answerText: 'Tucumán', correct: true },
            { id: 7, answerText: 'Entre Ríos', correct: false },
        ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 4,
        title: '¿Qué es el cooperativismo?',
        options: [
            { id: 1, answerText: 'La solidaridad para hacer', correct: true },
            { id: 2, answerText: 'La realización práctica de la idea de trabajar juntos para un mismo fin', correct: true },
            { id: 3, answerText: 'El esfuerzo de una persona para alcanzar un objetivo', correct: false },
            { id: 4, answerText: 'El conjunto de empresas cooperativas', correct: false },
        ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 5,
        title: '¿Cuáles son las banderas del cooperativismo?',
        options: [
            { id: 1, answerText: '../assets/Bandera-del-Cooperativismo.png', correct: true },
            { id: 2, answerText: '../assets/ACI-BANDERA.png', correct: true },
            { id: 3, answerText: '../assets/NUEVA-BANDERA.png', correct: true },
    ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 6,
        title: '¿Está bien tirar el aceite de cocina por el desagüe?',
        options: [
            { id: 1, answerText: 'Sí, siempre que no esté quemado', correct: false },
            { id: 2, answerText: 'No, nunca se debe tirar por el desagüe', correct: true },
            { id: 3, answerText: 'Sí, pero desde la cocina y no desde el baño o el lavadero', correct: false },
        ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 7,
        title: 'Si estoy afuera y tengo un pañuelo descartable o un envoltorio de caramelo, ¿qué debo hacer?',
        options: [
            { id: 1, answerText: 'Lo tiro detrás de un arbusto o en un terreno baldío', correct: false },
            { id: 2, answerText: 'Lo tiro en un volquete o un cesto de basura de un vecino', correct: false },
            { id: 3, answerText: 'Lo guardo y luego lo tiro en casa', correct: true },
            { id: 4, answerText: 'Lo tiro en el suelo', correct: false },
            { id: 5, answerText: 'Lo tiro en un cesto público', correct: true },
        ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 8,
        title: '¿Cómo se desechan las pilas?',
        options: [
            { id: 1, answerText: 'En residuos no reciclables', correct: false },
            { id: 2, answerText: 'En residuos reciclables', correct: false },
            { id: 3, answerText: 'Se llevan a un centro de tratamiento especial', correct: true },
            { id: 4, answerText: 'Envueltas en bolsas en residuos no reciclables', correct: false },
        ],
        pointsPerCorrectAnswer: 1,
    },
    {
        id: 9,
        title: '¿Qué comprende un residuo reciclable?',
        options: [
            { id: 1, answerText: 'Papel y cartón', correct: true },
            { id: 2, answerText: 'Plástico y metal', correct: true },
            { id: 3, answerText: 'Lo mencionado anteriormente, no importa si no está limpio o seco', correct: false },
            { id: 4, answerText: 'Lo mencionado anteriormente, tiene que estar limpio y seco', correct: true },
            { id: 5, answerText: 'Uranio enriquecido', correct: false },
            { id: 6, answerText: 'Hojas y ramas', correct: false },
            { id: 7, answerText: 'Vidrio', correct: true },
        ],
        pointsPerCorrectAnswer: 1,
    },
];

      export const getQuestion = async () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(questions);
          }, 1000);
        });
      };

        // export const getQuestion = async (id) => {
        //     return new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         const question = questions.find((question) => question.id === id);
        //         if (question) {
        //           resolve(question);
        //         } else {
        //           reject(new Error('No se encontró la pregunta'));
        //         }
        //       }, 1000);
        //     });
        //   };