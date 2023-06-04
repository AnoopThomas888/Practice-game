let kukkuAdiyaan=document.querySelector('.kukku');
let kuttaayiEmaan=document.querySelector('.kuttaayi');
let jasbinAdheham=document.querySelector('.jasbin')
let Score=document.querySelector('.score');
let points=0;
function kukku()
{
    const randomMove=Math.random();
    let computerMove='';
    
    if(randomMove>=.5)
    {
        computerMove='jasbinAdheham';

    }
    else if(randomMove<.5 && randomMove >.3)
    {

      computerMove='kuttaayiEmaan';
    }
    else
    {
        computerMove='kukkuAdiyaan';
    }

 alert('playerMove=kukkuadiyaan',);
 alert(computerMove);


    if(computerMove==='kukkuAdiyaan')
    {
    alert("game out");
    reset();
}

 else 
 {
    alert('you got 10 points');
    points=points + 10;
    Score.innerHTML= 'you got' + points;
 }
}
function kuttaayi()
{
    const randomMove=Math.random();
    
    if(randomMove>=.5)
    {
        computerMove='jasbinAdheham';

    }
    else if(randomMove<.5 && randomMove >.3)
    {

      computerMove='kuttaayiEmaan';
    }
    else
    {
        computerMove='kukkuAdiyaan';
    }
 alert(playerMove='kuttaayiEmaan');
 alert(computerMove);


    if(computerMove==='kuttaayiEmaan')
    {
        alert('game out');
        reset();
        
        
   
}

 else 
 {
    alert('you got 50 points');
    points=points+ 50;
    Score.innerHTML='you got' + points;
 }
}
function reset()
{
    points=0;
Score.innerHTML=0;
return(0);

}

function jasbin()
{
    const randomMove=Math.random();
    
    if(randomMove>=.5)
    {
        computerMove='jasbinAdheham';

    }
    else if(randomMove<.5 && randomMove >.3)
    {

      computerMove='kuttaayiEmaan';
    }
    else
    {
        computerMove='kukkuAdiyaan';
    }
alert('playerMove is jasbinAdheham');
alert(computerMove);

    if(computerMove==='jasbinAdheham')
    {
    Score.innerHTML='game over';
    alert('game over');
    reset();
}

 else 
 {
    alert('you got 100 points');
    points=points + 100;
    Score.innerHTML='you got' + points;
 }}
