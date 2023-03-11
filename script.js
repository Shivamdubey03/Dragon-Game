score = 0 ;
cross = true ;

audio = new Audio('Monkeys-Spinning-Monkeys.mp3')
audio_end= new Audio('game_end.mp3')
setTimeout(()=>{
        audio.play();
} ,1000)

document.onkeydown = function(e){
      console.log("key code is : " , e.keyCode)
      if(e.keyCode==38){
        dragon1 = document.querySelector('.dragon1');
        dragon1.classList.add('animatedragon1');
        setTimeout(()=>{
            dragon1.classList.remove('animatedragon1');
        },1000);
        
      }
      if(e.keyCode==39){
        dragon1 = document.querySelector('.dragon1');
        dragonX = parseInt( window.getComputedStyle(dragon1,null).getPropertyValue('left'));
        dragon1.style.left=dragonX+112+"px";
  }
  if(e.keyCode==37){
    dragon1 = document.querySelector('.dragon1');
    dragonX = parseInt( window.getComputedStyle(dragon1,null).getPropertyValue('left'));
    dragon1.style.left=(dragonX-112)+"px";
}
     
}

setInterval(()=>{
      dragon1=document.querySelector('.dragon1');
      gameOver=document.querySelector('.gameOver');
      Obstacle=document.querySelector('.Obstacle');

      dx=parseInt( window.getComputedStyle(dragon1,null).getPropertyValue('left'));
      dy=parseInt( window.getComputedStyle(dragon1,null).getPropertyValue('top'));

      Ox=parseInt( window.getComputedStyle(Obstacle,null).getPropertyValue('left'));
      Oy=parseInt( window.getComputedStyle(Obstacle,null).getPropertyValue('top'));

      offsetX=Math.abs(dx-Ox);
      offsetY=Math.abs(dy-Oy);

      console.log(offsetX , offsetY)

      if(offsetX<70 && offsetY<100){
        gameOver.innerHTML=" Game Over Reload to start "
        Obstacle.classList.remove('Obstacleanimation')
        audio_end.play();
        setTimeout(() => {
          audio.pause();
          audio_end.pause();
         
        }, 1900);

        // setTimeout(() => {
         
          
        // }, 100);
      }
      else if(offsetX<80 && cross){
       
         score+=1 ;
         updatescore(score);
         cross=false;
         setTimeout(() => {
            cross=true;
         }, 1000);

         setTimeout(() => {
            aniduration = parseFloat( window.getComputedStyle(Obstacle,null).getPropertyValue('animation-duration'));
             newdur=aniduration-0.1;
             Obstacle.style.animationDuration = newdur+'s';
         }, 500);

      }
      
},10);

function updatescore(score){
    scoreContainer.innerHTML = " Your Score : " + score ;
}

