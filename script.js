const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	for(key in sampleObject){
		if(key=="red" || key=="green" || key=="white"){
			return true;
		}
	}
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
