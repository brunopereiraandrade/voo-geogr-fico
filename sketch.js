 //botões
var xplane,yplane
var cont,time,minutos,relogio,som,som2
var xbotao1,xbotao2,xbotao3,ybotao1,ybotao2,ybotao3,largura,altura;
var xcursor,ycursor
var estado = 1
let img,img2,img3,img4,img5,img6;
function preload() {
  img = loadImage('TESTE.jpg');
  img2 = loadImage('rio de janeiro.jpg')
  img3 = loadImage("rn2.jpg")
  img4 = loadImage("mapa.png")
  img5 = loadImage("pouso.jpg")
  img6 = loadImage("game over.jpg")
  player = loadImage('airplane.png')
  player1 = loadImage('airplane.png')
  player2 = loadImage('airplane direita.png')
  player3 = loadImage('airplane esquerda.png')
  player4 = loadImage('airplane traz.png')
  som = loadSound('Audio 3.mp3')
  som2 = loadSound('Audio 4.mp3')
}
function setup() {
  createCanvas(500, 400);
}
largura = 200
altura = 50
xbotao1=145
xbotao2=145
xbotao3=145
xcursor=145
ybotao1=110
ybotao2=170
ybotao3=230
ycursor=110
xplane = 200
yplane = 335
time=0
minutos=0
cont=0
function draw() {
  background(20);
  playsound()

  if(estado==1){
    menu()
  }
  else if(estado==2){
    fase1()
  }
  else if(estado==3){
    creditos()
  }
  else if(estado==4){
    instruçoes()
  }
  else if(estado==5){
   dica()
  }
  else if(estado==6){
    pouso()
  }
  else if(estado==7){
    fase2()
  }
  else if(estado==8){
    dica2()
  }
  else if(estado==9){
    fase3()
  }
  else if(estado==10){
    dica3()
  }
  else if(estado==11){
    gameover()
  }
  if(estado==1||estado==6||estado==11){
    time=0
    minutos=0
  }
}
function keyPressed(){
  if(keyCode==UP_ARROW && ycursor==ybotao3){
    ycursor = ybotao2
  }
  else{
    if(keyCode==UP_ARROW && ycursor==ybotao2)
      ycursor = ybotao1
  }
  if(keyCode==DOWN_ARROW && ycursor==ybotao1)
    ycursor = ybotao2
  else{
    if(keyCode==DOWN_ARROW && ycursor==ybotao2){
      ycursor = ybotao3
    }
  }
  if(keyCode==ENTER && ycursor==ybotao1 && estado==1){
    estado = 2
  }
  else if(keyCode==ENTER && ycursor==ybotao2 && estado==1){
    estado = 3
  }
  else if(keyCode==ENTER && ycursor==ybotao3 && estado==1){
    estado = 4
  }
  if(keyCode==ESCAPE){
    estado = 1
  }
  if(keyIsDown(SHIFT) && estado==2){
    estado = 5
  }
   else if(keyIsDown(SHIFT) && estado==5){
     estado = 2
   }
  else if(keyIsDown(SHIFT) && estado==7){
     estado = 8
   }
  else if(keyIsDown(SHIFT) && estado==8){
     estado = 7
   }
  if(keyIsDown(SHIFT) && estado==9){
     estado = 10
   }
  else if(keyIsDown(SHIFT) && estado==10){
     estado = 9
   }
   if(keyCode==ENTER && estado==6 && cont==0){
    estado = 7
     cont++
   }
  else if(keyCode==ENTER && estado==6 && cont==1){
     estado = 9
    cont++
   }
  else if(keyCode==ENTER && estado==6 && cont==2){
     estado = 1
    cont=0
   }
  if (keyCode==ENTER && yplane>=245 && yplane <= 260  && xplane>=345 && xplane<=360 && estado==2){
    estado = 6
    xplane = 200
    yplane = 335
    time=0
    minutos=0
  }
   if (keyCode==ENTER && yplane>=80 && yplane <= 90  && xplane>=390 && xplane<=420 && estado==7 ){
    estado = 6
    xplane = 200
    yplane = 335
    time=0
    minutos=0
  }
    if (keyCode==ENTER && yplane>=240 && yplane <= 255  && xplane>=290 && xplane<=305 && estado==9 ){
    estado = 6
    xplane = 200
    yplane = 335
    time=0
    minutos=0
  }
}
function menu(){
  //formatação do menu
  textAlign(CENTER)
  textSize(26)
  
  stroke(200)
  fill(240)
  rect(xbotao1,ybotao1,largura,altura,15)
  
  fill(0)
  noStroke()
  text("Start",xbotao1+95,ybotao1+35)
  
    stroke(200)
  fill(240)
  rect(xbotao2,ybotao2,largura,altura,15)
  
  fill(0)
  noStroke()
  text("Informações",xbotao2+100,ybotao2+35)
  
  
  stroke(200)
  fill(240)
  rect(xbotao3,ybotao3,largura,altura,15)
  
    fill(0)
  noStroke()
  text("Como Jogar",xbotao3+100,ybotao3+35)
  
  stroke(200)
  noFill()
  rect(xcursor,ycursor,largura,altura,15)
  
  if(ycursor==ybotao1){
    fill(0,0,230)
  noStroke()
  text("Start",xbotao1+95,ybotao1+35)
  }
  if(ycursor==ybotao2){
    fill(0,0,230)
  noStroke()
  text("Informações",xbotao2+100,ybotao2+35)
  } 
 if(ycursor==ybotao3){
   fill(0,0,230)
   noStroke()
  text("Como Jogar",xbotao3+100,ybotao3+35)
 }
  
}
function creditos(){
  textSize(14)
  fill(240)
  rect(15,120,470,150,15)
  fill(0)
   noStroke()
   text(" Desenvolvedor: Bruno Pereida da Silva Andrade",170,150) 
  text(" Orientadora: Janine silva do Nascimento",145,170)
   
  fill(240)
  rect(385,10,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text("  Press ESC",430,40)
}
function instruçoes(){
  textSize(14)
  fill(240)
  rect(15,120,470,150,15)
  fill(0)
   noStroke()
  text(" Use o mapa as dicas e seus conhecimentos para localizar seu destino",240,150) 
   fill(240)
  rect(385,10,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text("  Press ESC",430,40)
}
function fase1(){
   image(img,0,0)
  image(player,xplane,yplane)
    moveplayer()
    textSize(14)
  fill(240)
  rect(0,0,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text(" Press Shift",45,30)
      textSize(20);
  relogio = int(time/100)
  if(relogio==60){
    minutos++
    time=0
  }
  text(relogio,460,30)
  if(minutos>0){
  text(minutos+" :",430,30)
}
  time++
  if(minutos==1 && estado==2){
    estado=11
    minutos=0
  }
}
function fase2(){
   image(img,0,0)
  image(player,xplane,yplane)
    moveplayer()
    textSize(14)
  fill(240)
  rect(0,0,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text(" Press Shift",45,30)
  textSize(20);
  relogio = int(time/100)
  if(relogio==60){
    minutos++
    time=0
  }
  text(relogio,460,30)
  if(minutos>0){
  text(minutos+" :",430,30)
}
  time++
  if(minutos==1 && estado==7){
    estado=11
    minutos=0

  } 
}
function fase3(){
   image(img,0,0)
  image(player,xplane,yplane)
    moveplayer()
    textSize(14)
  fill(240)
  rect(0,0,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text(" Press Shift",45,30)
  textSize(20);
  relogio = int(time/100)
  if(relogio==60){
    minutos++
    time=0
  }
  text(relogio,460,30)
  if(minutos>0){
  text(minutos+" :",430,30)
}
  time++
  if(minutos==1 && estado==9){
    estado=11
    minutos=0
  } 
}
function moveplayer(){
  player = player1
  if(keyIsDown(UP_ARROW) && yplane > 0 ){
    yplane = yplane - 5   
    player = player1
  }
 if(keyIsDown(DOWN_ARROW) && yplane < 335){
   yplane = yplane +5
   player = player4
 }
  
  if(keyIsDown(LEFT_ARROW) && xplane > 0){
     xplane = xplane - 5    
     player = player3
  }
 if(keyIsDown(RIGHT_ARROW) && xplane < 435){
   xplane = xplane +5
   player = player2
 } 
}
function dica(){
  textSize(14)
  fill(240)
  rect(0,0,500,60)
  fill(0)
  noStroke()
  textSize(14)
  text(" Sua primeira viagem tem como destino, o Rio de Janeiro localizado em estado",250,15)
  text(" com nome homonimo, localizado na região sudeste.",163,35) 
  text("use o botão ENTER quando estiver acida da area de pouso",190,55)
  image(img2,39,165)
   fill(240)
  rect(385,80,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text(" Press Shift",433,110)
  time++
}
function dica2(){
  textSize(14)
  fill(240)
  rect(0,0,500,60)
  fill(0)
  noStroke()
  textSize(14) 
   text(" Sua próxima viagem tem como destino Natal,localizada no estado",215,15)
  text(" Rio grande do Norte na região nordeste.",125,35)
  text("use o botão ENTER quando estiver acida da area de pouso",190,55)
  image(img3,40,150)
   fill(240)
  rect(385,80,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text(" Press Shift",433,110)
  time++
}
function dica3(){
  textSize(14)
  fill(240)
  rect(0,0,500,60)
  fill(0)
  noStroke()
  textSize(14) 
 text(" Sua próxima viagem tem como destino à grande São paulo",195,15)
  text(" localizada no estado homonimo na região sudeste.",160,35)
  text("use o botão ENTER quando estiver acida da area de pouso",190,55)
  image(img4,-20,55)
   fill(240)
  rect(385,80,100,50,15)
  fill(0)
   noStroke()
  textSize(14)
  text(" Press Shift",433,110)
  time++
}
function pouso(){
 textSize(14)
  fill(240)
  rect(0,0,500,50)
  fill(0)
   noStroke()
  textSize(14)
  text(" Você pousou com sucesso",90,15 )
  image(img5,-15,50)
}
function gameover(){
 textSize(14)
  fill(240)
  rect(0,0,500,50)
  fill(0)
   noStroke()
  textSize(14)
  image(img6,-170,-50)
}
function playsound(){
  if(estado==6){
  frameRate(0.10)
  som.play()
  }
  else if(estado!=6 && estado!=11){
    frameRate(60)
  }
  if(estado==11){
  frameRate(0.10)
  som2.play()
  }
  else if(estado!=6 && estado!=11){
    frameRate(60)
  }
}