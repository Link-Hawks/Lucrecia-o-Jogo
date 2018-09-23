
    /**
     * Diversos conceitos de orientação a objetos foram aplicados neste projeto, contudo ainda possui diversas falhas.
     * 
     * Ao instanciarmos o personagem já o criamos com alguns atributos padrões, por isso foi necessário modificar diretamente
     * neste script os atributos x, y e sprite inicial do segundo player, o mesmo aconteceria caso o numero de personagens 
     * aumentasse, no que significa que a classe não foi bem estruturada, ao criar o personagem já deveriamos passar esses 
     * valores como parâmetro ou ainda criar classes filhas modelos para o player1 e player2 que herdem as características 
     * da classe Personagem.
     * 
     * As teclas seriam melhor agrupadas fora deste código, como uma classe em um arquivo a parte, o qual seria responsável 
     * tanto pela associação delas quanto pela sua funcionalidade.
     * As teclas estão dispostas em vetores, sendo possível adicionar o mesmo comando para valores de entrada diferente, por
     * exemplo, associar o valor da seta esquerda do teclado neste vetor e também associar o valor da seta esquerda de um 
     * gamepad neste mesmo vetor. 
     * 
     * Com destaque a função "teclaSolta" possui uma lógica muito repetitiva, além de mexer diretamente com atributos 
     * dos personagens, podendo gerar erros, problemas de segurança, entre outros. De uma forma geral falta aplicar 
     * conceitos de Orientação a Objetos para melhorá-la.
     * 
     * As barras de HP e o contador fazem parte da interface do jogo, neste caso seria melhor colocar eles em uma classe 
     * específica para a interface.
     * 
     * @version 0.3
     * @author Renan
     */


     
    //Captura o canvas e o contexto do canvas, para podermos desenhar na tela
    let cnv = document.querySelector("canvas");
    let ctx = cnv.getContext("2d");


    //Define os personagens
    
    let player1 = new Personagem("lucrecia",110,120,"player1");
    let player2 = new Personagem("josivaldo",60,60,"player2");

    player2.x =  350;
    player2.y = 110;
    player2.spriteDraw = player2.sprite.esquerda;
    
    let teclas = {
        jogador1_direita: [39],
        jogador1_esquerda: [37],
        jogador1_cima: [38],
        jogador1_baixo: [40],
        jogador1_soco: [90],
        jogador1_chute: [88],
        jogador1_defesa: [67],
        jogador1_especial1: [17],
        jogador1_especial2: [16],
        
        jogador2_direita: [102],
        jogador2_esquerda: [100],
        jogador2_cima: [104],
        jogador2_baixo: [98],
        jogador2_soco: [73],
        jogador2_chute: [79],
        jogador2_defesa: [80],
    }
    let contador = 0;
    let background = new Image();
    background.src = "img/background.jpg";
    window.addEventListener("keydown",teclaApertada);
    window.addEventListener("keyup",teclaSolta);

    function teclaApertada(e){
        tecla = e.keyCode;
        // -------------------- JOGADOR 1 --------------

        if(teclas.jogador1_direita.includes(tecla)){
            player1.movimentacao("direita",player2)
        }
        if(teclas.jogador1_esquerda.includes(tecla)){
            player1.movimentacao("esquerda",player2)
        }        
        if(teclas.jogador1_baixo.includes(tecla)){
            player1.movimentacao("baixo",player2)
        }
        if(teclas.jogador1_cima.includes(tecla)){
            player1.movimentacao("cima",player2)
        }
        if(teclas.jogador1_soco.includes(tecla)){
            player1.golpes("soco");
        }
        if(teclas.jogador1_chute.includes(tecla)){
            player1.golpes("chute");
        } 
        if(teclas.jogador1_defesa.includes(tecla)){
            player1.golpes("defesa");
        }
        if(teclas.jogador1_especial1.includes(tecla)){
            player1.golpes("golpeEspecial1");
        }
        if(teclas.jogador1_especial2.includes(tecla)){
            player1.golpes("golpeEspecial2");
        }

        // -------------------- JOGADOR 2 ---------------

        if(teclas.jogador2_direita.includes(tecla)){
            player2.movimentacao("direita",player1)
        }
        if(teclas.jogador2_esquerda.includes(tecla)){
            player2.movimentacao("esquerda",player1)
        }        
        if(teclas.jogador2_baixo.includes(tecla)){
            player2.movimentacao("baixo",player1)
        }
        if(teclas.jogador2_cima.includes(tecla)){
            player2.movimentacao("cima",player1)
        }
        if(teclas.jogador2_soco.includes(tecla)){
            player2.golpes("soco");
        }
        if(teclas.jogador2_chute.includes(tecla)){
            player2.golpes("chute");
        } 
        if(teclas.jogador2_defesa.includes(tecla)){
            player2.golpes("defesa");
        }
        
    }



    function teclaSolta(e){        
        tecla = e.keyCode;
        if(teclas.jogador1_soco.includes(tecla)){
            player1.golpeSoco = false;
            player1.cor = "#FFF"
            if(player1.posicaoDireita)
                player1.spriteDraw = player1.sprite.direita;
            else if (player1.posicaoEsquerda){
                player1.x=player1.xTemp;
                player1.spriteDraw = player1.sprite.esquerda;
            }
        }
        if(teclas.jogador1_baixo.includes(tecla)){
            player1.posicaoBaixo = false;
            if(player1.posicaoDireita)
                player1.spriteDraw = player1.sprite.direita;
            else if (player1.posicaoEsquerda)
               player1.spriteDraw = player1.sprite.esquerda;
        }
        if(teclas.jogador1_cima.includes(tecla)){
            player1.posicaoCima = false;
            if(player1.posicaoDireita)
                player1.spriteDraw = player1.sprite.direita;
            else if (player1.posicaoEsquerda)
               player1.spriteDraw = player1.sprite.esquerda;
        }
        if(teclas.jogador1_chute.includes(tecla)){
            player1.golpeChute = false;
            if(player1.posicaoDireita)
                player1.spriteDraw = player1.sprite.direita;
            else if (player1.posicaoEsquerda)
               player1.spriteDraw = player1.sprite.esquerda;
        }
        if(teclas.jogador1_defesa.includes(tecla)){
            player1.defesa = false;
            if(player1.posicaoDireita)
                player1.spriteDraw = player1.sprite.direita;
            else if (player1.posicaoEsquerda)
               player1.spriteDraw = player1.sprite.esquerda;
        }

        if(teclas.jogador1_especial1.includes(tecla)){ 
            if(player1.posicaoDireita)
                player1.spriteDraw = player1.sprite.direita;
            else if (player1.posicaoEsquerda)
            player1.spriteDraw = player1.sprite.esquerda;
        }
        if(teclas.jogador1_especial2.includes(tecla)){ 
            if(player1.posicaoDireita)
                player1.spriteDraw = player1.sprite.direita;
            else if (player1.posicaoEsquerda)
            player1.spriteDraw = player1.sprite.esquerda;
        }

        
        // -------------------- JOGADOR 2 ---------------


        if(teclas.jogador2_soco.includes(tecla)){
            player2.golpeSoco = false;
            if(player2.posicaoDireita)
                player2.spriteDraw = player2.sprite.direita;
            else if (player2.posicaoEsquerda){
                player2.x=player2.xTemp;
                player2.spriteDraw = player2.sprite.esquerda;
            }
        }
        if(teclas.jogador2_baixo.includes(tecla)){
            player2.posicaoBaixo = false;
            if(player2.posicaoDireita)
                player2.spriteDraw = player2.sprite.direita;
            else if (player2.posicaoEsquerda)
               player2.spriteDraw = player2.sprite.esquerda;
        }
        if(teclas.jogador2_cima.includes(tecla)){
            player2.posicaoCima = false;
            if(player2.posicaoDireita)
                player2.spriteDraw = player2.sprite.direita;
            else if (player2.posicaoEsquerda)
               player2.spriteDraw = player2.sprite.esquerda;
        }
        if(teclas.jogador2_chute.includes(tecla)){
            player2.golpeChute = false;
            if(player2.posicaoDireita)
                player2.spriteDraw = player2.sprite.direita;
            else if (player2.posicaoEsquerda)
               player2.spriteDraw = player2.sprite.esquerda;
        }
        if(teclas.jogador2_defesa.includes(tecla)){
            player2.defesa = false;
            if(player2.posicaoDireita)
                player2.spriteDraw = player2.sprite.direita;
            else if (player2.posicaoEsquerda)
               player2.spriteDraw = player2.sprite.esquerda;
        }
    }

        loop();
    
   
    function update(){
       
    }

    
    function draw(){
        
        ctx.clearRect(0,0,cnv.width,cnv.height);

        ctx.drawImage(background,0,-140,background.width,background.height);

        ctx.fillStyle="#e9d700";
        ctx.font="20px Arial";
        let tempo = 60-Math.floor(contador/60);
        ctx.fillText(tempo>=10?tempo:"0"+tempo,(cnv.width/2)-25,35);
        if(Math.floor(contador/60)<60){
            contador++;
        }
        ctx.font="12px Arial";

        ctx.beginPath();

        ctx.fillStyle="#FFF";
        ctx.fillText(player2.nome+": "+player1.hp,20,15);
        ctx.strokeRect(20,20,180,20);
        ctx.fillStyle="#000";
        ctx.fillRect(20,20,180,20);       
        ctx.fillStyle="rgb(255, "+255*(player1.hp/100)+", 34)";
        ctx.rect(20,20,180*(player1.hp/100),20);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle="#FFF";
        ctx.fillText(player1.nome+": "+(player2.hp>=0?player2.hp:0),cnv.width-(11*player1.nome.length),15);
        ctx.strokeRect(cnv.width-200,20,180,20);
        ctx.fillStyle="#000";
        ctx.fillRect(cnv.width-200,20,180,20);

        ctx.fillStyle="rgb(255, "+255*(player2.hp/100)+", 34)";
        ctx.rect(cnv.width-200,20,180*(player2.hp>=0?(player2.hp/100):0),20);
        ctx.fill();
        if(player1.golpeChute || player1.golpeSoco || player1.socoEsticadoDireita)
            player2.checarDano(player1);
        if(player2.golpeChute || player2.golpeSoco || player1.socoEsticadoDireita)
            player1.checarDano(player2);
        
        player1.draw();
        player2.draw();
        
    }


    function loop(){
        update();
        draw();
        window.requestAnimationFrame(loop,cnv);
    }