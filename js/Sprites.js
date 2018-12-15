
class Sprites{

    constructor(diretorio,golpeEspecial1Direita,golpeEspecial1Esquerda){
        this.img = new Image();
        this.diretorio = diretorio;
        this._esquerda = "img/"+diretorio+"/esquerda.png";
        this._direita = "img/"+diretorio+"/direita.png";
        this._puloEsquerda = "img/"+diretorio+"/puloEsquerda.png";
        this._puloDireita = "img/"+diretorio+"/puloDireita.png";
        this._socoEsquerda = "img/"+diretorio+"/socoEsquerda.png";
        this._socoDireita = "img/"+diretorio+"/socoDireita.png";
        this._baixoEsquerda = "img/"+diretorio+"/baixoEsquerda.png";
        this._baixoDireita = "img/"+diretorio+"/baixoDireita.png";
        this._chuteEsquerda = "img/"+diretorio+"/chuteEsquerda.png";
        this._chuteDireita = "img/"+diretorio+"/chuteDireita.png";
        this._defesaEsquerda = ["img/"+diretorio+"/defesaEsquerda.png"];
        this._defesaDireita = "img/"+diretorio+"/defesaDireita.png";
        this._golpeEspecial1Direita = "img/"+diretorio+"/"+golpeEspecial1Direita+".png";
        this._golpeEspecial1Esquerda = "img/"+diretorio+"/"+golpeEspecial1Esquerda+".png";
        this._golpeEspecial2 = ["img/"+diretorio+"/especial0.png","img/"+diretorio+"/especial1.png","img/"+diretorio+"/especial2.png","img/"+diretorio+"/especial3.png","img/"+diretorio+"/especial4.png"];
        this.count=0;
    }

    // --------------------        Sprites Esquerda/Direita       --------------------------------- *

    get direita(){
        this.img.src = this._direita;
        return this.img;
    }

    set direta(direita){
        this._direita = "img/"+this.diretorio+"/"+direita+".png";
    }

    get esquerda(){
        this.img.src = this._esquerda;
        return this.img;
    }

    set esquerda(esquerda){
        this._esquerda = "img/"+this.diretorio+"/"+esquerda+".png";
    }

    // --------------------        Sprites de Pulo       --------------------------------- *

    get puloEsquerda(){
        this.img.src = this._puloEsquerda;
        return this.img;
    }

    set puloEsquerda(puloEsquerda){
        this._puloEsquerda = "img/"+this.diretorio+"/"+puloEsquerda+".png";        
    }

    get puloDireita(){
        this.img.src = this._puloDireita;
        return this.img;
    }

    set puloDireita(puloDireita){
        this._puloDireita = "img/"+this.diretorio+"/"+puloDireita+".png";        
    }

    // --------------------        Sprites de Socos       --------------------------------- *

    get socoEsquerda(){
        this.img.src = this._socoEsquerda;
        return this.img;
    }

    set socoEsquerda(socoEsquerda){
        this._socoEsquerda = "img/"+this.diretorio+"/"+socoEsquerda+".png";    
    }

    get socoDireita(){
        this.img.src = this._socoDireita;
        return this.img;
    }

    set socoDireita(socoDireita){        
        this._socoDireita = "img/"+this.diretorio+"/"+socoDireita+".png";     
    }

    // --------------------        Sprites de Chutes       --------------------------------- *

    get chuteDireita(){
        this.img.src = this._chuteDireita;
        return this.img;
    }

    set chuteDireita(chuteDireita){        
        this._chuteDireita = "img/"+this.diretorio+"/"+chuteDireita+".png";     
    }

    get chuteEsquerda(){
        this.img.src = this._chuteEsquerda;
        return this.img;
    }

    set chuteEsquerda(chuteEsquerda){        
        this._chuteEsquerda = "img/"+this.diretorio+"/"+chuteEsquerda+".png";     
    }

    // --------------------        Sprites Baixos       --------------------------------- *

    get baixoEsquerda(){
        this.img.src = this._baixoEsquerda;
        return this.img;
    }

    set baixoEsquerda(baixoEsquerda){
        this._baixoEsquerda = "img/"+this.diretorio+"/"+baixoEsquerda+".png"; 
    }

    get baixoDireita(){
        this.img.src = this._baixoDireita;
        return this.img;
    }

    set baixoDireita(baixoDireita){
        this._baixoDireita = "img/"+this.diretorio+"/"+baixoDireita+".png";
    }

    // --------------------        Sprites de Defesas       --------------------------------- *

    get defesaDireita(){
        this.img.src = this._defesaDireita;
        return this.img;
    }

    set defesaDireita(defesaDireita){
        this._defesaDireita = "img/"+this.diretorio+"/"+defesaDireita+".png";
    }

   get defesaEsquerda(){
       if(this.count == this._defesaEsquerda.length)
            this.count = 0;
       this.img.src = this._defesaEsquerda[this.count];
       this.count++;
       return this.img;
    }

    set defesaEsquerda(defesaEsquerda){
        this._defesaEsquerda =  "img/"+this.diretorio+"/"+defesaEsquerda+".png";
    }


    // --------------------        Sprites de Golpes Especiais       --------------------------------- *

    get golpeEspecial1Esquerda(){
        this.img.src = this._golpeEspecial1Esquerda;
        return this.img;
    }

    set golpeEspecial1Esquerda(golpeEspecial1Direita){
        this._golpeEspecial1Esquerda = "img/"+this.diretorio+"/"+golpeEspecial1Direita+".png";
    }

    get golpeEspecial1Direita(){
        this.img.src = this._golpeEspecial1Direita;
        return this.img;
    }

    set golpeEspecial1Direita(golpeEspecial2Esquerda){
        this._golpeEspecial2Direita = "img/"+this.diretorio+"/"+golpeEspecialDireita+".png";
    }

    get golpeEspecial2(){
        if(this.count == this._golpeEspecial2.length)
             this.count = 0;
        this.img.src = this._golpeEspecial2[this.count];
        this.count++;
        return this.img;
     }

     set golpeEspecial2(golpeEspecial2){
        this._golpeEspecial2[count] = "img/"+this.diretorio+"/"+golpeEspecial2+".png";
    }


}

