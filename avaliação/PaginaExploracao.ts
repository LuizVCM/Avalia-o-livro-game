import { PaginaBase } from "./personagens";

class PaginaExploracao extends PaginaBase{
    executar(): void {
        console.log(``)
    }
}

const pagina1 = new PaginaExploracao(1, "Buenas! vocês se encontra na casa de Bilbo Bolseiro, o ambiente estava silencioso até começar a ouvir pequenos barulhos. O que você vai fazer?",
    [
        { texto: "Explorar o motivo do qual os barulhos no jardim da casa", proximaPagina: 2 },
        { texto: "Investigar os sussurros na frente de sua casa", proximaPagina: 15 },
        { texto: "Se esconder na casa", proximaPagina: 3 }

    ]
);

const pagina2 = new PaginaExploracao(2, "Opa, você encontrou algumas coisas para explorar neste jardim 🏡. Qual será a sua próxima ação? ",
    [
        { texto: "Seguir à sua frente até um pequeno lago ", proximaPagina: 9 },
        { texto: "Seguir à sua direita até algumas plantas", proximaPagina: 13 },
        { texto: "Seguir à sua esquerda até uma floresta onde se tem um brilho misterioso", proximaPagina: 24 } 
    ]
)

const pagina3 = new PaginaExploracao(3 , "Fez uma escolha boa, mas você começa a escutar várias batidas vindas da porta. O quê você faz? ",
    [
        { texto: "Se mantém escondido e em silêncio", proximaPagina: 5 },
        { texto: "Sai e abre a porta", proximaPagina:  12},
        { texto: "Sai pela outra porta e foge", proximaPagina: 8 } 
    ]
);

const pagina4 = new PaginaExploracao(4 , "Você escolheu ficar escondido, mas os passos não pararam e o indivíduo vai até a sua porta. O quê você faz? ",
    [
        { texto: "Levanta e pergunta que é", proximaPagina: 26 },
        { texto: "Fica escondido", proximaPagina: 23 },
        { texto: "Espia pela porta", proximaPagina: 7 } 
    ]
);

const pagina5 = new PaginaExploracao(5 , "Você decidiu se manter escondido e em silêncio, mas algo estava a acontecer. Os barulhos pararam, mas alguém invade a casa e você escuta os passos indo até você. O quê você faz?",
    [
        { texto: "Ficar escondido", proximaPagina: 4 },
        { texto: "Verificar quem é", proximaPagina: 10 },    
        { texto: "Verificar se a porta do esconderijo está trancada", proximaPagina: 11 } 
    ]
);

const pagina6 = new PaginaExploracao(6 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina7 = new PaginaExploracao(7 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina8 = new PaginaExploracao(8 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina9 = new PaginaExploracao(9 , "Você decide seguir para este lago",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina10 = new PaginaExploracao(10 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina11 = new PaginaExploracao(11 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina12 = new PaginaExploracao(12 , "Você abriu a porta, e se encontrou o vilão",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina13 = new PaginaExploracao(13 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina14 = new PaginaExploracao(14 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina15 = new PaginaExploracao(15 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina16 = new PaginaExploracao(16 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina17 = new PaginaExploracao(17 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina18 = new PaginaExploracao(18 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina19 = new PaginaExploracao(19 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina20 = new PaginaExploracao(20 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina21 = new PaginaExploracao(21 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina22 = new PaginaExploracao(22 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina23 = new PaginaExploracao(23, "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina24 = new PaginaExploracao(24 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina25 = new PaginaExploracao(25 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);

const pagina26 = new PaginaExploracao(26 , "",
    [
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  },
        { texto: "", proximaPagina:  } 
    ]
);