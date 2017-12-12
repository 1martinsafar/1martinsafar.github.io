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

/*

<footer id="home-footer">
  <h2>Gmail</h2>
  <span class="gmail">1martinsafar@gmail.com</span>
  <nav class="navbar justify-content-center navbar-dark">
    <!-- GitHub SVG -->
    <a href="https://github.com/1martinsafar" class="social github" target="_blank">GitHub</a>
    <!-- LinkedIn SVG -->
    <a href="https://www.linkedin.com/" class="social linkedin" target="_blank">LinkedIn</a>
    <!-- Twitter SVG -->
    <a href="https://twitter.com/?lang=en" class="social twitter" target="_blank">Twitter</a>
  </nav>
</footer>

*/





//
