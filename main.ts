
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplay = document.getElementById(
  "resume-display"
) as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event?.preventDefault();

  const name = (document.getElementById("name") as HTMLElement).value;

  const fathername = (document.getElementById("father-name") as HTMLElement).value;

  const email = (document.getElementById("email") as HTMLElement).value;

  const phonenumber = (document.getElementById("phone number") as HTMLElement).value;

  const education = (document.getElementById("education") as HTMLElement).value;

  const experience = (document.getElementById("experience") as HTMLElement).value;

  const skills = (document.getElementById("skills") as HTMLElement).value;

  const dynamicResume = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Father Name:</b>${fathername}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone Number:</b>${phonenumber}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    if(resumedisplay){
        resumedisplay.innerHTML = dynamicResume;
    }else{
        console.error('This resume display element is missing.');
    }
});
