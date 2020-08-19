//Following code handles dynamic icon display
window.onload = function () {
  var faviconIndex = 0;
  var favicon = document.getElementById("favicon");

  setInterval(function () {
    favicon.href = "icons/" + faviconIndex + ".png";
    faviconIndex++;
    faviconIndex %= 2;
  }, 5000);
};

// When the user scrolls down from the top of the document, resize the logo
window.onscroll = function () {
  shrinkLogo();
};

//Following will shrink logo when scrolling

function shrinkLogo() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header-logo").style.height = "100px";
  } else {
    document.getElementById("header-logo").style.height = "175px";
  }
}
//adjust_textarea works with the form to increase input size as needed
function adjust_textarea(h) {
  h.style.height = "20px";
  h.style.height = h.scrollHeight + "px";
}

//Following code switches display when menu item is clicked
document.querySelector("#button0").addEventListener("click", showOption0);

function showOption0() {
  console.log("option 0 was clicked");
  document.querySelector("#option0").classList.add("show-option");
  document.querySelector("#option1").classList.remove("show-option");
  document.querySelector("#option2").classList.remove("show-option");
  document.querySelector("#option3").classList.remove("show-option");
}

document.querySelector("#button1").addEventListener("click", showOption1);

function showOption1() {
  console.log("option 1 was clicked");
  document.querySelector("#option0").classList.remove("show-option");
  document.querySelector("#option1").classList.add("show-option");
  document.querySelector("#option2").classList.remove("show-option");
  document.querySelector("#option3").classList.remove("show-option");
}
document.querySelector("#button2").addEventListener("click", showOption2);

function showOption2() {
  console.log("option 2 was clicked");
  document.querySelector("#option0").classList.remove("show-option");
  document.querySelector("#option1").classList.remove("show-option");
  document.querySelector("#option2").classList.add("show-option");
  document.querySelector("#option3").classList.remove("show-option");
}
document.querySelector("#button3").addEventListener("click", showOption3);

function showOption3() {
  console.log("option 3 was clicked");
  document.querySelector("#option0").classList.remove("show-option");
  document.querySelector("#option1").classList.remove("show-option");
  document.querySelector("#option2").classList.remove("show-option");
  document.querySelector("#option3").classList.add("show-option");
}

// duplicate above code for aside menu - not very elegant but I'm still learning...
document.querySelector("#button00").addEventListener("click", showOption0);

function showOption0() {
  console.log("option 00 was clicked");
  document.querySelector(".menu").classList.remove("menu-open");
  document.querySelector("#option0").classList.add("show-option");
  document.querySelector("#option1").classList.remove("show-option");
  document.querySelector("#option2").classList.remove("show-option");
  document.querySelector("#option3").classList.remove("show-option");
}

document.querySelector("#button01").addEventListener("click", showOption1);

function showOption1() {
  console.log("option 01 was clicked");
  document.querySelector(".menu").classList.remove("menu-open");
  document.querySelector("#option0").classList.remove("show-option");
  document.querySelector("#option1").classList.add("show-option");
  document.querySelector("#option2").classList.remove("show-option");
  document.querySelector("#option3").classList.remove("show-option");
}
document.querySelector("#button02").addEventListener("click", showOption2);

function showOption2() {
  console.log("option 02 was clicked");
  document.querySelector(".menu").classList.remove("menu-open");
  document.querySelector("#option0").classList.remove("show-option");
  document.querySelector("#option1").classList.remove("show-option");
  document.querySelector("#option2").classList.add("show-option");
  document.querySelector("#option3").classList.remove("show-option");
}
document.querySelector("#button03").addEventListener("click", showOption3);

function showOption3() {
  console.log("option 03 was clicked");
  document.querySelector(".menu").classList.remove("menu-open");
  document.querySelector("#option0").classList.remove("show-option");
  document.querySelector("#option1").classList.remove("show-option");
  document.querySelector("#option2").classList.remove("show-option");
  document.querySelector("#option3").classList.add("show-option");
}
/**
 * 1- Detect someone clicking the hamburger menu icon (addEventListener)
 * 2- Add a class to the menu (.menu-open)
 * 3- Detect when someone clicks the 'close-menu' ID
 * 4- Remove the .menu-open class
 *
 * 'toggling a class'
 */
const menuController = document.getElementById("menu-hamburger");
menuController.addEventListener("click", function () {
  // setAttribute way
  // Warning: This over-writes previous classes. Use add/remove/toggle to impact just one class
  //document.querySelector('.menu').setAttribute('class', 'menu menu-open');

  // classList way
  document.querySelector(".menu").classList.toggle("menu-open");
});

document.getElementById("menu-close").addEventListener("click", function () {
  console.log("close anonymous function was clicked");
  document.querySelector(".menu").classList.remove("menu-open");
});
