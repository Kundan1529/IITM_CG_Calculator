// select element by using getElementById
const cont = document.getElementById("mainContainer");
let selectelement = document.getElementById("selectoption");
let courses = document.querySelectorAll(".visible");
let textBox = document.getElementById("course");
let extend = document.getElementById("gpa1");
//let completeCredit = document.getElementsByClassName("nom");

console.dir(courses);

var originalcontent = document.getElementById("gpa1").innerHTML;
var htmlContent = `
    <label for="course" class="nom">Completed Credit:</label>
    <br>
    <input type="number" id="course" class="number" name="course">
`;

var htmlContent1 = `
    <label for="course" class="nom">Current CGPA:</label>
    <br>
    <input type="number" id="course" class="number" name="course">
`;

// add event listener to select element
function handleSelectOption() {
  //console.log(event)
  let selectedValue = selectelement.value;
  if (selectedValue == "CGPA") {

    if (parseInt(textBox.value) >= 0) {
      console.log(textBox.value)
      console.log("event is fired for cgpa")
      extend.innerHTML = originalcontent

      for (let i = 1; i <= parseInt(textBox.value); i++) {
        var htmlContent3 = `
      <label for="course${i}" class="nom">Credit for Course ${i}:</label>
      <br>
      <input type="number" id="course${i}" class="number" name="course"> 
      <label for="course${i}_grade" class="nom">Grade Obtained</label>
          <br>
          <select id="course${i}_grade" class="sect">
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
         `
        extend.innerHTML += htmlContent3;


      }
      extend.innerHTML = originalcontent
      extend.innerHTML += htmlContent;
      extend.innerHTML += htmlContent1;

    }
  }
  else if (selectedValue == "GPA") {
    console.log("event is fired for gpa")

    if (parseInt(textBox.value) >= 0) {
      extend.innerHTML = originalcontent
      console.log("It works for gpa")
      for (let i = 1; i <= parseInt(textBox.value); i++) {
        var htmlContent3 = `
        <label for="course${i}" class="nom">Cretid for Course ${i}:</label>
        <br>
        <input type="number" id="course${i}" class="number" name="course"> 
        <label for="course${i}_grade" class="nom">Grade Obtained</label>
            <br>
            <select id="course${i}_grade" class="sect">
              <option>S</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
            </select>
           `
        extend.innerHTML += htmlContent3;


      }
      extend.innerHTML += `
            <label for="course_grade" class="nom">Current GPA:</label>
            <br>
            <input type="number" id="course_grade" class="number" name="course">
            
           `;
    }
  }
  else {
    extend.innerHTML = originalcontent;
  }

}
selectelement.addEventListener("change", handleSelectOption);
//textBox.addEventListener("input", handleSelectOption)
textBox.addEventListener("change", function(event) {
  console.log("textBox value changed:", event.target.value);
  handleSelectOption(event);
});
