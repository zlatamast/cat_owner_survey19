// Напишите класс Cat со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.)
// и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника.
// В этом классе будут только свойства и конструктор, без методов. 

let name = document.querySelector('#name');
let contacts = document.querySelector('#contacts');
let catname = document.querySelector('#catname');


class Cat {
    constructor(name, contacts, catname) {
        this.name = name;
        this.contacts = contacts;
        this.catname = catname;
    }
}

let button = document.querySelector('#button');
button.addEventListener('click', saveResults);

function saveResults(e) {
    e.preventDefault();

    let saveName = name.value;
    let saveContacts = contacts.value;
    let saveCatname = catname.value;

    let theCat = new Cat(saveName, saveContacts, saveCatname);

    console.log(theCat);
}







// let theCat = new Cat ()