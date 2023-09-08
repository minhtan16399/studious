document.getElementById("switchButton").onclick = function () { document.getElementById("myBody").classList.toggle("dark");
};

$(document).ready(function () {
    $(".popup-with-zoom-anim").magnificPopup({
      type: "inline",
  
      fixedContentPos: false,
      fixedBgPos: true,
  
      overflowY: "auto",
  
      closeBtnInside: true,
      preloader: false,
  
      midClick: true,
      removalDelay: 300,
      mainClass: "my-mfp-zoom-in"
    });
  });
  