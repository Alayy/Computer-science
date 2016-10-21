/* 
NPSS announcements app
By: Alay Shah
Teacher's section javascript
*/

// for the user-password
var teacherUsername;

var password;

function checkForm() {
	teacherUsername = document.getElementById("teacherUsername").value;
	password = document.getElementById("password").value;

	if ((teacherUsername == "npss123") && (password == "npss45")) {
		alert ("Welcome, " + teacherUsername);
        $("#omg").empty();
        $("#omg").html();
        
	} else {
		alert ("Wrong Username/Password, please try again");
	}

}

// for input boxes on edit page
var announcement = [];

var index= 0;

function getData(){

	announcement [index] = {
		title:  document.getElementById("announcement-title").value,
		description: document.getElementById("description").value,
		category:  document.getElementById("category").value,
        gender:  document.getElementById("gender").value,

	};

	index ++;
    
    //JSON is used to make local storage, which allows the computer to store in a string format
	var post = JSON.stringify(announcement);
	localStorage.setItem ("announcementData", post);

	alert(post);
}


