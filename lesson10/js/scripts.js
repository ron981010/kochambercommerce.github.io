function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");

}

function Settoday(){
    var today = new Date() ;
   // var weekday = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ] ;
   var weekday = today.getDate(); 
    if(weekday== "1"){
        document.getElementById("Fri").style.display="block";
    }else{
        document.getElementById("others").style.display="block";
    }
     
  }
