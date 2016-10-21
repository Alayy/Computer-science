/* 
NPSS announcements app
By: Alay Shah
Student's section javascript
*/

//local storage setup

function linkView() {
    'use strict';
    var temp = localStorage.getItem("announcementData");
    var newObject = JSON.parse(temp);
    console.log(newObject)
    
//display announcements posted
    
    var aN="";
    var dA="";
    var tI="";
    var lO="";
    
    $("#nameTitle").empty();   
    $("#nameDescription").empty();
    $("#nameCategory").empty();
    $("#nameGender").empty();
    
    for (var i=0; i< newObject.length; i++) {
    //viewing single announcements
          
        var execute= $("#category").val();
        var post= document.getElementById("gender").value;
        
        if (newObject[i].category == execute[0] && newObject[i].gender == post|| execute[0] == "all" && post == "all" || execute[0] == "all" && newObject[i].gender == post || newObject [i].category == execute[0] && post == "all" || newObject[i].category == execute[1] && newObject[i].gender == post|| execute[1] == "all" && post == "all" || execute[1] == "all" && newObject[i].gender == post || newObject [i].category == execute[1] && post == "all" || newObject[i].category == execute[2] && newObject[i].gender == post|| execute[2] == "all" && post == "all" || execute[2] == "all" && newObject[i].gender == post || newObject [i].category == execute[2] && post == "all" || newObject[i].category == execute[3] && newObject[i].gender == post|| execute[3] == "all" && post == "all" || execute[3] == "all" && newObject[i].gender == post || newObject [i].category == execute[3] && post == "all" || newObject[i].category == execute[4] && newObject[i].gender == post|| execute[4] == "all" && post == "all" || execute[4] == "all" && newObject[i].gender == post || newObject [i].category == execute[4] && post == "all") {
            aN += newObject[i].title+"<br>";
            dA += newObject[i].description+"<br>";
            tI += newObject[i].category+"<br>";
            lO += newObject[i].gender+"<br>";
    
    
            $("#nameTitle").html(aN);
            $("#nameDescription").html(dA);
            $("#nameCategory").html(tI);
            $("#nameGender").html(lO);
            
        }   
    
    }
        
}