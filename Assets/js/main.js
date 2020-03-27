var myVar;
            
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

   // Get the modal
   var modal = document.getElementById('id01');
        
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }


   $(document).ready(function() {
    $('.menu-trigger').click(function() {
      $('ul li').slideToggle(500);
    });//end slide toggle
    
    $(window).resize(function() {		
          if (  $(window).width() > 500 ) {			
              $('ul li').removeAttr('style');
           }
      });//end resize
  });//end ready

  function navme() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }