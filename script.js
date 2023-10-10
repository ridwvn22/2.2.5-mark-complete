$(document).ready(function(){
  console.log("ready"); 
  $("td:nth-child(3)").each (function(){
        if($(this).text() == "Complete"){
            $(this).css("background-color", "lightgreen");
        }else{$(this).css("background-color", "red");}
            
        });
  });
    
