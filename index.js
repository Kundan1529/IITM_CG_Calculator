const selectBox = document.getElementById("selectoption");
const num_course = document.getElementById("gpa1");
const textBox = document.getElementById("course");
const button = document.getElementById("calculate")
console.log("the index js file is running ");

let originalContent = num_course.innerHTML;
console.log(originalContent);




let selectOption = (e)=> {
  let option = selectBox.value ;
  console.log(option);
  
  return option 
}


let selectCourses = (num) => {
  console.log("select courses work ");
   let option = selectOption();

  if (option == 'GPA' && num!=""){
    num_course.innerHTML = originalContent;
  for (let i = 1; i <= num; i++) {
    // console.log(i)
    let num_courses = `
    <div>
    <label for="course${i}" class="nom">Credit for Course ${i}:</label><br>
      <input type="number" id="course${i}" class="number" name="course${i} min = '3' max = '12'>
      <label for="course${i}_grade" class="container">Grade Obtained:</label>
      <select id="course${i}_grade" class="sect">
        <option>S</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
      </select>
    </div>`;
    // console.log("At the end of the for loop ")

    num_course.innerHTML += num_courses;
  }
  } else if(option == 'CGPA' && num != ""){
    num_course.innerHTML = originalContent;
    for (let i = 1; i <= num; i++) {
      // console.log(i)
      let num_courses = `
      <div>
      <label for="course${i}" class="nom">Credit for Course ${i}:</label><br>
        <input type="number" id="course${i}" class="number" name="course${i}">
        <label for="course${i}_grade" class="container">Grade Obtained:</label>
        <select id="course${i}_grade" class="sect">
          <option>S</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
        </select>
      </div>`;
      // console.log("At the end of the for loop ")

      num_course.innerHTML += num_courses;
    }
       num_course.innerHTML += `<label for="currentCGPA" class="nom">Credit Obtained:</label><br>
    <input type="number" id="grade" class="number" name="currentCGPA" min = '0' max = '550'>
       <label for="currentCGPA" class="nom">Current CGPA:</label><br>
    <input type="number" id="currentCGPA" class="number" name="currentCGPA" min = '0' max = '10'>`;

    
       console.log("here also the line of code works ")  
  }
    else {
    num_course.innerHTML = originalContent;
    }
    
  
  console.log("select courses at the last works ");
}
let eventHandler = (e)=>{
  console.log(e.target.value);
  let textValue = textBox.value;
  selectOption()
  selectCourses(textValue);
}




selectBox.addEventListener("change",eventHandler);
textBox.addEventListener('change', eventHandler);
 


// Function to calculate CGPA
function CalculateGpa () {
  const gradepoints = {
    'S': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 5
  };
  let courses_value = textBox.value ;
  let totalCredit = 0 ;
  let totalGrade = 0 ;
  for(let i = 1 ; i <= courses_value ; i ++){
    let credit = parseInt(document.getElementById(`course${i}`).value);
    let grade = document.getElementById(`course${i}_grade`).value;
    let gradepoint = parseInt(gradepoints[grade]);
    console.log(grade)
    totalCredit += credit ;
    totalGrade += credit * gradepoint ;
  console.log(totalCredit);
  console.log(totalGrade);
  if(isNaN(credit) || !gradepoint) {
    alert("Please fill in all credit and grade fields.");
    return;
  }}
  if(selectBox.value == "GPA"){
  let gpa = totalGrade / totalCredit 
  let htmlcontent1 = `
  <div class = "container">The Calculated GPA is ${gpa.toFixed(2)}</div>`
  num_course.innerHTML += htmlcontent1;

  } else if (selectBox.value == "CGPA"){
    let gradeObtained = parseInt(document.getElementById("grade").value);
    let cg = parseFloat(document.getElementById("currentCGPA").value);
    totalCredit += gradeObtained;
    totalGrade += gradeObtained* cg;
    let cgpa = totalGrade/totalCredit;

    let htmlcontent2 = `
    <div class = "container">The Calculated GPA is ${cgpa.toFixed(2)}</div>`
    num_course.innerHTML += htmlcontent2;
  } else {
    alert("choose between gpa and cgpa");
  }
    
  }





button.addEventListener("click",function(e){
e.preventDefault();
console.log("button clicked ");
  
 CalculateGpa();

  
})
  
  
    
  

  
























