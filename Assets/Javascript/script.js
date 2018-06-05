//function to navigate to other pages
function changeToSecondPage() {
    window.location.href = "secondpage.html";
};
//all the lock page stuff
$(".fa-lock").draggable({
    revert: true,
    start: function(event, ui) {
      $(".bubble").addClass("expand");
    },
    stop: function(event, ui) {
  
      if (ui.position.left < 30 || ui.position.left > 270 || ui.position.top < 30 || ui.position.top > 270) {
  
        // Unlock
    //     $(".fa-check").addClass("return");
    //     $(".fa-lock").addClass("away");
    //     $(".lock").addClass("good");
    //   }
  
    //   $(".bubble").removeClass("expand");
      }
      changeToSecondPage();
      }
    
  });
//carousel mover on page 3
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


  //misc

//   if (screen.width <= 699) {
//     $(".front").empty();
//     }

// if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
//     $(".front").empty();
//  }
