import { pageLoad } from "./page-load";
import { contact } from "./contact";

const menu = () => {
    const elementDiv1 = document.getElementById("content");
    
    function componentTabDiv1() {
     const tabDiv1 = document.createElement("div");
     tabDiv1.textContent = "Home";
     tabDiv1.addEventListener("click", () => {
      tabDiv1.style.color = "red";
      while (elementDiv1.hasChildNodes()) {
        elementDiv1.removeChild(elementDiv1.firstChild);
      };
      pageLoad();
     });
    return tabDiv1;
    }
    elementDiv1.appendChild(componentTabDiv1());
       
    function componentTabDiv2() {
     const tabDiv2 = document.createElement("div");
     tabDiv2.textContent = "Menu";
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
     headline.textContent = "Menu";
     return headline;
    }
    elementDiv1.appendChild(componentH1());
    
    function componentH2() {
     const headline = document.createElement("h2");
     headline.textContent = "Soup of Noodles, Muscles, and Vegetables";
     return headline;
    }
    elementDiv1.appendChild(componentH2());
   
    function componentDiv1() { 
     const textNodeForDiv1 = document.createTextNode("Heartwarming chicken broth with tasty noodles, hearty chicken muscles chunks and vegetables of a wide array of colors and flavors");
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
    export { menu };