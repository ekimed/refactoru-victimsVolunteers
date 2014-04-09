function getInfo (dictName) {
	var temp = {};
	var name = prompt("Enter name");
	var phoneNumber = prompt("Enter phone number: ");
	var address = prompt("Enter street address");

	temp['phone'] = phoneNumber;
	temp['stAddress'] = address;

	dictName[name] = temp;
}

//Get victims information
var victimsObject = {};

var numOfVictims = +(prompt("Enter the number of disaster victims: "));

for (var i = 0; i < numOfVictims; i++) {	
	getInfo(victimsObject);
}


//Get volunteer information
var numVolunteers = +(prompt("Enter the number of volunteers: "));

var volunteersObj = {};

for (var i = 0; i < numVolunteers; i++) {
	getInfo(volunteersObj);
}


//print out single alert: Number of persons in need, Number of volunteers, list of people in need, all volunteers
var victimListString = [];
var volunteerListString = [];

var formatMessage = function (object) {
	var temp = [];
	for (name in object){
		var completeInfo = name + ", " + object[name].phone + ", " + object[name].stAddress;
		temp.push(completeInfo);
		console.log(completeInfo);
	}

	return temp;					
};

var victimData = formatMessage(victimsObject);
var volunteerData = formatMessage(volunteersObj);

var alertMessage = "Number of victims: " + numOfVictims + "\n" +
					"Number of volunteers: " + numVolunteers + "\n\n" +
					"Victim Info: " + "\n" +
					victimData.join("\n") + "\n\n"+
					"Volunteer Info: " + "\n" +
					volunteerData.join("\n");

alert(alertMessage);

