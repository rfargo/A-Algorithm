function removeFromArray(arr, elt){
	for (var i = arr.length-1; i>=0; i--){
		if(arr[i] == elt){
			arr.splice(i,1);
		}
	}
}

function heuristic(a,b){
//	var d = dist(a.i, a.j, b.i, b.j);
	var d = abs(a.i-b.i) + abs(a.j-b.j);
	return d;
}

var cols = 92;
var rows = 71;
var grid = new Array (cols);

var openSet= [];
var closedSet = [];
var start;
var end;
var w, h;
var path = [];

function Spot(i,j){
	this.i = i;
	this.j = j;
	this.f = 0;
	this.g = 0;
	this.h = 0;
	this.neighbors = [];
	this.previos = undefined;
	this.wall = false;
	
	//wall is not randomly created
	//this is created to test, later we will make the real wall
//	if(random(1)<0.3){
//		this.wall = true;
//	}
	
	this.show = function(color){
		fill(color);
		if (this.wall){
			fill(0, 51, 102);
		}
		noStroke();
		rect(this.i*w, this.j*h, w, h);
	}
	
	this.addNeighbors = function(grid){
		var i = this.i;
		var j = this.j;
		if(i > 0 && j > 0){
			this.neighbors.push(grid[i-1][j-1]);
		}
		if(i < cols-1 && j > 0){
			this.neighbors.push(grid[i+1][j-1]);
		}
		if(i > 0 && j < rows-1){
			this.neighbors.push(grid[i-1][j+1]);
		}
		if(i <cols-1 && j < rows-1){
			this.neighbors.push(grid[i+1][j+1]);
		}

		if (i < cols - 1){
			this.neighbors.push(grid[i+1][j]);
		}
		if (i > 0){
			this.neighbors.push(grid[i-1][j]);
		}
		if (j < rows - 1){
			this.neighbors.push(grid[i][j+1]);
		}
		if (j > 0){
			this.neighbors.push(grid[i][j-1]);
		}

	}
}

function setup(){
	var myCanvas = createCanvas(828,639);
	myCanvas.parent('myContainer');
//	console.log('A*');
	
	w = width/cols;
	h = height/rows;
	
	//make 2d array of grid
	for(var i = 0; i < cols; i++){
		grid[i] = new Array(rows);
	}
	
	for(var i = 0; i < cols; i++){
		for (var j = 0; j<rows; j++){
			grid[i][j] = new Spot(i,j);
		}
	}

	for(var i = 0; i < cols; i++){
		for (var j = 0; j<rows; j++){
			grid[i][j].addNeighbors(grid);
		}
	}

//	grid[cols-1][rows-1];
	start = grid[40][6];
	end = grid[85][51];

	// == \\

	for(var i = cols-1; i >= cols-90; i--){
		for(var j = 0; j<=60; j=j+5){
			grid[i][j].wall = true;
		}
	}		

					grid[49][5].wall = false;
					grid[51][5].wall = false;
					grid[59][5].wall = false;
					grid[66][5].wall = false;
					grid[71][5].wall = false;
					grid[79][5].wall = false;			
			
					grid[51][10].wall = false;
					grid[59][10].wall = false;

					grid[66][15].wall = false;
					grid[79][15].wall = false;

					grid[51][20].wall = false;
					grid[59][20].wall = false;
					grid[66][20].wall = false;
					grid[71][20].wall = false;
					grid[79][20].wall = false;

					grid[51][35].wall = false;
					grid[59][35].wall = false;
					grid[66][35].wall = false;
					grid[71][35].wall = false;

					grid[59][40].wall = false;
					grid[61][40].wall = false;
					grid[66][40].wall = false;
					grid[71][40].wall = false;
					grid[79][40].wall = false;

					grid[59][50].wall = false;
					grid[61][50].wall = false;
					grid[66][50].wall = false;
					grid[71][50].wall = false;
					grid[79][50].wall = false;

					grid[51][55].wall = false;
					grid[71][55].wall = false;
					grid[79][55].wall = false;

					for(var i = 80; i < 85; i++){
						for(var j = 10; j<=50; j=j+5){
							grid[i][j].wall = false;
						}
					}

					for(var i = 45; i < 50; i++){
						grid[i][10].wall = false;
						grid[i][50].wall = false;
					}
					for(var i = 85; i < 90; i++){
						for(var j = 20; j<=35; j=j+5){
							grid[i][j].wall = false;
						}
						grid[i][10].wall = false;
						grid[i][45].wall = false;
						grid[i][55].wall = false;
					}
					for(var i = 35; i < 45; i++){
						grid[i][10].wall = false;
					}
					for(var i = 35; i < 40; i++){
						grid[i][5].wall = false;
						grid[i][20].wall = false;
					}
					for(var i = 40; i < 50; i++){
						grid[i][15].wall = false;
						grid[i][20].wall = false;
						grid[i][40].wall = false;
						grid[i][45].wall = false;
					}
				
					for(var i = 60; i < 65; i++){
						for(var j = 20; j<=35; j=j+5){
							grid[i][j].wall = false;
						}
					}

					for(var i = 35; i < 60; i++){
						grid[i][30].wall = false;
					}
										
					for(var i = 50; i < 55; i++){
						for(var j = 40; j<=55; j=j+5){
							grid[i][j].wall = false;
						}
					}
					
			//  ||	\\	


	for(var i = rows-1; i >= rows-70; i--){
		for(var j = 35; j<=90; j=j+5){
				grid[j][i].wall =true;			
		}
			}				
	for(var i = 1; i < 5; i++){
				grid[85][i].wall = false;
				grid[80][i].wall = false;
				grid[60][i].wall = false;
				grid[45][i].wall = false;
			}
			for(var i = 6; i < 10; i++){
				grid[80][i].wall = false;
				grid[75][i].wall = false;
				grid[70][i].wall = false;
				grid[55][i].wall = false;
				grid[50][i].wall = false;
			}
			for(var i = 11; i < 15; i++){
				grid[70][i].wall = false;
				grid[60][i].wall = false;
				grid[45][i].wall = false;
			}
			for(var i = 16; i < 20; i++){
				for(var j = 50; j<=80; j=j+5){
					grid[j][i].wall = false;
				}
			}
			for(var i = 26; i < 30; i++){
				grid[75][i].wall = false;
			}
			for(var i = 31; i < 35; i++){
				grid[75][i].wall = false;
			}
			for(var i = 36; i < 40; i++){
				for(var j = 55; j<=80; j=j+5){
					grid[j][i].wall = false;
				}
			}
			for(var i = 51; i < 55; i++){
				for(var j = 50; j<=80; j=j+5){
					grid[j][i].wall = false;
				}
			}
			for(var i = 56; i < 60; i++){
				for(var j = 50; j<=80; j=j+10){
					grid[j][i].wall = false;
				}
				grid[65][i].wall = false;
			}	
			for(var i = rows-62; i >= rows-65; i--){
				grid[65][i].wall =false;
				grid[60][i].wall =false;
			}
			for(var i = 26; i < 35; i++){
				grid[50][i].wall = false;
				grid[40][i].wall = false;
			}			
			for(var i = 6; i < 11; i++){
				grid[45][i].wall = false;
			}
			for(var i = 15; i < 20; i++){
				grid[45][i].wall = false;
			}
			for(var i = 20; i < 25; i++){
				grid[45][i].wall = false;
			}
			for(var i = 36; i < 50; i++){
				grid[45][i].wall = false;
			}

			grid[45][52].wall = false;
			grid[40][6].wall = false;
			grid[40][21].wall = false;
			grid[40][49].wall = false;
			grid[85][6].wall = false;
			grid[85][21].wall = false;
			grid[85][41].wall = false;
			grid[85][51].wall = false;					

			grid[80][29].wall = false;
					
			grid[65][29].wall = false;
			
	
	openSet.push(start);
	
//	console.log(grid);
}

