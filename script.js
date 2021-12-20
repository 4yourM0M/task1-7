document.getElementById('x1').onclick = function(){fooGame('x1');}; 
document.getElementById('x2').onclick = function(){fooGame('x2');}; 
document.getElementById('x3').onclick = function(){fooGame('x3');}; 
document.getElementById('x4').onclick = function(){fooGame('x4');}; 
document.getElementById('x5').onclick = function(){fooGame('x5');}; 
document.getElementById('x6').onclick = function(){fooGame('x6');}; 
document.getElementById('x8').onclick = function(){fooGame('x8');}; 
document.getElementById('x7').onclick = function(){fooGame('x7');}; 
document.getElementById('x9').onclick = function(){fooGame('x9');}; 
// підтягнув із html-файлу елементи по ід та присвоїв функцію по кліку
var setted = [];
// створив змінну із масивом

for(var i=0;i<9;i++)
  setted[i]=0;
// цикл, що пробіжиться по масиву
function fooGame(n){
  if(setted[parseInt(n.substring(1))-1]==0){
    document.getElementById(n).innerHTML = '<img src="xxx.png"/>';
    setted[parseInt(n.substring(1))-1] = 1;
  }else return;
  var k =0;
  for(var i=0;i<9;i++)if(setted[i]!=0)k++;
  console.log(k);
  if(k==9 && check(setted)==0){
    alert("Нічия");
    return;
  }
  var rand;
  do{
  rand = Math.round(Math.random()*9);
  }while(setted[rand]!=0);
 setted[rand] =2; 
  document.getElementById('x'+(rand+1)).innerHTML = '<img src="ooo.png"/>';
  if(check(setted)==1){
    alert("Гравець х виграв");
  }
  if(check(setted)==2){
    alert("Гравець 0 виграв");
  }
}
//cтворив функцію, що перевіряє масив та підтягає відповідну картинку для ікса чи нуля, також
// спливає діалогове вікно, що повідомляє про результат гри
function check(map){
    if(map[0]==map[4] && map[4]==map[8] && map[0]!=0)
        return map[0];
    else if(map[2]==map[4] && map[4]==map[6] && map[2]!=0)
        return map[2];
    else if(map[0]==map[1] && map[1]==map[2] && map[0]!=0)
        return map[0];

    else if(map[3]==map[4] && map[4]==map[5] && map[3]!=0)
       return map[3];

    else if(map[6]==map[7] && map[7]==map[8] && map[6]!=0)
        return map[6];
    else if(map[0]==map[3] && map[3]==map[6] && map[0]!=0)
        return map[0];

    else if(map[1]==map[4] && map[4]==map[8] && map[1]!=0)
        return map[1];
    else if(map[2]==map[5] && map[5]==map[8] && map[2]!=0)
        return map[2];
    else return 0;
}
// функція, яка створена відповідно до правил гра, у залежності які комбінації утворюються, таке значення масиву повертається