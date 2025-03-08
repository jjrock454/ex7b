function checkSID() {
    let sid = (document.getElementById("sid").value).trim();
    if (sid.length === 10 && /^\d{10}$/.test(sid)) {
      return true;
    } else {
      return false;
    }
}
 
  function checkCandiNo() {
    let candi = (document.getElementById("candi").value).trim();
    if (/^\d+$/.test(candi) && parseInt(candi, 10) > 0) {
      return true;
    } else {
      return false;
    }
}
 
  function validateForm(){
    if(!checkSID()){
      alert("Invalid value for Student ID! It must be a 10-digit number.");
      document.getElementById("sid").focus();
      return false;
} else {
    if(!checkCandiNo()){
        alert("Invalid value for Candidate No! It must be a positive number.");
        document.getElementById("candi").focus();
        return false;
    } else {
        alert("Your input data passes validation!!");
        return true;
    }
}
}