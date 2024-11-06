<<<<<<< HEAD
export function logic_main()
{
  const hiddenElements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
=======
if (window.acercaObserver) return;

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
>>>>>>> 7a90659 (argregano formulario para nuevos productos)
  });
  
  hiddenElements.forEach((el) => observer.observe(el));
}
