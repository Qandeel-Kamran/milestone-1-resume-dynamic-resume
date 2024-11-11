var form = document.getElementById("resume-form");
var resumedisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var name = document.getElementById("name").value;
    var fathername = document.getElementById("father-name").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phone number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var dynamicResume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Father Name:</b>").concat(fathername, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone Number:</b>").concat(phonenumber, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    if (resumedisplay) {
        resumedisplay.innerHTML = dynamicResume;
    }
    else {
        console.error('This resume display element is missing.');
    }
});
