let applications =[];
let selectedId = null;
let currentFilter = "all";

const form = document.getElementById("applicationForm");

const filterSelect = document.getElementById("statusFilter");

filterSelect.addEventListener("change", function() {
    currentFilter= filterSelect.value;
    renderApplications();
})

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

   // validations

    if( !application.studentName || !application.studentNumber || !application.faculty || !application.course){
        alert("Please Fill in all the fields.");
        return;
    }

    if (isNaN (application.studentNumber)){
        alert("Student number must contain numbers only.");
        return;
    }

    if(application.studentNumber.length !== 9 ){
        alert("Student number must be 9 digits long.");
        return;
    }

    
     
    const exists = applications.some(app => app.studentNumber === application.studentNumber && app.id !== selectedId);
    if (exists) {
        alert("Student number already exists.");
        return;
    }

    if(selectedId !== null){
        const oldApp = applications.find(app => app.id === selectedId);
        application.status = oldApp.status;
    }

    if( selectedId === null) {
        applications.push(application);
    }else {
        updateApplication(selectedId, application);
        selectedId = null;
    }
    
    
    renderApplications();
     form.reset();

});
    
  
    function renderApplications(){
        
        const tableBody = document.getElementById("applicationTableBody");
        tableBody.innerHTML="";
           
        //Filter applications?
        let filteredApps = applications;

    if (currentFilter !== "all"){
        filteredApps = applications.filter(app => app.status == currentFilter);

    }
        for (let i = 0; i < filteredApps.length; i++) {
            const app = filteredApps[i];
            
      
  
        //render rows

        
        const row = document.createElement("tr");
       
        row.innerHTML = `
        <td> ${app.studentName} </td> 
         <td>${app.studentNumber}</td>
         <td> ${app.faculty}</td>
         <td> ${app.course} </td>
          <td>
          <span class="status${app.status}">
          ${app.status}
          </td>
          <td class="actions"></td>
          `;
        
          const actionsCell = row.querySelector(".actions");

         //Accept       
        const acceptBtn = document.createElement("button");
        acceptBtn.textContent="Accept";
        acceptBtn.addEventListener("click" , function(){
        updateStatus(app.id, "accepted");

        });
           
        //Reject
        const rejectBtn = document.createElement("button");
        rejectBtn.textContent="Reject";
        rejectBtn.addEventListener("click", function(){
            updateStatus(app.id, "rejected");

        });
        

        //Edit
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function(){
        startEdit(app.id);
        });

        
          //delete

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent= "Delete";
        deleteBtn.addEventListener("click", function(){
        deleteApplications(app.id);
        });
 
    
        //DIsable accept & reject if not pending
        if(app.status !== "pending"){
            acceptBtn.disabled = true;
            rejectBtn.disabled = true;
        }

        
        actionsCell.appendChild(acceptBtn);
        actionsCell.appendChild(rejectBtn);
        actionsCell.appendChild(editBtn);
        actionsCell.appendChild(deleteBtn);

        tableBody.appendChild(row);

        

    }

    }
    
    //delete Function
    function deleteApplications(id){
        applications = applications.filter(app => app.id !== id);
        renderApplications();

        if ( selectedId === id){
            selectedId = null;
            form.reset();
        }
        
        
    };

    //edit function

    function startEdit(id){
        selectedId =id;

        const app = applications.find(app => app.id === id);

        document.getElementById("studentName").value = app.studentName;
        document.getElementById("studentNumber").value = app.studentNumber;
        document.getElementById("faculty").value = app.faculty;
        document.getElementById("course").value = app.course;

    }

        //update status function
    function updateStatus(id, newStatus){
        for (let i = 0; i < applications.length; i++) {
            if(applications[i].id == id){
                applications[i].status = newStatus;
                break;
            }
            
        }

        renderApplications();

    };
      //update appliaction function
    function updateApplication(id, updatedData) {
    for (let i = 0; i < applications.length; i++) {
        if (applications[i].id === id) {
            applications[i].studentName = updatedData.studentName;
            applications[i].studentNumber = updatedData.studentNumber;
            applications[i].faculty = updatedData.faculty;
            applications[i].course = updatedData.course;
            break;
        }
    }
}
    


    