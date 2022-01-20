export{}

function myTest(name: string):boolean {

    if(name.length > 5) {
        return true;
    }
    else {
        return false;
    }
}

let words = myTest("Welcome to Typescript");
console.log(words);

let words1 = myTest("hi");
console.log(words1);