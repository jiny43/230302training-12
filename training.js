//element 생성 함수
function elementMaker(tagName,target) {
    const element = document.createElement(tagName);
    target.appendChild(element);
    }

const body = document.body;
    elementMaker('aside', document.body);
    elementMaker('div', document.body);
    body.children[1].setAttribute('id','move-btn');
    body.children[2].setAttribute('id','root');
//aside root 생성

    elementMaker('h1',body.children[1]);  
    elementMaker('main',body.children[2]);
const root = document.getElementById('root');
    console.dir(root);
    elementMaker('section',root.children[0]);
    elementMaker('section',root.children[0]);
    root.children[0].children[0].setAttribute('id','left-sect');
    root.children[0].children[1].setAttribute('id','right-sect');
    const section = document.getElementById('left-sect');
    const Rsection = document.getElementById('right-sect');
    elementMaker('ul',section);
    elementMaker('ul',Rsection);
//aside>h1 생성
//div>main>section>ul 생성

for (let i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.textContent = `items-${i}`;
    section.children[0].appendChild(li); 
    styleMaker(li,'100%','50px','white');
    borderMaker(li,'black');
}
//ul>li생성

//------------element 만들기 끝 ------------

body.children[1].textContent='move!';
body.children[1].style.cssText='border-radius : 50%;position: fixed; bottom: 10px; left: 50vw; transform: translate(-50%, 0);'
document.body.style.overflowX='hidden';
section.children[0].style.listStyleType='none';

//스타일 함수
function styleMaker(name,width,height,backgroundcolor){
    name.style.width=width;
    name.style.height=height;
    name.style.backgroundColor=backgroundcolor;
}
styleMaker(body.children[1],'200px','200px','#fff');
styleMaker(root,'100vw','100vh','cadetblue');
styleMaker(root.children[0],'500px','500px','');
styleMaker(section,'200px','450px','');
styleMaker(Rsection,'200px','450px','');
styleMaker(Rsection,'200px','450px','');

//display함수
function displayMaker(Name){
    Name.style.display='flex';
    Name.style.justifyContent='center';
    Name.style.alignItems='center';
}

displayMaker(body.children[1]);
displayMaker(root);
displayMaker(root.children[0]);
displayMaker(section);

//border함수
function borderMaker(Name,color){
    Name.style.border='1px';
    Name.style.border='solid';
    Name.style.borderColor=color;
    
}
borderMaker(section,'black');
borderMaker(Rsection,'blue');
borderMaker(root.children[0],'black');
borderMaker(body.children[2],'black');























