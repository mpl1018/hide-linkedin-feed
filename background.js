(function () {
  var url = window.location.href.toString().trim();
  console.log("url: " + url);
  if (url.indexOf("linkedin.com/feed") == -1) {
    return;
  }

  var intervalRunning = false;
  var interval = setInterval(function () {
    if (intervalRunning == false) {
      intervalRunning = true;

      var els = document.getElementsByClassName(
        "scaffold-finite-scroll__content"
      );

      if (els)
        if (els[0])
          for (var a = 0; a < els.length; a++) {
            if (els[a]) {
              els[a].style.display = "none";

              break;
            }
          }

      intervalRunning = false;
    }
  }, 100);
})();
