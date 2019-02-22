$(".main-rotation").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
});
$(".cat-rotation").slick({
  infinite: true,
  centerMode: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        arrows: false
      }
    }
  ]
});

// Searchbar
$(document).ready(function() {
  $("#searchbar-icon").click(function() {
    $("#searchbar-input").animate({ width: "toggle" });
    $("#searchbar-icon").toggle();
    $("#searchbar-cross").toggle(500);
  });

  $("#searchbar-cross").click(function() {
    $("#searchbar-input").animate({ width: "toggle" });
    $("#searchbar-cross").toggle();
    $("#searchbar-icon").toggle(500);
  });
});

function openNav() {
  console.log(window.innerWidth);
  if (window.innerWidth > 900) {
    document.getElementById("sideNavMenu").style.width = "25vw";
    document.getElementById("sideNavMenu").style.borderLeft =
      "2px solid #ad0000";
  } else if (window.innerWidth < 450) {
    document.getElementById("sideNavMenu").style.width = "100vw";
  } else {
    document.getElementById("sideNavMenu").style.width = "40vw";
    document.getElementById("sideNavMenu").style.borderLeft =
      "2px solid #ad0000";
  }
}

function closeNav() {
  document.getElementById("sideNavMenu").style.width = "0";
  document.getElementById("sideNavMenu").style.borderLeft = "none";
}
