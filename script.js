//  função  operador spread.

let a = [1,2,3];
let b = [4,5,6];

const numbers = (number1, number2) => {
const number = [...number1, ...number2]
return number
}
console.log(numbers(a ,b));

//  função  operador rest.

const names = (...name) => {
    const arr = []
 name.forEach(el => arr.push(el));
 return arr
}
console.log(names("pedro",6, true, ));

//forEach----------------------------------------------------------------

let arr = [2, 6, 9, 13, 15, 17, 19, 87]

const loop = (n) =>  {
let result = [];

n.forEach(el => {
   const multiplication =  el * 2
result.push(multiplication)
});
return result
}
console.log(loop(arr));

// MAP ----------------------------------------------------------------
const arr1 = [1, "lucas", true, false, 33, 61, "Maria", 'Pedro', 50];

const map = (n) => {

return n.map(el => typeof el); 


}
console.log(map(arr1));

//filter ----------------------------------------------------------------

const filter = (n) => {
    return n.filter(el => typeof el === 'string');
  };
console.log(filter(arr1));

//FIND ----------------------------------------------------------------

const find = (n) => {
    return n.find(el => typeof el === 'number' );
  };
console.log(find(arr1));

//REDUCE ----------------------------------------------------------------

const reduce = arr.reduce((a,b) => {
    return a + b;
}, 0    )
console.log(reduce);


//promisse e fetch----------------------------------------------------------------

async function getUser (id){
    return fetch(`https://reqres.in/api/users=${id}`)
    .then((data) => console.log(data.json()) )
    .catch((err) => console.log("aconteceu" + err));
}
getUser()



async function getPeople(){
    try {
        const people = await fetch('https://randomuser.me/api/?results=10');
      
        return people.json();
    } catch (error) {
        console.log(`error:${error}`);
    }
}

getPeople().then( data => console.log(data) );

//asyncAwait----------------------------------------------------------------

function saudacao () {
    return 'ola mundos';
    }
    async function saudacaoAsync(){
        return saudacao = await Promise.resolve('ola mund');
    }
    
    console.log(saudacaoAsync());
    
    saudacaoAsync().then(console.log)
    
    let ola = async () => {return "ola, arrow functions"};
    console.log(ola());
    
    ola().then(console.log)
    
    

  
 



