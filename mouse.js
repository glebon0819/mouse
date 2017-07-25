function random_element(array)
{
	return array[Math.floor(Math.random()*array.length)];  
}
function mouseEntity(){
	this.environment;
	this.memories = new Array();
	this.currentX;
	this.currentY;
	this.happiness = 5;
	this.begin = function(){
		// set currentX and currentY to random points in the environment where good == null
		var point = new Array();
		var pointFound = false;
		while(!pointFound){
			var pointRand = random_element(this.environment);
			if(pointRand[2] == null){
				pointFound = true;
				point.push(pointRand[0], pointRand[1]);
			}
		}
		this.currentX = point[0];
		this.currentY = point[1];
		console.log("start point set: (" + this.currentX + ", " + this.currentY + ")");
	}
	this.move = function(){
		// choose random direction (up, down, left, right)
		var directions = new Array("up", "down", "left", "right");
		var pointExists = false;
		while(!pointExists){
			var direction = random_element(directions);
			var coordinates = new Array(currentX, currentY);
			if(direction == "up"){
				coordinates[1]--;
			}
			else if(direction == "down"){
				coordinates[1]++;
			}
			else if(direction == "left"){
				coordinates[0]--;
			}
			else if(direction == "right"){
				coordinates[0]++;
			}
			// check if that is a valid point in the environment
			for(var i = 0; i < environment.length; i++){
				var point = environmen[i];
				if(point[0] == coordinates[0] && point[1] == coordinates[1]){
					pointExists = true;
				}
			}
		}
		// consult memories
		// set current positions
		// add memory
		
		return coordinates;
	}
	Object.defineProperty(this, 'environment', {
        get: function() {
            //console.log("Text retrieved.");
            return environment;
        },
        set: function(value) {
            environment = value;
            console.log("Environment set.");
        }
    });
	Object.defineProperty(this, 'currentX', {
        get: function() {
            //console.log("Text retrieved.");
            return currentX;
        },
        set: function(value) {
            currentX = value;
            //console.log("Current X set.");
        }
    });
	Object.defineProperty(this, 'currentY', {
        get: function() {
            //console.log("Text retrieved.");
            return currentY;
        },
        set: function(value) {
            currentY = value;
            //console.log("Current Y set.");
        }
    });
}