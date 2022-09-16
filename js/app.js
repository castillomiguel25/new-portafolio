// header
window.addEventListener("scroll", function () {

  let header = document.getElementById('header1')
  let position = header.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;


  if (position < pantalla) {
    header.style.background = 'rgba(32,35,41,.8)'
    header.style.height = '100px'
  }

});



// lenguajess

$(".dropdown img.flag").addClass("flagvisibility");
$(".dropdown dt a").click(function () {
  $(".dropdown dd ul").toggle();
});

$(".dropdown dd ul li a").click(function () {
  var text = $(this).html();
  $(".dropdown dt a span").html(text);
  $(".dropdown dd ul").hide();
  $("#result").html("Selected value is: " + getSelectedValue("sample"));
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown"))
    $(".dropdown dd ul").hide();
});

$(".dropdown img.flag").toggleClass("flagvisibility");


// colorr

window.addEventListener("scroll", function () {

  let anima = document.getElementById('animations')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;

  setTimeout(function () {
    if (position < pantalla) {
      anima.style.color = 'rgba(32,35,41,.8)'
    } else {
      {
        anima.style.color = 'white'
      }
    }
  }, 500)

});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('anima')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;

  setTimeout(function () {
    if (position < pantalla) {
      anima.style.color = 'rgba(32,35,41,.8)'
    } else {
      {
        anima.style.color = 'white'
      }
    }
  }, 500)

});


window.addEventListener("scroll", function () {

  let anima = document.getElementById('anim')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;

  setTimeout(function () {
    if (position < pantalla) {
      anima.style.color = 'rgba(32,35,41,.8)'
    } else {
      {
        anima.style.color = 'white'
      }
    }
  }, 500)
});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('anim')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;

  setTimeout(function () {
    if (position < pantalla) {
      anima.style.color = 'rgba(32,35,41,.8)'
    } else {
      {
        anima.style.color = 'white'
      }
    }
  }, 500)
});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('ani')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;

  setTimeout(function () {
    if (position < pantalla) {
      anima.style.color = 'rgba(32,35,41,.8)'
    } else {
      {
        anima.style.color = 'white'
      }
    }
  }, 500)
});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('an')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;
  if (position < pantalla) {
    anima.style.color = 'rgba(32,35,41,.8)'
  } else {
    {
      anima.style.color = 'white'
    }
  }
});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('a')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;
  if (position < pantalla) {
    anima.style.color = 'rgba(32,35,41,.8)'
  } else {
    {
      anima.style.color = 'white'
    }
  }
});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('1')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;
  if (position < pantalla) {
    anima.style.color = 'rgba(32,35,41,.8)'
  } else {
    {
      anima.style.color = 'white'
    }
  }
});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('2')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;
  if (position < pantalla) {
    anima.style.color = 'rgba(32,35,41,.8)'
  } else {
    {
      anima.style.color = 'white'
    }
  }
});

window.addEventListener("scroll", function () {

  let anima = document.getElementById('3')
  let position = anima.getBoundingClientRect().top
  console.log(position);
  let pantalla = window.innerHeight / 3.5;
  if (position < pantalla) {
    anima.style.color = 'rgba(32,35,41,.8)'
  } else {
    {
      anima.style.color = 'white'
    }
  }
});


// function mostrar () {
//   document.getElementById('caja').style.opacity = '1';
// }
// function ocultar () {
//   document.getElementById('caja').style.opacity = '0';
// }


