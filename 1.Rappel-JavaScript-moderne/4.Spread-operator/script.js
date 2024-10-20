/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1,2,3,{a: 5}]

console.log(...array)

const shallomArrayCopy = [...array,4,5,6]
console.log(shallomArrayCopy);
array[3].a = 555
console.log(shallomArrayCopy);

const obj =  {

    name: "Laura",

    age: 23

}

const shallomObjCopy = {...obj, dogName: "Tim"}

console.log(shallomObjCopy);

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

const shallomObjCopy2 = {...obj, name:"Anna"}
console.log(shallomObjCopy2);


// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."
const strCopyArray = [...str]
console.log(strCopyArray);


