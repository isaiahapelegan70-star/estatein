preshow = function() {
  let errorP = document.getElementById("studentErr");
  errorP.style.display = 'none';

  let errorGrade = document.getElementById("gradeErr");
  errorGrade.style.display = 'none';
  errorGrade.textContent = "Hello";
}

preshow();


handleGrade = function() {
  let StudentName = document.getElementById("studentName").value;
  let grade = document.getElementById("studentGrade").value;
  let gradeValue = parseInt(grade);
  if (gradeValue > 75) {
    document.getElementById("gradeResult").textContent = "A +"
    document.getElementById("comment").textContent = "You did Excellent!"
  
} else if (gradeValue > 65) {
  document.getElementById("gradeResult").textContent = "B +"
  document.getElementById("comment").textContent = "You did very good!"

}else if (gradeValue > 55) {
  document.getElementById("gradeResult").textContent = "C +"
  document.getElementById("comment").textContent = "You did average!"

}else if (gradeValue < 45) {
  document.getElementById("gradeResult").textContent = "D +"
  document.getElementById("comment").textContent = "You pass!"
  
}
  
}
