const btn = document.getElementById("btn");

let totalCredits = 0;
let totalGradePoints = 0;

btn.addEventListener("click", function addGrade() {
    const gradeInput = document.getElementById('grade');
    const creditsInput = document.getElementById('credits');
    let inputval = document.querySelector("#sub");

    const grade = parseFloat(gradeInput.value);
    const credits = parseFloat(creditsInput.value);

    if (isNaN(grade) || isNaN(credits) || grade < 0 || credits <= 0) {
        alert("Please enter valid grade and credits.");
        return;
    }

    totalCredits += credits;
    totalGradePoints += (grade * credits);

    updateResults();
    
    gradeInput.value = '';
    creditsInput.value = '';
    inputval.value = "";
} )


function updateResults() {
    const gpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById('totalCredits').textContent = totalCredits;
    document.getElementById('gpa').textContent = gpa;
}


const icon = document.querySelector(".menu-icon");
icon.addEventListener("click", function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
});

let date = new Date().getFullYear();
const foot = document.querySelector(".footer");
// foot.innerHTML =  "<p>Copyright &copy; <span>date</span>  CRUDOTECH | All Rights Reserved.</p>";

