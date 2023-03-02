
// body>aside> h1 생성하기
let aside= document.createElement('aside');
document.body.appendChild(aside);
let h1 = document.createElement('h1');
aside.appendChild(h1)

//root>main>section>ul>li 생성하기
let main =document.createElement('main');
root.appendChild(main);
let section =document.createElement('section');
main.appendChild(section);
let ul =document.createElement('ul');
section.appendChild(ul);

//ul>li 5개 생성하기
for(let i=0; i<5; i ++){
let li =document.createElement('li');
li.textContent=`items-${i}`;
ul.appendChild(li);}

let lis = document.getElementsByTagName('li');
//test
console.dir(lis);
console.dir(ul.children);
console.dir(ul);
console.dir(ul.childNodes);

//-----궁금한 것-----
// ul>li를 5개 만들고 그 li들을 lis 라고 선언했습니다.
//lis들의 스타일이 적용이 안돼서  console.dir(lis) 찾아봤는데 htmlCollection(5)[li,li,li,li,li]라고 나왔습니다.
//배열인 것 같아서 console.log(lis)[0];찍어봤는데 왜 안나오는지 이 부분이 가장 헷갈립니다!


//section2>ul2
let section2 =document.createElement('section');
main.appendChild(section2);
let ul2 =document.createElement('ul');
section2.appendChild(ul2);

//속성바꾸기
aside.setAttribute('id',"move-btn");
section.setAttribute('id',"left-sect");
section2.setAttribute('id',"right-sect");
//텍스트 넣기
h1.textContent='move!';

//스타일 함수
function styleMaker(name,width,height,backgroundcolor){
    name.style.width=width;
    name.style.height=height;
    name.style.backgroundColor=backgroundcolor;
}

styleMaker(aside,'200px','200px','#fff');
styleMaker(root,'100vw','100vh','cadetblue');
styleMaker(main,'500px','500px','');
styleMaker(section,'200px','450px','');
styleMaker(section2,'200px','450px','');



//
aside.style.cssText='width: 200px;height: 200px;background-color: #fff;border-radius : 50%;position: fixed; bottom: 10px; left: 50vw; transform: translate(-50%, 0);'
document.body.style.overflowX='hidden';
ul.style.listStyleType='none';
//lis.style.cssText='width: 100%;height: 50px; background-color: #fff; border: 1px solid black; '
//ul.children.style.cssText='width: 100%;height: 50px; background-color: #fff; border: 1px solid black; ';
//ul.childNodes.style.cssText='width: 100%;height: 50px; background-color: #fff; border: 1px solid black; ';
//--x 안됨 ㅠ_ㅠ


//display함수
function displayMaker(Name){
    Name.style.display='flex';
    Name.style.justifyContent='center';
    Name.style.alignItems='center';
}

displayMaker(aside);
displayMaker(root);
displayMaker(main);
displayMaker(section);
displayMaker(section2);

//border함수
function borderMaker(Name,color){
    Name.style.border='1px';
    Name.style.border='solid';
    Name.style.borderColor=color;
    
}
borderMaker(section,'black');
borderMaker(section2,'blue');
borderMaker(ul,'black');
borderMaker(root,'black');
borderMaker(main,'black');

//흑흑흑흑흑
//흑흑흑흑
//흑흑흑
//흑흑
//흑























