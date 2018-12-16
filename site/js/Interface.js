//Podemos criar ainda outra classe apenas para as fontes, tornando o código mais manutenível.

class Interface{
    constructor(background, fonte="12px Arial", path="img/"+background+".jpg"){
        this._fontePadrao = fonte;
        this._background = new Image();
        this._background.src = path;        
        this._hud = new Hud();
        this._tempo = 60;
        this._ciclo=0;
        this._canvas = document.querySelector("canvas");
        this._contexto = canvas.getContext("2d");
    }

    drawContador(){
        this._tempo = 60-Math.floor(this._ciclo/120);
        if(Math.floor(this._ciclo/120)<120){
            this.ciclo++;
        }
        this._contexto.fillStyle="#e9d700";
        this._contexto.font="20px Arial";
        this._contexto.fillText(this._tempo>=10?this._tempo:"0"+this._tempo,(this._canvas.width/2)-25,35);
    }

    get background(){
        return this._background;
    }
    
    set background(background){
        this._background = background;
    }

    drawInterface(player1,player2){
        this._ciclo++;
        this._contexto.drawImage(this._background,0,-140,this._background.width,this._background.height);
        this.drawContador();
        this._contexto.font = this._fontePadrao;
        this._hud.drawHPJogador(player2,this._canvas.width-(11*player2.nome.length),15,this._canvas.width-200,20);
        this._hud.drawHPJogador(player1,20,15,20,20);
    }

    get tempo(){
        return this._tempo;
    }

}