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

  

  for (let x = 0; x <  tileMap01.height; x++){ 
    
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


