import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());

 function component2() {
  const elementH1 = document.createElement('h1');
  const textNodeContentForH1 = "Mike's Cozy Restaurant";
  const textNodeForH1 = document.createTextNode(textNodeContentForH1);

  return elementH1.appendChild(textNodeForH1);

 }
 
 const div1 = document.querySelector("div");

 div1.appendChild(component2());


 console.log ("Hello, earthling")