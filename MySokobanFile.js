//to create map container
let div = document.createElement('div');
div.id = 'map';
document.body.appendChild(div);

//to append map item
const target = document.getElementById('map');

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

      }
      else if(tileMap01.mapGrid[x][y]=="G"){
        element.className="GoalArea";

      }
      else{
        element.className ="emptpySpace";

      }
        target.appendChild(element); 

      } 
  } 
