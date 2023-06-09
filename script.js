const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	for(key in sampleObject){
		if(key=="#FF0000"|| key== "#00FF00" || key== "#FFFFFF"){
			return true;
		}
	}
	return false;
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
