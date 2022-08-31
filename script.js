function OpenModal(){
 const state = document.getElementById("stateBtn").getAttribute("state");

 if (state == "false") {
     document.getElementById("smModal").style.display = "block";
     document.getElementById("modal-state").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" height="24px">
     <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" />
   </svg>
   `
   document.getElementById("stateBtn").setAttribute("state","true")
 }

 else {
    document.getElementById("smModal").style.display = "none";
    document.getElementById("modal-state").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="24px">
    <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
  </svg> 
  `
  document.getElementById("stateBtn").setAttribute("state","false")
 }

}