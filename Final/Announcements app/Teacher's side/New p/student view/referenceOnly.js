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
	
	if ((teacherUsername == "npss123") && (password == "pass123")) { 
		alert ("Welcome," + teacherUsername);
        //correct user+pass=^^
	} else {
		alert ("Wrong Username/Password, please try again");
        //incorrect user+pass=^^
	}

}

// for input boxes on edit page
var announcement = [];

var index= 0;

function getData(){

	announcement [index] = { 
		title:  document.getElementById("announcement-title").value, 
		date:  document.getElementById("date").value,
		time:  document.getElementById("time").value,
		location:  document.getElementById("location").value,
		extraInfo:  document.getElementById("extra-info").value,
		category:  document.getElementById("category").value
	}; 

	index ++;
    
    

	var post = JSON.stringify(announcement);
	localStorage.setItem ("announcementData", post);

	alert(post);
}

/* 
NPSS announcements app
By: Alay Shah
Student's section javascript
*/

//linking it to teacher view
//display on student page

function linkView() {
    var temp= localStorage.getItem("announcementData") ;
    var post= JSON.parse(temp) ;
    console.log(post[0]) ;

    var field= post[0].announcement-title;
    var field1= post[0].date; 
    var field2= post[0].time;
    var field3= post[0].location;
    var field4= post[0].extra-info;
    var field5= post[0].category;

    var announcement-title = getElementById("announcement-title").innerHTML = field;
    var date = getElementById("date").innerHTML = field1;
    var time = getElementById("time").innerHTML = field2;
    var location = getElementById("location").innerHTML = field3;
    var extra-info = getElementById("extra-info").innerHTML = field4;
    var category = getElementById("category").innerHTML = field5

}