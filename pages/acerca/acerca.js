// export function logic_main() {
//   const hiddenElements = document.querySelectorAll(".hidden");
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       // console.log(entry);
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       } else {
//         entry.target.classList.remove("show");
//       }
//     });
//   });

//   hiddenElements.forEach((el) => observer.observe(el));
// }

export async function acerca()
{
   let cardAcerca  = await import ("/components/cardAcerca/cardAcerca.js");
   let cardAcercaImg  = await import ("/components/cardAcercaImg/cardAcercaImg.js");
   return [cardAcerca,cardAcercaImg];
}