//lazy load images
function lazybackgroundimage() {
  const intersectionObserverOptions = {
    root: null,
    rootMargin: "300px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(
    onIntersection,
    intersectionObserverOptions
  );

  Array.from(document.getElementsByClassName("lazyload")).forEach((element) =>
    observer.observe(element)
  );

  function onIntersection(entries) {
    entries.forEach(({ target, intersectionRatio }) => {
      // Are we in viewport?
      if (intersectionRatio > 0) {
        const { style } = target.dataset;
        target.setAttribute("style", style);

        // Stop watching
        observer.unobserve(target);
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  lazybackgroundimage();
});
