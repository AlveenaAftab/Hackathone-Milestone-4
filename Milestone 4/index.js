var Form = document.getElementById("editable-resume");
var cvShowcaseElement = document.getElementById("Curriculum-Vitae");
Form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var contact = document.getElementById("contact").value;
    var location = document.getElementById("location").value;
    var skill_one = document.getElementById("skill_one").value;
    var skill_two = document.getElementById("skill_two").value;
    var skill_three = document.getElementById("skill_three").value;
    var skill_four = document.getElementById("skill_four").value;
    var skill_five = document.getElementById("skill_five").value;
    var experience = document.getElementById("experience").value;
    var profileHTML = "\n    <img src=\"image/p-img.jpg\" alt=\"profile-img\" class=\"profile-img\">\n    <h2><b>Elite Resume </b></h2>\n    <br/>\n    <h3>personal infromation</h3>\n    <p>Name: ".concat(name, "</p>\n    <p>Email: ").concat(email, "</p>\n    <p>Contact: ").concat(contact, "</p>\n    <p>Location :").concat(location, "</p>\n     \n\n    <br/>\n    <h3>Your Education</h3>\n    <p>Education: ").concat(education, "</p>\n\n\n\n    <br/>\n    <h3>Experience</h3>\n    <p>Experiences: ").concat(experience, "</p>\n\n\n    <br/>\n    <h3>Skills</h3>\n    <p>. ").concat(skill_one, "</p>\n    <p>. ").concat(skill_two, "</p>\n    <p>. ").concat(skill_three, "</p>\n    <p>. ").concat(skill_four, "</p>\n    <p>. ").concat(skill_five, "</p>\n\n\n\n\n    ");
    if (cvShowcaseElement) {
        cvShowcaseElement.innerHTML = profileHTML;
    }
});
