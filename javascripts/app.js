// Rover Object Goes Here

var directions = ["N", "E", "S", "W"]
var directionNow = 0;

var travelLog =[] 

y = 0
x = 0

// ======================

function moveRover(rover){
  console.log(rover.length)
  sizeRover = rover.length-1
  for (i = 0; i <= sizeRover; i ++){
    if (rover[i] == "f"){
      moveForward(directionNow);
    }else if (rover[i] == "r"){
      turnRight(directionNow);
    }else if (rover[i] == "l"){
      turnLeft(directionNow);
    } 
    console.log("square postion = " + x, y );
    console.log("direction = " + directions[directionNow]);
    travelLog.push([x,y])
  }
  console.log(travelLog)
} 

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  rover -= 1;
  if (rover < 0) {
    rover = 3;
  }
  directionNow = rover
  return directionNow; 
}

function turnRight(rover){
  console.log("turnRight was called!");
  rover += 1;
  if (rover > 3) {
    rover = 0;
  }
  directionNow = rover;
  return directionNow;
}

function moveForward(rover){
  console.log("moveForward was called!")
  if (rover == 0 && y > 0) {
    y --;
    console.log("rest y - " + y)
    return y;
  }else if (rover == 2 && y < 9) {
    y ++;
    console.log("sum y + " + y)
    return y;
  }else if (rover == 3 && x > 0) {
    x --;
    console.log("rest x -" + x)
    return x;
  }else if (rover == 1 && x < 9) {
    x ++;
    console.log("sum x + " + x)
    return x;
  }else {
    console.log("estoy bloqueado")
  }
}