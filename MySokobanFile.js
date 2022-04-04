
//to create map container
let div = document.createElement('div');
div.id = 'map';
document.body.appendChild(div);

//to append map item
const target = document.getElementById('map');
var currentPostion = new Array(2);
var targetPostion = new Array(2);
var targetBoxPostion = new Array(2);




function CreateMap() {

  

  for (let x = 0; x <  tileMap01.height; x++) {
    
    for (let y = 0; y< tileMap01.width; y++) {

      let element = document.createElement('div');

      if(tileMap01.mapGrid[x][y]==" "){
        element.className ="emptpySpace";

      }
      else if(tileMap01.mapGrid[x][y]=="W"){
        element.className="wall";

      }
      else if(tileMap01.mapGrid[x][y]=="B"){
        element.className="MovableBlock";

      }
      else if(tileMap01.mapGrid[x][y]=="P"){
        element.className="Player";
        currentPostion[0]=x;//set p current posiotion
        currentPostion[1]=y;//set p current posiotion
      }
      else if(tileMap01.mapGrid[x][y]=="G"){
        element.className="GoalArea";

      }
      else if(tileMap01.mapGrid[x][y]=="PG"){
        element.className="PlayerGoalArea";
        currentPostion[0]=x;//set p current posiotion
        currentPostion[1]=y;//set p current posiotion
      }
      else if(tileMap01.mapGrid[x][y]=="BG"){
       
        element.className="BoxGoalArea";
      }
      else{
        element.className ="emptpySpace";

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
  

    for (let x = 0; x <  tileMap01.height; x++) {
      
      for (let y = 0; y< tileMap01.width; y++) {
    
        if(tileMap01.mapGrid[x][y]=="G")
        return false;
      }

}
return true;
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
        
        document.getElementById("messageBox").innerHTML+="current position x: "+[currentPostion[0]]+'current position y: '+[currentPostion[1]];

        MoveLeft();
                  break;
      case 38:
        document.getElementById("messageBox").innerHTML="move up";
        
        document.getElementById("messageBox").innerHTML+="current position x: "+[currentPostion[0]]+'current position y: '+[currentPostion[1]];

MoveUp();
          break;
      case 39:
        document.getElementById("messageBox").innerHTML="move right";
        
        document.getElementById("messageBox").innerHTML+="current position x: "+[currentPostion[0]]+'current position y: '+[currentPostion[1]];

MoveRight();
          break;
      case 40:
        document.getElementById("messageBox").innerHTML="move down";
        
        document.getElementById("messageBox").innerHTML+="current position x: "+[currentPostion[0]]+'current position y: '+[currentPostion[1]];

MoveDown();
          break;
  }
};

function MoveUp(){
  var destination=tileMap01.mapGrid[currentPostion[0]-1][currentPostion[1]];
  targetPostion[0]=currentPostion[0]-1;
  targetPostion[1]=currentPostion[1];
  move(destination,"Up");

   
}
function MoveDown(){
  var destination=tileMap01.mapGrid[currentPostion[0]+1][currentPostion[1]];
  
  targetPostion[0]=currentPostion[0]+1;
  targetPostion[1]=currentPostion[1];
  move(destination,"Down");
  
 }
  
function MoveRight(){
  
  var destination=tileMap01.mapGrid[currentPostion[0]][currentPostion[1]+1];
  targetPostion[0]=currentPostion[0];
  targetPostion[1]=currentPostion[1]+1;
  move(destination,"Right");

  }
function MoveLeft(){
  
  var destination=tileMap01.mapGrid[currentPostion[0]][currentPostion[1]-1];
  targetPostion[0]=currentPostion[0];
  targetPostion[1]=currentPostion[1]-1;
  move(destination,"Left");

   }

  function move( destination,direction){


    switch(destination[0]) {

      case "W":
        document.getElementById("messageBox").innerHTML="oops can't move,it's a wall.";
        break;
      case "B":

        if(direction=="Up"){
          var BoxDestination=tileMap01.mapGrid[targetPostion[0]-1][targetPostion[1]];
          targetBoxPostion[0]=[targetPostion[0]-1];
          targetBoxPostion[1]=[targetPostion[1]];
      if(BoxDestination[0]==" "||BoxDestination[0]=="G"){
      movebox(BoxDestination,targetBoxPostion)
    }
else{
  document.getElementById("messageBox").innerHTML="oops can't move,the way is bloked.";
}
        }
        else if(direction=="Left"){
          var BoxDestination=tileMap01.mapGrid[targetPostion[0]][targetPostion[1]-1];
          targetBoxPostion[0]=[targetPostion[0]];
          targetBoxPostion[1]=[targetPostion[1]-1];
          if(BoxDestination[0]==" "||BoxDestination[0]=="G"){
            movebox(BoxDestination,targetBoxPostion)
          }
          else{
            document.getElementById("messageBox").innerHTML="oops can't move,the way is bloked.";
          }

        }
        else if(direction=="Right"){
          var BoxDestination=tileMap01.mapGrid[targetPostion[0]][targetPostion[1]+1];
          targetBoxPostion[0]=[targetPostion[0]];
          targetBoxPostion[1]=[targetPostion[1]+1];
          if(BoxDestination[0]==" "||BoxDestination[0]=="G"){
            movebox(BoxDestination,targetBoxPostion)
          }
          else{
            document.getElementById("messageBox").innerHTML="oops can't move,the way is bloked.";
          }

        }
        else if(direction=="Down"){
          var BoxDestination=tileMap01.mapGrid[targetPostion[0]+1][targetPostion[1]];
          targetBoxPostion[0]=[targetPostion[0]+1];
          targetBoxPostion[1]=[targetPostion[1]];
          if(BoxDestination[0]==" "||BoxDestination[0]=="G"){
            movebox(BoxDestination,targetBoxPostion)
          }
          else{
            document.getElementById("messageBox").innerHTML="oops can't move,the way is bloked.";
          }

        }
        break;
        case "G":
          
          if((tileMap01.mapGrid[currentPostion[0]][currentPostion[1]])[0]==["PG"]){
            tileMap01.mapGrid[currentPostion[0]][currentPostion[1]]=["G"];
          }else{
            (tileMap01.mapGrid[currentPostion[0]][currentPostion[1]])[0]=[" "];

          }
          tileMap01.mapGrid[targetPostion[0]][targetPostion[1]]=["PG"];
          Reset();
          

          break;

          case "PG":
            
            tileMap01.mapGrid[currentPostion[0]][currentPostion[1]]=["G"];
            tileMap01.mapGrid[targetPostion[0]][targetPostion[1]]=["PG"];
            Reset();
            

            break;

      default:
        
        if(tileMap01.mapGrid[currentPostion[0]][currentPostion[1]][0]==[" "]){
          tileMap01.mapGrid[currentPostion[0]][currentPostion[1]]=[" "];//set current postion "" to show grass
        }
        else if(tileMap01.mapGrid[currentPostion[0]][currentPostion[1]][0]==["PG"]){
          tileMap01.mapGrid[currentPostion[0]][currentPostion[1]]=["G"];//set current postion "" to show grass
        }
        else if(tileMap01.mapGrid[currentPostion[0]][currentPostion[1]][0]==["P"]){
          tileMap01.mapGrid[currentPostion[0]][currentPostion[1]]=[" "];//set current postion "" to show grass
        }
        
        tileMap01.mapGrid[targetPostion[0]][targetPostion[1]]=["P"];//set person at next position
        Reset();


    } 
  }

  function movebox(BoxDestination,targetBoxPostion){
    
    switch(BoxDestination[0]) {
      case "W":
        document.getElementById("messageBox").innerHTML="oops can't move,it's a wall.";
        break;
      case "B":
        document.getElementById("messageBox").innerHTML="oops can't move,it's a wall.";

         break;
      case "G":
        document.getElementById("messageBox").innerHTML="your are on the target";

        if((tileMap01.mapGrid[currentPostion[0]][currentPostion[1]])==["PG"]){
          tileMap01.mapGrid[currentPostion[0]][currentPostion[1]]=["G"];
        }else{
          (tileMap01.mapGrid[currentPostion[0]][currentPostion[1]])=[" "];
          (tileMap01.mapGrid[targetPostion[0]][targetPostion[1]])=["P"];
          tileMap01.mapGrid[targetBoxPostion[0]][targetBoxPostion[1]]=["BG"];

        }

        Reset();
  
           break;
  
      default:

        tileMap01.mapGrid[currentPostion[0]][currentPostion[1]]=[" "];
        tileMap01.mapGrid[targetPostion[0]][targetPostion[1]]=["P"];
        tileMap01.mapGrid[targetBoxPostion[0]][targetBoxPostion[1]]=["B"];
        Reset();


    } 
  }
