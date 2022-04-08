class Teclas{
    constructor(){
        this.teclasDisponiveis = {
            jogador1: {
                direita: [39],
                esquerda: [37],
                cima: [38],
                baixo: [40],
                soco: [90],
                chute: [88],
                defesa: [67],
                especial1: [17],
                especial2: [16],
            },
            jogador2: {
                direita: [102],
                esquerda: [100],
                cima: [104],
                baixo: [98],
                soco: [85],
                chute: [73],
                defesa: [79],
                especial1: [80]
            },
            menuInicial: {

            },
            gameOver: {

            },
            pause: {

            }
        };
    }

    teclaApertada(tecla){
        document.querySelector("body").setAttribute("style","overflow:hidden");
        if(tecla == 13){
            iniciou = true;
        }

        // -------------------- JOGADOR 1 --------------
        if(this.teclasDisponiveis.jogador1.direita.includes(tecla)){
            player1.movimentacao("direita",player2)
        }
        if(this.teclasDisponiveis.jogador1.esquerda.includes(tecla)){
            player1.movimentacao("esquerda",player2)
        }        
        if(this.teclasDisponiveis.jogador1.baixo.includes(tecla)){
            player1.movimentacao("baixo",player2)
        }
        if(this.teclasDisponiveis.jogador1.cima.includes(tecla)){
            player1.movimentacao("cima",player2)
        }
        if(this.teclasDisponiveis.jogador1.soco.includes(tecla)){
            player1.golpes("soco");
        }
        if(this.teclasDisponiveis.jogador1.chute.includes(tecla)){
            player1.golpes("chute");
        } 
        if(this.teclasDisponiveis.jogador1.defesa.includes(tecla)){
            player1.golpes("defesa");
        }
        if(this.teclasDisponiveis.jogador1.especial1.includes(tecla)){
            player1.golpes("golpeEspecial1");
        }
        if(this.teclasDisponiveis.jogador1.especial2.includes(tecla)){
            player1.golpes("golpeEspecial2");
        }

        // -------------------- JOGADOR 2 ---------------

        if(this.teclasDisponiveis.jogador2.direita.includes(tecla)){
            player2.movimentacao("direita",player1)
        }
        if(this.teclasDisponiveis.jogador2.esquerda.includes(tecla)){
            player2.movimentacao("esquerda",player1)
        }        
        if(this.teclasDisponiveis.jogador2.baixo.includes(tecla)){
            player2.movimentacao("baixo",player1)
        }
        if(this.teclasDisponiveis.jogador2.cima.includes(tecla)){
            player2.movimentacao("cima",player1)
        }
        if(this.teclasDisponiveis.jogador2.soco.includes(tecla)){
            player2.golpes("soco");
        }
        if(this.teclasDisponiveis.jogador2.chute.includes(tecla)){
            player2.golpes("chute");
        } 
        if(this.teclasDisponiveis.jogador2.defesa.includes(tecla)){
            player2.golpes("defesa");
        }
        if(this.teclasDisponiveis.jogador2.especial1.includes(tecla)){
            player2.golpes("golpeEspecial1");
        }
    }
    teclaSolta(tecla){
        if(this.teclasDisponiveis.jogador1.soco.includes(tecla)){
            player1.golpeSoco =false;
            player1.retornarEstado(player1.soco);
        }
        if(this.teclasDisponiveis.jogador1.baixo.includes(tecla)){
            player1.retornarEstado(player1.baixo);
        }
        if(this.teclasDisponiveis.jogador1.cima.includes(tecla)){
            
            player1.retornarEstado(player1.cima);
        }
        if(this.teclasDisponiveis.jogador1.chute.includes(tecla)){
            player1.retornarEstado(player1.chute);
        }
        if(this.teclasDisponiveis.jogador1.defesa.includes(tecla)){
            player1.retornarEstado(player1.defesa);
        }

        if(this.teclasDisponiveis.jogador1.especial1.includes(tecla)){ 
            player1.x = player1.xTemp;
            player1.retornarEstado();
        }
        if(this.teclasDisponiveis.jogador1.especial2.includes(tecla)){ 
            player1.retornarEstado();
        }

        
        // -------------------- JOGADOR 2 ---------------


        if(this.teclasDisponiveis.jogador2.soco.includes(tecla)){
            player2.golpeSoco =false;
            player2.retornarEstado(player2.soco);
        }
        if(this.teclasDisponiveis.jogador2.baixo.includes(tecla)){
            player2.retornarEstado(player2.baixo);
        }
        if(this.teclasDisponiveis.jogador2.cima.includes(tecla)){
            player2.retornarEstado(player2.cima);
        }
        if(this.teclasDisponiveis.jogador2.chute.includes(tecla)){
            player2.retornarEstado();
        }
        if(this.teclasDisponiveis.jogador2.defesa.includes(tecla)){
            player2.retornarEstado();
        }
        if(this.teclasDisponiveis.jogador2.especial1.includes(tecla)){ 
            player2.x = player2.xTemp;
            player2.retornarEstado();
        }
        
    }
}

