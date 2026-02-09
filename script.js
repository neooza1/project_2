let applications =[];

const form = document.getElementById("applicationForm");

form.addEventListener("submit" , function(e){
    
    e.preventDefault();
   

    const application ={
        id:Date.now(),
        studentName : document.getElementById("studentName").value,
        studentNumber : document.getElementById("studentNumber").value,
        faculty : document.getElementById("faculty").value,
        course : document.getElementById("course").value,
        status : "pending"

        

    };
     
    const exists = applications.some(app => app.studentNumber == application.studentNumber);
    if (exists) {
        alert("Student number already exists.");
        return;
    }
    
    applications.push(application);
    renderApplications();
    console.log(applications);
     form.reset();

});
    
  
    function renderApplications(){
        
        const list = document.getElementById("applicationList");
        list.innerHTML="";

    for( let i = 0; i <applications.length ; i++){
        const app = applications[i];

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent= "   Delete  ";
        deleteBtn.addEventListener("click", function(){
        deleteApplications(app.id);
        
        const acceptBtn = document.createElement("button");
        acceptBtn.textContent(" Accept");
        acceptBtn.addEventListener("click" , function(){
        updateStatus(app.id, "accepted");

        });

        const rejectBtn = document.createElement("button");
        rejectBtn.textContent("Rejeect");
        rejectBtn.addEventListener("submit", function(){
            updateStatus(app.id, "Accepted");

        });

        });

        const li = document.createElement("li");
        li.textContent = app.studentName  + "  " + app.studentNumber + "  " + app.course  + "  " + app.status;
        list.appendChild(li);
        li.appendChild(deleteBtn);
        li.appendChild(acceptBtn);
        li.appendChild(rejectBtn);


    }

    }
    
    function deleteApplications(id){
        applications = applications.filter(app => app.id !== id);
        renderApplications();
        
        
    };

    function updateStatus(id, newStatus){
        for (let i = 0; i < applications.length; i++) {
            if(applications[i].id == id){
                applications[i].status = newStatus;
                break;
            }
            
        }

    };
    


