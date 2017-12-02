/* ======================================================================
                        SCRIPTS
========================================================================= */

// Hide the Notification on click
const notification = document.querySelector(".notification");
const notification_close = document.querySelector(".notification-close");
const close_hover = document.querySelector("#close-hover");
const notification_text = document.querySelector(".notification p");

// CLOSING THE NOTIFICATION
notification_close.addEventListener("click", function() {
  notification.style.display = "none";
});
notification_text.addEventListener("click", function() {
  notification.style.display = "none";
});
// HIGHLIGHTING THE NOTIFICATION CLOSE BUTTON ON HOVER
notification.addEventListener("mouseover", function() {
  close_hover.style.color = "white";
});
notification.addEventListener("mouseout", function() {
  close_hover.style.color = "black";
});

// // HIGHLIGHTING by blinking a few times
// $( ".notification" ).mouseover(function() {
//   $("#close-hover").toggle("highlight", {}, 3000);
// });









//
