// import _ from 'lodash';

//  function component() {
//    const element = document.createElement('div');

//   // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    return element;
//  }

//  document.body.appendChild(component());

const elementDiv1 = document.getElementById("content");

function componentH1() {
 const headline = document.createElement("h1");
 headline.textContent = "Mike's Cozy Restaurant";
 return headline;
 }

 elementDiv1.appendChild(componentH1());
 console.log(componentH1());
 
 function componentDiv1() { 
  const textNodeForDiv1 = document.createTextNode("Mike invites you to enjoy a healthy meal with loved ones at his restaurant. All colors, ages, genders are welcome. Tasty food, healthy food, and a comfortable, safe space to relax.");
  return elementDiv1.appendChild(textNodeForDiv1);
 }
 elementDiv1.appendChild(componentDiv1());

console.log ("Hello, earthling")