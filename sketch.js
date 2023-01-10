//variaveis da bolinha 

let xBolinha = 300;
let yBolinha = 200;
let diametro = 19;
let raio = diametro / 2;

//velocidade da bolinha 

let velocidadexBolinha  = 6;
let velocidadeyBolinha  = 6;

//variáveis da raquete
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu =  false;

//placa do jogo

let meusPontos = 0 ;
let pontosOponente = 0;
//variaveis da raquete 

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//sons
const audio = document.querySelector('audio');

function setup() {
  createCanvas(600,400); 
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaqueteBiblioteca(xRaquete , yRaquete);
  mostraRaquete(xRaqueteOponente , yRaqueteOponente);
  movimentaRaqueteOpenente();
  verificaColisaoRaqueteBiblioteca(xRaqueteOponente , yRaqueteOponente);
  incluiPlaca();
  marcaPonto();

}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
   
  if(xBolinha + raio > width  || xBolinha -raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
    
  } 
}


function mostraRaquete(x, y){
  rect(x,y,raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  } 
}

function verificaColisaoRaqueteBiblioteca(x, y) {
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
      velocidadexBolinha *= -1;
  }
}


function movimentaRaqueteOpenente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlaca(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150 , 10 , 40 ,20);
  fill(255);
  text(meusPontos, 170 , 26);
  fill(color(255,140,0))
  rect(450 , 10 , 40 ,20);
  fill(255)
  text(pontosOponente, 470 , 26);
}

function marcaPonto(){
  if(xBolinha > 585){
    meusPontos += 1;   
    audio.play(); 
  }
  if (xBolinha < 10){
    pontosOponente += 1; 
    audio.play();
  }
}







  