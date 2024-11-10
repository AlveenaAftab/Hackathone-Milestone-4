const Form = document.getElementById("editable-resume")as HTMLFormElement;
const cvShowcaseElement = document.getElementById("Curriculum-Vitae")as HTMLDivElement;

Form.addEventListener("submit",(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById("name")as HTMLInputElement).value
    const email = (document.getElementById("email")as HTMLInputElement).value
    const education = (document.getElementById("education")as HTMLInputElement).value
    const contact = (document.getElementById("contact")as HTMLInputElement).value
    const location = (document.getElementById("location")as HTMLInputElement).value
    const skill_one = (document.getElementById("skill_one")as HTMLInputElement).value
    const skill_two = (document.getElementById("skill_two")as HTMLInputElement).value
    const skill_three = (document.getElementById("skill_three")as HTMLInputElement).value
    const skill_four = (document.getElementById("skill_four")as HTMLInputElement).value
    const skill_five = (document.getElementById("skill_five")as HTMLInputElement).value
    const experience = (document.getElementById("experience")as HTMLInputElement).value




    const profileHTML = `
    <img src="image/p-img.jpg" alt="profile-img" class="profile-img">
    <h2><b>Elite Resume </b></h2>
    <br/>
    <h3>personal infromation</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Contact: ${contact}</p>
    <p>Location :${location}</p>
     

    <br/>
    <h3>Your Education</h3>
    <p>Education: ${education}</p>



    <br/>
    <h3>Experience</h3>
    <p>Experiences: ${experience}</p>


    <br/>
    <h3>Skills</h3>
    <p>. ${skill_one}</p>
    <p>. ${skill_two}</p>
    <p>. ${skill_three}</p>
    <p>. ${skill_four}</p>
    <p>. ${skill_five}</p>




    `;

    if(cvShowcaseElement){
        cvShowcaseElement.innerHTML = profileHTML
    }



})