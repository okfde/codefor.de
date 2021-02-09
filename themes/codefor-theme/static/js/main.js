//lazy load images
function lazybackgroundimage() {
  var intersectionObserverOptions = {
    root: null,
    rootMargin: "300px",
    threshold: 1.0,
  };

  var observer = new IntersectionObserver(
    onIntersection,
    intersectionObserverOptions
  );

  document.querySelectorAll(".lazyload").forEach(function (element) {
    observer.observe(element)
  });

  function onIntersection(entries) {
    entries.forEach(function (entry) {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {
        var style = entry.target.dataset.style;
        entry.target.setAttribute("style", style);

        // Stop watching
        observer.unobserve(target);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  lazybackgroundimage();

  var mobileNavButton = document.getElementById("nav-toggler");
  var mobileNav = document.getElementById("navbarNav");
  mobileNavButton.addEventListener("click", function () {
    var isVisible = mobileNav.className.indexOf("show") !== -1;
    if (isVisible) {
      mobileNav.className = mobileNav.className.replace("show", "").trim();
    } else {
      mobileNav.className = mobileNav.className + " show";
    }
    mobileNavButton.setAttribute("aria-expanded", !isVisible);
  })
});
