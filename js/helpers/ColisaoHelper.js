class ColisaoHelper{
    checarDano(Inimigo){
        let inimigoDireita = Inimigo.x > this.x && Inimigo.x<this.x+this.largura;
        let inimigoEsquerda = Inimigo.x+Inimigo.largura>this.x && Inimigo.x<this.x;
        if(inimigoDireita && (Inimigo.golpeEspecial1 || Inimigo.golpeSoco)){
            this.hp-=5;
            if(this.checaColisao(Inimigo,"direita"))
                this.x = Inimigo.x-Inimigo.largura-4;           
        }else if(inimigoEsquerda && (Inimigo.golpeEspecial1 || Inimigo.golpeSoco)){
            this.hp-=5; 
            if(this.checaColisao(Inimigo,"esquerda")){
                this.x = Inimigo.x+Inimigo.largura+1; 
                this.xTemp = this.x;
                console.log(this.nome+" || ")
            }
        }
        if(inimigoDireita || inimigoEsquerda){
            
            var audio = document.createElement("audio");
            audio.setAttribute("src","../../game/audio/punch.mp3");
            audio.play();
        }

        //Temporario
        if(this.hp<=0){
            this.hp = 0;
        }
    }

    checarGolpeAcertou(Personagem,Inimigo){
        
    }
}