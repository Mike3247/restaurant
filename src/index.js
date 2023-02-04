// import _ from 'lodash';

//  function component() {
//    const element = document.createElement('div');

//   // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    return element;
//  }

//  document.body.appendChild(component());

 
function componentH1() {
  const elementH1 = document.createElement('h1');
  const textNodeContentForH1 = "Mike's Cozy Restaurant";
  const textNodeForH1 = document.createTextNode(textNodeContentForH1);

  return elementH1.appendChild(textNodeForH1);

 }
 
 
 console.log(componentH1());
 document.body.appendChild(componentH1());

 const elementDiv1 = document.getElementById("content");
 
 function componentDiv1() {
   
  const textNodeForDiv1 = document.createTextNode("Mike invites you to enjoy a healthy meal with loved ones at his restaurant. All colors, ages, genders are welcome. Tasty food, healthy food, and a comfortable, safe space to relax.");
   
   return elementDiv1.appendChild(textNodeForDiv1);
 }
 

 elementDiv1.appendChild(componentDiv1());


 console.log ("Hello, earthling")