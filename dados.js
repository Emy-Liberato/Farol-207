const personagens = [
  {
    nome: "Cocodrilo Croc Cocada",
    imagem: "./assets/modal/cocodrilo.png",
    idade: 43,
    altura: 1.83,
    peso: 133,
    historia:
      "Um enigmático rei do crime, fez seu nome na rua e comandava uma grande gangue, até que um dia em uma emboscada metade de seus homens morreram e ele e os sobreviventes fugiram para um recanto próximo ao mar, lá ao acordar, ele já estava sozinho e tudo que restou foram marcas arranhadas no chão e unhas inteiras decepadas. Desde então ele buscou criar seu nome como um pirata, tentou dar uma “repaginada”, ele bem que conseguiu, porém nunca conseguia uma tripulação que o agradasse, afinal, piratas são muito diferentes de membros de facções, então buscou formar uma trupe nova, chamando só as pessoas mais casca-grossa e improváveis que achasse.",
    curiosidade:
      "Cocodrilo era sempre visto com um charuto em sua boca e fumaça o cercando, mas o charuto era falso, só continha palha e grama, ele obviamente não tragava a fumaça, na verdade ele sempre odiou fumar.",
    frase:
      "Fumar é coisa de otário, como vou manter esses músculos se eu virar fumante?",
  },
  {
    nome: "Crustana L’agosta",
    imagem: "./assets/modal/crustana.png",
    idade: 32,
    altura: 2.02,
    peso: 92,
    historia:
      "Um enigmático rei do crime, fez seu nome na rua e comandava uma grande gangue, até que um dia em uma emboscada metade de seus homens morreram e ele e os sobreviventes fugiram para um recanto próximo ao mar, lá ao acordar, ele já estava sozinho e tudo que restou foram marcas arranhadas no chão e unhas inteiras decepadas. Desde então ele buscou criar seu nome como um pirata, tentou dar uma “repaginada”, ele bem que conseguiu, porém nunca conseguia uma tripulação que o agradasse, afinal, piratas são muito diferentes de membros de facções, então buscou formar uma trupe nova, chamando só as pessoas mais casca-grossa e improváveis que achasse.",
    curiosidade:
      "Cocodrilo era sempre visto com um charuto em sua boca e fumaça o cercando, mas o charuto era falso, só continha palha e grama, ele obviamente não tragava a fumaça, na verdade ele sempre odiou fumar.",
    frase:
      "Fumar é coisa de otário, como vou manter esses músculos se eu virar fumante?",
  },
  {
    nome: "Harpina Vultur",
    imagem: "./assets/modal/harpina.png",
    idade: 28,
    altura: 1.78,
    peso: 48,
    historia: `Uma descendente da família original da raça Vultur, considerada a família mais forte dentre Os Reinos às Nuvens, Harpina sempre foi considerada um fracasso por nunca ter aprendido a usar suas asas como armas letais e por ter um imenso medo de voar. Deserdada por seus pais, ela fugiu dos reinos celestes para criar sua própria vida na terra como uma mercenária. Um dia ela se cansou de tudo, roubou um navio e velejou sem rumo, ao salvar um Pirata de renome de um kraken, passou a ser conhecida como "A Rainha dos Mares"`,
    curiosidade: `Harpina sempre foi extremamente obcecada por uma banda chamada "My Alchemic Affair", usando "patches" do emblema da banda em suas roupas e sempre tomando certeza de participar de todos os shows possíveis deles, até mesmo se tirando de mares inexplorados apenas para ir para a ilha mais próxima onde eles tocariam.`,
    frase:
      "ELES SÃO INCRIVEIS, VOCÊ JÁ OUVIU THREE ALES FOR SWEET REVOLUTIONS?",
  },
  {
    nome: "Khara Vella",
    imagem: "./assets/modal/khara.png",
    idade: 36,
    altura: 1.66,
    peso: 46,
    historia:
      "Um caso trágico de um rei egoísta e uma plebeia esperançosa, como uma princesa bastarda expulsa de seu reino ela desde pequena teve que ajudar a mãe a sobreviver, pelo sangue real e poderoso correndo em suas veias, e o sangue ainda mais poderoso de sua mãe, a ultima da raça das Vell'has, ela teve uma certa vantagem, extremamente habilidosa em combate e com uma aptidão a magia elétrica e venenosa extremamente poderosa, apos a morte de sua mãe, ela resolveu tomar vingança por si só, conhecida por estraçalhar reis e livrar reinos de tiranias, ela rapidamente se tornou a princesa que sempre deveria ter sido... A Princesa da Revolta.",
    curiosidade:
      "Devido a nunca realmente ter tido uma infancia, Khara é facilmente encantada com qualquer coisa meramente fofa, em especial bonecas, ela usa seus braços para fazer crochê e criar bonecas das pessoas que ela mais aprecia.",
    frase:
      "Queria ter dedos pra poder colocar laçinhos nas minhas bonecas... Já imaginou como ficaria o Patoel de laçinho ?!?!",
  },
  {
    nome: "Patoel Quaker de Patas III",
    imagem: "./assets/modal/patoel.png",
    idade: 126,
    altura: 1.46,
    peso: 206,
    historia:
      "Um enigmático rei do crime, fez seu nome na rua e comandava uma grande gangue, até que um dia em uma emboscada metade de seus homens morreram e ele e os sobreviventes fugiram para um recanto próximo ao mar, lá ao acordar, ele já estava sozinho e tudo que restou foram marcas arranhadas no chão e unhas inteiras decepadas. Desde então ele buscou criar seu nome como um pirata, tentou dar uma “repaginada”, ele bem que conseguiu, porém nunca conseguia uma tripulação que o agradasse, afinal, piratas são muito diferentes de membros de facções, então buscou formar uma trupe nova, chamando só as pessoas mais casca-grossa e improváveis que achasse.",
    curiosidade:
      "Cocodrilo era sempre visto com um charuto em sua boca e fumaça o cercando, mas o charuto era falso, só continha palha e grama, ele obviamente não tragava a fumaça, na verdade ele sempre odiou fumar.",
    frase:
      "Fumar é coisa de otário, como vou manter esses músculos se eu virar fumante?",
  },
  {
    nome: "Piragon, o Mago",
    imagem: "./assets/modal/piragon.png",
    idade: "?",
    altura: 2.37,
    peso: 207,
    historia:
      "Um lunatico ? Um fiel ? Chame-o do que quiser, a verdade é que esse bastião encouraçado a muito jogou fora seus deveres como um Bha'Karl e trocou a violência desenfreada e sacrifícios, por uma vida pacifica ajudando aqueles que precisam. Sua devoção ao estudo sobre o Farol e as forças que o habitam entretanto, corromperam sua mente, o tornando um tanto quanto... Peculiar.",
    curiosidade:
      "?????????????? Sinceramente nem nós sabemos, ele é meio esquisitinho mas amamos ele mesmo assim",
    frase: "Pobre alma... Que caminho te trouxe até aqui ?",
  },
];
