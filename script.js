let applications =[];

const form = document.getElementById("applicationForm");

form.addEventListener("Submit" , function(e){
    (e).preventDefault();

    const application={
        id:Date.now(),
        studentName : document.getElementById("studentName"),
        studentNumber : document.getElementById("studentNumber"),
        faculty : document.getElementById("faculty"),
        course : document.getElementById("course"),
        status : "pending"

    }

    function addApplication(){
        applications.push(application);
    }
    
    function viewApplication(){
        
    }



})