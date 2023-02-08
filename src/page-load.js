import { menu } from "./menu";
import { contact } from "./contact";

const pageLoad = () => {
 const elementDiv1 = document.getElementById("content");

 function componentTabDiv1() {
  const tabDiv1 = document.createElement("div");
  tabDiv1.textContent = "Home";
  tabDiv1.addEventListener("click", () => {
   tabDiv1.style.color = "red";
  });
  return tabDiv1;
 }
 elementDiv1.appendChild(componentTabDiv1());

 function componentTabDiv2() {
    const tabDiv2 = document.createElement("div");
    tabDiv2.textContent = "Menu";
    tabDiv2.addEventListener("click", () => {
     tabDiv2.style.color = "red";
     while (elementDiv1.hasChildNodes()) {
      elementDiv1.removeChild(elementDiv1.firstChild);
     };
     menu();
   });
   return tabDiv2;
   }
   elementDiv1.appendChild(componentTabDiv2());

   function componentTabDiv3() {
    const tabDiv3 = document.createElement("div");
    tabDiv3.textContent = "Contact";
    tabDiv3.addEventListener("click", () => {
     tabDiv3.style.color = "red";
     while (elementDiv1.hasChildNodes()) {
      elementDiv1.removeChild(elementDiv1.firstChild);
      };
     contact();
    });
   return tabDiv3;
   }
   elementDiv1.appendChild(componentTabDiv3());

 function componentH1() {
  const headline = document.createElement("h1");
  headline.textContent = "Mike's Cozy Restaurant";
  return headline;
 }
 elementDiv1.appendChild(componentH1());
 
 function componentDiv1() { 
  const textNodeForDiv1 = document.createTextNode("Mike invites you to enjoy a healthy meal with loved ones at his restaurant. All colors, ages, genders are welcome. Tasty food, healthy food, and a comfortable, safe space to relax.");
  return elementDiv1.appendChild(textNodeForDiv1);
 }
 elementDiv1.appendChild(componentDiv1());

 function componentImg() {
  const url = "https://clipartspub.com/images/pokemon-clipart-charmander-7.png";
  const image = document.createElement("img");
  image.src = url;
  return image;
 }
 elementDiv1.appendChild(componentImg());

 console.log ("Hello, earthling")
};
export { pageLoad };