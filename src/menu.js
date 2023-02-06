const menu = () => {
    const elementDiv1 = document.getElementById("content");
    
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