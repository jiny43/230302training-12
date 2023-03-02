
// body>aside> h1
let aside= document.createElement('aside');
document.body.appendChild(aside);
let h1 = document.createElement('h1');
aside.appendChild(h1)
//root>main>section>ul>li
let main =document.createElement('main');
root.appendChild(main);
let section =document.createElement('section');
main.appendChild(section);
let ul =document.createElement('ul');
section.appendChild(ul);
for(let i=0; i<5; i ++){
let li =document.createElement('li');
li.textContent=`items-${i}`;
ul.appendChild(li);}
//section2>ul2
let section2 =document.createElement('section');
main.appendChild(section2);
let ul2 =document.createElement('ul');
section2.appendChild(ul2);

aside.setAttribute('id',"move-btn");
section.setAttribute('id',"left-sect");
section2.setAttribute('id',"right-sect");














