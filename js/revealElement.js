export default function revealElement(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-element");
      }
    });
  });

  elements.forEach((ele) => observer.observe(ele));
}
