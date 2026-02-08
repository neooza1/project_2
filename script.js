let applications =[];

const form = document.getElementById("applicationForm");

form.addEventListener("submit" , function(e){
    
    e.preventDefault();
   

    const application={
        id:Date.now(),
        studentName : document.getElementById("studentName").value,
        studentNumber : document.getElementById("studentNumber").value,
        faculty : document.getElementById("faculty").value,
        course : document.getElementById("course").value,
        status : "pending"

        

    }
    applications.push(application);
    renderApplications();
    console.log(applications);
     form.reset();
  
    function renderApplications(){
        
        const list = document.getElementById("applicationList");
        list.innerHTML="";

    for( let i = 0; i <applications.length ; i++){
        const app = applications[i];

        const li = document.createElement("li");
        li.textContent = ' ${app.studentName} | ${app.studentNumber} | ${app.course} | ${app.status}';
        list.appendChild(li);


    }
   
   
        

        
       
   

    }
    


})