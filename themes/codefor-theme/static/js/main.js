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
        observer.unobserve(entry.target);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  lazybackgroundimage();

  const mobileNavButton = document.querySelector(".topnav button");
  const mobileNav = document.querySelector(".topnav ul");

  mobileNav.classList.add("hidden");

  mobileNavButton.addEventListener("click",  () => {
    mobileNav.classList.toggle("hidden")
    mobileNavButton.setAttribute("aria-expanded", !mobileNav.classList.contains("hidden").toString());
  })
});
