import { pageLoad } from "./page-load";
import { menu } from "./menu";

const contact = () => {
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
    return tabDiv3;
    }
    elementDiv1.appendChild(componentTabDiv3());
   
    
    function componentH1() {
     const headline = document.createElement("h1");
     headline.textContent = "Contact Information";
     return headline;
    }
    elementDiv1.appendChild(componentH1());
    
    function componentH2() {
     const headline = document.createElement("h2");
     headline.textContent = "Phone Number:";
     return headline;
    }
    elementDiv1.appendChild(componentH2());

    function componentDiv1() { 
     const textNodeForDiv1 = document.createTextNode("555-555-5555");
     return elementDiv1.appendChild(textNodeForDiv1);
    }
    elementDiv1.appendChild(componentDiv1());

    function componentH22() {
     const headline = document.createElement("h2");
     headline.textContent = "Email Address:";
     return headline;
    }
    elementDiv1.appendChild(componentH22());
   
    function componentDiv12() { 
     const textNodeForDiv1 = document.createTextNode("mikescozyrestaurant@restauration.net");
     return elementDiv1.appendChild(textNodeForDiv1);
    }
    elementDiv1.appendChild(componentDiv12());
    
    function componentH23() {
     const headline = document.createElement("h2");
     headline.textContent = "Address:";
    return headline;
    }
    elementDiv1.appendChild(componentH23());
      
    function componentDiv13() { 
     const textNodeForDiv1 = document.createTextNode("123 Comfort Drive, Comfortawa, Canada");
     return elementDiv1.appendChild(textNodeForDiv1);
    }
    elementDiv1.appendChild(componentDiv13());
    
    function componentH24() {
        const headline = document.createElement("h2");
        headline.textContent = "Acknowledgement of History and Territory";
       return headline;
       }
       elementDiv1.appendChild(componentH24());
         
       function componentDiv14() { 
        const textNodeForDiv1 = document.createTextNode("We acknowledge that our restaurant provides restauration on unceded indigenous lands. We hereby express our respect and gratitude to the people who have been maintaining and continue to maintain the health, vitality, and sustainability of local ecosystems.");
        return elementDiv1.appendChild(textNodeForDiv1);
       }
       elementDiv1.appendChild(componentDiv14());
   
   
    function componentImg() {
     const url = "https://clipartspub.com/images/pokemon-clipart-charmander-7.png";
     const image = document.createElement("img");
     image.src = url;
     return image;
    }
    elementDiv1.appendChild(componentImg());
    
    console.log ("Hello, earthling")
    };
    export { contact };