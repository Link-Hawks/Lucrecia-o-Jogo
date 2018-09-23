class Personagem {

    constructor(nome,largura,altura,player) {
        this.nome = nome;
        this.largura = largura;
        this.altura = altura;
        this.sprite = new Sprites(
            player,
            "esquerda",
            "direita",
            "puloEsquerda",
            "puloDireita",
            "SocoEsquerda",
            "SocoDireita",
            "baixoEsquerda",
            "baixoDireita",
            "chuteEsquerda",
            "chuteDireita",
            "defesaEsquerda",
            "defesaDireita",
            "socoEsticadoDireita"
        );
        this.spriteDraw = this.sprite.direita;
        this.largura = this.spriteDraw.width;
        this.altura = this.spriteDraw.height;
        this.x = 150;
        this.y = 150;
        this.posicaoDireita = true;
        this.posicaoEsquerda = false;
        this.posicaoBaixo = false;
        this.posicaoCima = false;
        this.speed = 2;
        this.hp = 100;
        this.cor = "#fff";
        this.draw();

    }
    
    checaColisao(Colidivel,posicao){
        let colisaoCanvasEsquerda = this.x-this.speed<0;
        let colisaoCanvasDireita = this.x+this.largura+this.speed>cnv.width;
        
        if(posicao == "canvas"){
            return colisaoCanvasEsquerda || colisaoCanvasDireita;
        }

        if(posicao == "canvasEsquerda"){
            return colisaoCanvasEsquerda;
        }
        if(posicao == "canvasDireita"){
            return colisaoCanvasDireita;
        }

        if(posicao == "direita"){
            let colisaoDireita = this.x+this.largura+this.speed>=Colidivel.x && Colidivel.x>this.x;
            return colisaoDireita || colisaoCanvasDireita;
        }
        if(posicao == "esquerda" ){
            let colisaoEsquerda = this.x-this.speed<=Colidivel.x+Colidivel.largura && Colidivel.x<this.x;
            return colisaoEsquerda || colisaoCanvasEsquerda;
        }
    }

    aproximaMovimentacao(){
        
    }

    checarDano(Inimigo){
        let inimigoDireita = Inimigo.x > this.x && Inimigo.x<this.x+this.largura;
        let inimigoEsquerda = Inimigo.x+Inimigo.largura>this.x && Inimigo.x<this.x;
        if(inimigoDireita){
            this.hp-=5;
            if(this.checaColisao(Inimigo,"direita"))
                this.x = Inimigo.x+Inimigo.largura+1;           
        }else if(inimigoEsquerda){
            this.hp-=5; 
            var audio = document.createElement("audio");
            audio.setAttribute("href","punch.mp3");
            audio.play();
            if(this.checaColisao(Inimigo,"esquerda")){
                this.x = Inimigo.x+Inimigo.largura+1; 
            }
        }
        if(inimigoDireita || inimigoEsquerda){
            
            var audio = document.createElement("audio");
            audio.setAttribute("src","punch.mp3");
            audio.play();
        }
        
        
    }

    zeraPosicao(){
        this.posicaoDireita = false;
        this.posicaoEsquerda = false;
        this.posicaoBaixo = false;        
        this.posicaoCima = false;
    }

    movimentacao(orientacao,Colidivel){

        if(orientacao == "direita"){
            this.zeraPosicao();
            this.posicaoDireita = true;
            this.spriteDraw = this.sprite.direita;
            if(!this.checaColisao(Colidivel,"direita")){
                this.cor = "#fff";
                this.x+=this.speed;
                this.xTemp = this.x;
                
            }else{
                this.cor = "firebrick";
            }
            
        }
        if(orientacao == "esquerda"){
            this.zeraPosicao();
            this.posicaoEsquerda = true;           
            this.spriteDraw = this.sprite.esquerda;
            if(!this.checaColisao(Colidivel,"esquerda")){
                this.cor = "#fff";
                this.x-=this.speed;
                this.xTemp = this.x;
            } else{
                this.cor = "firebrick";
            }
        }
        if(orientacao == "baixo"){
            this.posicaoBaixo = true;            
            if(this.posicaoDireita){
                this.spriteDraw = this.sprite.baixoDireita;
            }else if(this.posicaoEsquerda){
                this.spriteDraw = this.sprite.baixoEsquerda;
            }
            
        }
        if(orientacao == "cima"){
            this.posicaoCima = true;
            if(this.posicaoDireita){
                this.spriteDraw = this.sprite.puloDireita;
            }else if(this.posicaoEsquerda){
                this.spriteDraw = this.sprite.puloEsquerda;
            }
        }
    }

    
    golpes(golpe){
        if(golpe == "soco"){
            this.golpeSoco = true;
            if(this.posicaoDireita){                
                this.spriteDraw = this.sprite.socoDireita;
            }else if(this.posicaoEsquerda && this.golpeSoco){
                let intervalo=Math.abs(this.largura-74);
                if(intervalo == 60)
                    intervalo = 0;
                this.x-=intervalo;
                this.spriteDraw = this.sprite.socoEsquerda;
                
            }
        }
        if(golpe == "golpeEspecial1"){
            this.golpeEspecial1 = true;
            if(this.posicaoDireita){                
                this.spriteDraw = this.sprite.golpeEspecial1;
            }
        }

        if(golpe == "golpeEspecial2"){
            this.golpeEspecial2 = true;
            if(this.posicaoDireita){                
                this.spriteDraw = this.sprite.golpeEspecial2;
            }
        }

        if(golpe == "chute"){
            this.golpeChute = true;
            if(this.posicaoDireita){
                this.spriteDraw = this.sprite.chuteDireita;
            }else if(this.posicaoEsquerda){
                this.spriteDraw = this.sprite.chuteEsquerda;
            }
        }
        if(golpe == "defesa"){
            this.defesa = true;
            if(this.posicaoDireita){
                this.spriteDraw = this.sprite.defesaDireita;
            }else if(this.posicaoEsquerda){
                this.spriteDraw = this.sprite.defesaEsquerda;
            }
        }
    }

   

    draw(){
        
        this.largura = this.spriteDraw.width;
        this.altura = this.spriteDraw.height;     
        ctx.drawImage(this.spriteDraw,this.x,this.y,this.largura,this.altura);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(this.x,this.y,this.spriteDraw.width,this.spriteDraw.height);
        ctx.fillStyle = this.cor;
        ctx.fillText("x: "+this.x,this.x,this.y-7);
        ctx.fillText("y: "+this.y,this.x,this.y-20);
        
    }

}