function draw(){
	if(openSet.length > 0){
		var lowestIndex = 0;
		for(var i = 0; i<openSet.length; i++){
			if (openSet[i].f < openSet[lowestIndex].f){
				lowestIndex = i;
			}
		}
		
		var current = openSet[lowestIndex];
		
		if (current === end){
			noLoop();
//			console.log("Done");
		}
		
		removeFromArray(openSet, current);
		closedSet.push(current);
		
		var neighbors = current.neighbors;
		for(var i = 0; i<neighbors.length; i++){
			var neighbor = neighbors[i];
			if(!closedSet.includes(neighbor) && !neighbor.wall){
				var tempG = current.g + 1;
				var newPath = false;
				if(openSet.includes(neighbor)){
					if(tempG < neighbor.g){
						neighbor.g = tempG;
						newPath = true;
					}
				}else{
					neighbor.g = tempG;
					newPath = true;
					openSet.push(neighbor);
				}
				
				if(newPath){
					neighbor.h = heuristic(neighbor, end);
					neighbor.f = neighbor.g + neighbor.h;
					neighbor.previos = current; 
				}
			}
		}
		
	}else{
//		console.log('no solution');
		noLoop();
		return;
		//stop
	}
	
	background(0);
	
	for (var i = 0; i<cols; i++){
		for(var j = 0; j<rows; j++){
			grid[i][j].show(color(255));
		}
	}
	
	//color the roads
	for(var i = 81; i < 85; i++){
		for(var j = 6; j<=54; j++){
			grid[i][j].show(color(204));
		}
	}

	for(var i = 41; i<85; i++){
		for(var j = 6; j<10;j++){
			grid[i][j].show(color(204));			
		}
	}

	for(var i = 41; i<50; i++){
		for(var j = 10; j<25;j++){
			grid[i][j].show(color(204));						
		}
	}
	
	for(var i = 50; i<85; i++){
		for(var j = 36; j<40;j++){
			grid[i][j].show(color(204));						
		}
	}

	for(var i = 40; i<85; i++){
		for(var j = 16; j<20;j++){
			grid[i][j].show(color(204));						
		}
	}

	for(var i = 46; i < 85; i++){
		for(var j = 51; j<=54; j++){
			grid[i][j].show(color(204));
		}
	}

	for(var i = 61; i<65; i++){
		for(var j = 20; j<=35; j++){
			grid[i][j].show(color(204));			
		}
	}

	for(var i = 50; i<55; i++){
		for(var j = 40; j<=50; j++){
			grid[i][j].show(color(204));			
		}
	}

	for(var i = 41; i<50; i++){
		for(var j = 35; j<=50; j++){
			grid[i][j].show(color(204));			
		}
	}
//end of making roads

	for (var i = 0; i<closedSet.length; i++){
		closedSet[i].show(color(124,0,0));
	}

	for (var i = 0; i<openSet.length; i++){
		openSet[i].show(color(0,255,0));		
	}
	
	//find the path
	path = [];
	var temp = current;
	path.push(temp);
	while (temp.previos){
		path.push(temp.previos);
		temp = temp.previos;
	}

	for (var i = 0; i<path.length; i++){
		path[i].show(color(204));		
	}
	
	//making line to better view
	noFill();
	stroke( 0, 0, 68);
	strokeWeight(w/2);
	beginShape();
	for(var i = 0; i < path.length; i++){
		vertex(path[i].i * w + w/2, path[i].j * h + h/2);
	}
	
	endShape();
}