function maker() {
    window.location.href = "#main2";
}

let selectedTemplate = null;

function selectTemplate(templateId) {
    if (selectedTemplate) {
        selectedTemplate.classList.remove("selected");
    }

    selectedTemplate = document.querySelector(`.template-card:nth-child(${templateId})`);
    selectedTemplate.classList.add("selected");

    localStorage.setItem("selectedTemplate", templateId);
}

function nextPage() {
    if (selectedTemplate) {
        window.location.href = "maker/";
    } else {
        alertMessageShow("Please select a template to proceed.");
    }
}






function alertMessageShow(text){
  
    let alertText = document.getElementById("alert-text")
    alertText.innerHTML = text;
    
    let alertBox = document.getElementById("alert-box");
    alertBox.style.display = "flex";
    
  }
  
  
  let alertButton = document.querySelector(".alert-button")
  alertButton.addEventListener("click", function() {
    let alertBox = document.getElementById("alert-box");
    alertBox.style.display = "none";
  });
  