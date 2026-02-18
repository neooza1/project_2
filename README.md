# Student Application Tracker (Project 2)

A simple **Student Application Management** web app built with **Vanilla JavaScript**.  
This project demonstrates core frontend fundamentals including **state management, CRUD operations, DOM rendering, validation, filtering, and UI actions**.

---

## Features

### Create Application
- Add a new student application using the form.
- Automatically generates a unique ID using `Date.now()`.
- Default status is **Pending**.

### Read / Render Applications
- Applications are rendered into a table.
- UI always reflects the current JavaScript state.

### Update Application
- Edit student details (Name, Student Number, Faculty, Course).
- Status is preserved when editing.

### Update Status
- Admin can change status from:
  - Pending → Accepted
  - Pending → Rejected
- Accept/Reject buttons become disabled once status is no longer pending.

###  Delete Application
- Remove an application using the Delete button.
- Deletion is done by ID to avoid removing the wrong record.

### Filter Applications
- Filter the list by:
  - All
  - Pending
  - Accepted
  - Rejected

###  Validation
- All fields are required.
- Student number must:
  - Contain numbers only
  - Be exactly 9 digits long
  - Be unique (no duplicates allowed)

---

##  What I Learned

This project helped me practice and understand:

- JavaScript objects and arrays
- Application state (source of truth)
- DOM manipulation and rendering
- Event listeners and UI updates
- CRUD logic (Create, Read, Update, Delete)
- Filtering using `.filter()`
- Preventing duplicates using `.some()`
- Updating items by ID
- Writing cleaner reusable functions

---

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

---

## How To Run

1. Download or clone the repository
2. Open `index.html` in your browser

---

##  Future Improvements 

- Add LocalStorage to persist data after refresh
- Add search by student number or name
- Add sorting (e.g. newest first)
- Improve responsive design for mobile

---

