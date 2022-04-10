
//to create map container
let div = document.createElement('div');
div.id = 'map';
document.body.appendChild(div);

//to append map item
const target = document.getElementById('map');
var PlayerPostion , nextBlock , nextNextblock ;

function CreateMap() {

  
  for (let x = 0; x <  tileMap01.height; x++) {
    
    for (let y = 0; y< tileMap01.width; y++) {

      let element = document.createElement('div');

      if(tileMap01.mapGrid[x][y]==" "){
        element.className ="emptpySpace";
        element.id=x+','+y;
      }
      else if(tileMap01.mapGrid[x][y]=="W"){
        element.className="wall";
        element.id=x+','+y;
      }
      else if(tileMap01.mapGrid[x][y]=="B"){
        element.className="MovableBlock";
        element.id=x+','+y;
      }
      else if(tileMap01.mapGrid[x][y]=="P"){
        element.className="Player";
        element.id=x+','+y;
      }
      else if(tileMap01.mapGrid[x][y]=="G"){
        element.className="GoalArea";
        element.id=x+','+y;
      }
      else if(tileMap01.mapGrid[x][y]=="PG"){
        element.className="PlayerGoalArea";
        element.id=x+','+y;
      }
      else if(tileMap01.mapGrid[x][y]=="BG"){      
        element.className="BoxGoalArea";
        element.id=x+','+y;
      }
      else{
        element.className ="emptpySpace";
        element.id=x+','+y;
      }



           target.appendChild(element); 



    
      }
      target.appendChild(document.createElement("br"));
  }
  if(CheckWin()){
    document.getElementById("messageBox").innerHTML+="<h1>You Won!</h1>";

  } 
}



//to make a map once page is loaded

CreateMap();

function ResetMap(){
  tileMap01={
    width: 19,
    height: 16,
    mapGrid: [
      [
        [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],[" "],[" "],["W"],[" "],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],[" "],[" "],["W"],["B"],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],["W"],["W"],["W"],[" "],[" "],["B"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],["W"],[" "],[" "],["B"],[" "],["B"],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        ["W"],["W"],["W"],[" "],["W"],[" "],["W"],["W"],[" "],["W"],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],
      ],
      [
        ["W"],[" "],[" "],[" "],["W"],[" "],["W"],["W"],[" "],["W"],["W"],["W"],["W"],["W"],[" "],[" "],["G"],["G"],["W"],
      ],
      [
        ["W"],[" "],["B"],[" "],[" "],["B"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],["G"],["G"],["W"],
      ],
      [
        ["W"],["W"],["W"],["W"],["W"],[" "],["W"],["W"],["W"],[" "],["W"],["P"],["W"],["W"],[" "],[" "],["G"],["G"],["W"],
      ],
      [
        [" "],[" "],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],["W"],["W"],["W"],
      ],
      [
        [" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
      [
        [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],
      ],
    ],
  };
  target.innerHTML = "";
  CreateMap();

}
function CheckWin(){
  const collection = document.getElementsByClassName("GoalArea"); 
  if(!collection.length>0){
    document.getElementById("messageBox").innerHTML+="<h1>You Won!</h1>";
  }

}




//to reset map
function Reset() {
 


    target.innerHTML = "";
    CreateMap();


}

//to mock move functionality
document.onkeydown = function(e) {
  e.preventDefault();
  
  switch (e.keyCode) {
    case 37:
      document.getElementById("messageBox").innerHTML="move left";
      SetPlayerPosition();
      var playerPositionArr=PlayerPostion.split(',');
      
      Move(0,-1);
                break;
    case 38:
      document.getElementById("messageBox").innerHTML="move up";
      SetPlayerPosition();
      var playerPositionArr=PlayerPostion.split(',');
      
      Move(-1,0);
        break;
    case 39:
      document.getElementById("messageBox").innerHTML="move right";
      SetPlayerPosition();
      var playerPositionArr=PlayerPostion.split(',');
      

      Move(0,1);
        break;
    case 40:
      document.getElementById("messageBox").innerHTML="move down";
      SetPlayerPosition()
      var playerPositionrr=PlayerPostion.split(',');
      
      Move(+1,0);
        break;
}
};
function Move(y,x){
 

var playerPositionArr = PlayerPostion.split(',');
var nextBlockId=( String((parseInt(playerPositionArr[0]) + y))+','+String((parseInt(playerPositionArr[1]) + x)) );
var nextNextblockId=( String((parseInt(playerPositionArr[0]) + (y * 2)))+','+ String((parseInt(playerPositionArr[1])+ (x * 2))) );

nextBlock = document.getElementById( String((parseInt(playerPositionArr[0]) + y))+','+String((parseInt(playerPositionArr[1]) + x)) );
nextNextblock = document.getElementById( String((parseInt(playerPositionArr[0]) + (y * 2)))+','+ String((parseInt(playerPositionArr[1])+ (x * 2))) );

if(nextBlock.classList.contains('wall')){
  document.getElementById("messageBox").innerHTML="oops can't move,it's a wall.";
}
else if(nextBlock.classList.contains('MovableBlock')){
if(nextNextblock.classList.contains('wall')){
document.getElementById("messageBox").innerHTML="oops can't move,the way is blocked";

}
else if(nextNextblock.classList.contains('emptpySpace')){
var playerTag=document.getElementsByClassName('Player')[0];
playerTag.classList.remove("Player");
  if(!playerTag.classList.contains('GoalArea')){
    playerTag.classList.add("emptpySpace");   } 

  nextBlock.classList.remove("MovableBlock");
  nextBlock.classList.add("Player");
  nextNextblock.classList.remove("emptpySpace");
  nextNextblock.classList.add("MovableBlock");
}
else if(nextNextblock.classList.contains('GoalArea')){
  var playerTag=document.getElementsByClassName('Player')[0];
  playerTag.classList.remove("Player");
  playerTag.classList.add("emptpySpace");
  nextBlock.classList.remove("MovableBlock");
  nextBlock.classList.add("Player");
  nextNextblock.classList.remove("GoalArea");
  nextNextblock.classList.add("emptpySpace");
}

  }
  else if(nextBlock.classList.contains('emptpySpace')){
    var playerTag=document.getElementsByClassName('Player')[0];
    playerTag.classList.remove("Player");
   if(!playerTag.classList.contains('GoalArea')){
    playerTag.classList.add("emptpySpace");
   } 
    nextBlock.classList.remove("emptpySpace");
    nextBlock.classList.add("Player");
  }
  else if(nextBlock.classList.contains('GoalArea')){
    var playerTag=document.getElementsByClassName('Player')[0];
    playerTag.classList.remove("Player");
    if(!playerTag.classList.contains('GoalArea')){
      playerTag.classList.add("emptpySpace");
     } 
    nextBlock.classList.add("Player");
  }

  CheckWin();

 }

 function SetPlayerPosition(){
  PlayerPostion = document.getElementsByClassName('Player')[0].id;
 }

