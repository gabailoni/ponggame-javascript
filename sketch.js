//variáveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 18;
let raio = dBolinha / 2;

//velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteComprimentoOp = 10;
let raqueteAlturaOp = 90;
let velocidadeYOponente 

//variáveis placar
let meusPontos = 0;
let pontosOponente = 0;

//sons jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  colisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //colisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcarPonto();
}

function mostrarBolinha(){
   circle(xBolinha, yBolinha, dBolinha);
}

function movimentoBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda (){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete (x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }  
}

function colisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
&& yBolinha - raio < yRaquete + raqueteAltura 
&& yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;}
    raquetada.play();
}

function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu)
    {velocidadeXBolinha *= -1;
     raquetada.play();}
}

 function movimentaRaqueteOponente (){
   if (keyIsDown(87)){
    yRaqueteOponente -=10;
  }  
  if (keyIsDown(83)){
    yRaqueteOponente +=10;
  }
 }

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(18);
  fill(color(75,0,130));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(75,0,130));
  rect(425,10,40,20);
  fill(255);
  text(pontosOponente, 445, 26);
}

function marcarPonto (){
  if (xBolinha > 590){
    meusPontos +=1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente +=1;
    ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}


