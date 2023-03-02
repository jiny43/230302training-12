const styleExample = {
    color: "red",
    backgroundColor: "yellow",
    border : "1px solid black",
    padding: "10px",
    }

let getKeyString = [];
for (let key in styleExample) {
    getKeyString.push(key);
    }
console.log(getKeyString);
for(let i = 0; i < getKeyString.length; i++) {
    console.log(styleExample[getKeyString[i]]);
}


//객체의 키는 문자열이다.
let exampleKey = ["color", "background", "border"];
let exampleValue = ["red", "yello", "1px solid black"];

let obj = {};
for(let i = 0; i < exampleKey.length; i++) {
    obj[exampleKey[i]] = exampleValue[i];
}