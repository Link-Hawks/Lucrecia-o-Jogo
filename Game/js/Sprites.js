
class Sprites{

    constructor(diretorio,esquerda,direita,puloEsquerda,puloDireita,socoEsquerda,socoDireita,baixoEsquerda,baixoDireita,chuteEsquerda,chuteDireita,defesaEsquerda,defesaDireita,golpeEspecial1){
        this.img = new Image();
        this.diretorio = diretorio;
        this.esquerda_ = "img/"+diretorio+"/"+esquerda+".png";
        this.direita_ = "img/"+diretorio+"/"+direita+".png";
        this.puloEsquerda_ = "img/"+diretorio+"/"+puloEsquerda+".png";
        this.puloDireita_ = "img/"+diretorio+"/"+puloDireita+".png";
        this.socoEsquerda_ = "img/"+diretorio+"/"+socoEsquerda+".png";
        this.socoDireita_ = "img/"+diretorio+"/"+socoDireita+".png";
        this.baixoEsquerda_ = "img/"+diretorio+"/"+baixoEsquerda+".png";
        this.baixoDireita_ = "img/"+diretorio+"/"+baixoDireita+".png";
        this.chuteEsquerda_ = "img/"+diretorio+"/"+chuteEsquerda+".png";
        this.chuteDireita_ = "img/"+diretorio+"/"+chuteDireita+".png";
        this.defesaEsquerda_ = ["img/"+diretorio+"/"+defesaEsquerda+".png"];
        this.defesaDireita_ = "img/"+diretorio+"/"+defesaDireita+".png";
        this.golpeEspecial1_ = "img/"+diretorio+"/"+golpeEspecial1+".png";
        this.golpeEspecial2_ = ["img/"+diretorio+"/especial0.png","img/"+diretorio+"/especial1.png","img/"+diretorio+"/especial2.png","img/"+diretorio+"/especial3.png","img/"+diretorio+"/especial4.png"];
        this.count=0;
    }

    // --------------------        Sprites Esquerda/Direita       --------------------------------- *

    get direita(){
        this.img.src = this.direita_;
        return this.img;
    }

    set direta(direita){
        this.direita_ = "img/"+this.diretorio+"/"+direita+".png";
    }

    get esquerda(){
        this.img.src = this.esquerda_;
        return this.img;
    }

    set esquerda(esquerda){
        this.esquerda_ = "img/"+this.diretorio+"/"+esquerda+".png";
    }

    // --------------------        Sprites de Pulo       --------------------------------- *

    get puloEsquerda(){
        this.img.src = this.puloEsquerda_;
        return this.img;
    }

    set puloEsquerda(puloEsquerda){
        this.puloEsquerda_ = "img/"+this.diretorio+"/"+puloEsquerda+".png";        
    }

    get puloDireita(){
        this.img.src = this.puloDireita_;
        return this.img;
    }

    set puloDireita(puloDireita){
        this.puloDireita_ = "img/"+this.diretorio+"/"+puloDireita+".png";        
    }

    // --------------------        Sprites de Socos       --------------------------------- *

    get socoEsquerda(){
        this.img.src = this.socoEsquerda_;
        return this.img;
    }

    set socoEsquerda(socoEsquerda){
        this.socoEsquerda_ = "img/"+this.diretorio+"/"+socoEsquerda+".png";    
    }

    get socoDireita(){
        this.img.src = this.socoDireita_;
        return this.img;
    }

    set socoDireita(socoDireita){        
        this.socoDireita_ = "img/"+this.diretorio+"/"+socoDireita+".png";     
    }

    // --------------------        Sprites de Chutes       --------------------------------- *

    get chuteDireita(){
        this.img.src = this.chuteDireita_;
        return this.img;
    }

    set chuteDireita(chuteDireita){        
        this.chuteDireita_ = "img/"+this.diretorio+"/"+chuteDireita+".png";     
    }

    get chuteEsquerda(){
        this.img.src = this.chuteEsquerda_;
        return this.img;
    }

    set chuteEsquerda(chuteEsquerda){        
        this.chuteEsquerda_ = "img/"+this.diretorio+"/"+chuteEsquerda+".png";     
    }

    // --------------------        Sprites Baixos       --------------------------------- *

    get baixoEsquerda(){
        this.img.src = this.baixoEsquerda_;
        return this.img;
    }

    set baixoEsquerda(baixoEsquerda){
        this.baixoEsquerda_ = "img/"+this.diretorio+"/"+baixoEsquerda+".png"; 
    }

    get baixoDireita(){
        this.img.src = this.baixoDireita_;
        return this.img;
    }

    set baixoDireita(baixoDireita){
        this.baixoDireita_ = "img/"+this.diretorio+"/"+baixoDireita+".png";
    }

    // --------------------        Sprites de Defesas       --------------------------------- *

    get defesaDireita(){
        this.img.src = this.defesaDireita_;
        return this.img;
    }

    set defesaDireita(defesaDireita){
        this.defesaDireita_ = "img/"+this.diretorio+"/"+defesaDireita+".png";
    }

   get defesaEsquerda(){
       if(this.count == this.defesaEsquerda_.length)
            this.count = 0;
       this.img.src = this.defesaEsquerda_[this.count];
       this.count++;
       return this.img;
    }

    set defesaEsquerda(defesaEsquerda){
        this.defesaEsquerda_ =  "img/"+this.diretorio+"/"+defesaEsquerda+".png";
    }


    // --------------------        Sprites de Defesas       --------------------------------- *

    get golpeEspecial1(){
        this.img.src = this.golpeEspecial1_;
        return this.img;
    }

    set golpeEspecial1(golpeEspecial1){
        this.golpeEspecial1_ = "img/"+this.diretorio+"/"+golpeEspecial1+".png";
    }

    get golpeEspecial2(){
        if(this.count == this.golpeEspecial2_.length)
             this.count = 0;
        this.img.src = this.golpeEspecial2_[this.count];
        this.count++;
        return this.img;
     }

     set golpeEspecial2(golpeEspecial2){
        this.golpeEspecial2_[count] = "img/"+this.diretorio+"/"+golpeEspecial2+".png";
    }

}

