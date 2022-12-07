import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  
  var IDV, nameV, emailV, phoneV;
  
  const db = getDatabase();
  
  // Reference
  // Getting data from Textboxes
  var IdBox = document.getElementById("idBox");
  var NameBox = document.getElementById("nameBox");
  var EmailBox = document.getElementById("emailBox");
  var PhoneBox = document.getElementById("phoneBox");
  
  // Button References
  
  function insertData(event) {
    event.preventDefault();
    readFormData();
    if (IDV == "" && nameV == "" && emailV == "" && phoneV == "") {
      alert("Fields can not be blank");
    } else {
      // Code to send the data to Firebase
      set(ref(db, "data/" + IDV), {
        ID: IDV,
        name: nameV,
        email: emailV,
        phone: phoneV,
      })
        .then(() => {
          alert("Data Stored Successfully");
        })
        .catch((error) => {
          alert("Unsccussful", error);
        });
  
      clearFormData();
    }
  }

  
  // Read Data from Form
  
  function readFormData() {
    IDV = IdBox.value;
    nameV = NameBox.value;
    emailV = EmailBox.value;
    phoneV = PhoneBox.value;
    console.log(IDV, nameV, emailV, phoneV);
  }
  
  // Clear Form after data Submission
  
  function clearFormData() {
    IdBox.value = "";
    NameBox.value = "";
    EmailBox.value = "";
    PhoneBox.value = "";
  }
  
  document.querySelectorAll(".btn")[0].onclick = insertData;

