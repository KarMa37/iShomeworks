/****************************************************************************************************
 Część 0:
 Dodaj poprawnie plik 'script.js' do pliku index.html.
 Wyświetl w konsoli: 'Poprawnie dodany skrypt';
 */

// Kod dla części 0 poniżej:

console.log("Poprawnie dodany skrypt");

/****************************************************************************************************
 Część 1 Tablice:
 Input: [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21]

 1.1 Policz sumę wszytskich elementów tablicy
 Output: '1.1 Suma elementów w tablicy: 215'

 1.2 Policz sumę wartości bezwględnych w tablicy
 Output: '1.2 Suma wartości bezwględnych z elementów w tablicy: 483'

 1.3 Wyświetl tylko elementy większe lub równe od 20:
 Output: '1.3 Elementy większe lub równe od 20: 50,20,21,100,20,44'

 1.4 Wyświetl sumę elementów tylko ujemnych:
 Output: '1.4 Sume elementów ujemnych: -134'

 1.5* (+0,5pkt) Wyświetl sumę elemnetów na pozycjach parzystych:
 Output: '1.5 Suma elementów parzystych: 193'

 */

// Kod dla części 1 poniżej:

const myArray = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21];
// console.log(myArray);

const sum = myArray.reduce((prev, curr) => prev + curr);
console.log('1.1 Suma elementów w tablicy: ', sum);

const sumAbsolute = myArray.map(Math.abs).reduce((prev, curr) => prev + curr);
console.log('1.2 Suma wartości bezwględnych z elementów w tablicy: ', sumAbsolute);

const minTwenty = myArray.filter(el => {return el >= 20});
console.log('1.3 Elementy większe lub równe od 20: ' + minTwenty);

const sumOnlyNegative = myArray.filter(el => {return el < 0}).reduce((prev, curr) => prev + curr);
console.log('1.4 Suma elementów ujemnych: ', sumOnlyNegative);

const sumEvenIndex = myArray.filter((el, index) => {return index % 2 === 0}).reduce((prev, curr) => prev + curr);
console.log('1.5 Suma elementów parzystych: ', sumEvenIndex);
// TODO lepiej niż a to pisać el (łatwiej się czyta) ----- DONE :)

/****************************************************************************************************
 Część 2 Pętle + funkcje:

 2.1 Napisz funkcję, która przyjmuje 2 argumenty (2 obiekty z kluczami name oraz age)
 i zwraca ten obiekt, która ma większą wartość age. Następnie ze zwróconego obiektu wyświetl jego imię.
 Input: {name: 'Jasio', age: 8} , {name: 'Kazio', age: 11}
 Output: '2.1 Starszy jest: Kazio'

 2.2 Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
 a na wielokrotności 3 i 5 FizzBuzz;
 Output: '2.2: Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz'

 2.3 Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: '2.3.1: 3'
 Input: 20, '-', 3   Output: '2.3.2: 17'
 Input: -1, '*', 8   Output: '2.3.3: -8'
 Input: 4, '/', 2    Output: '2.3.4: 2'
 Input: 5, '!', 5    Output: '2.3.5: Nie znany operator'
 Input: 4, '/', 0    Output: '2.3.6: Nie można dzielić przez zero'

 2.4 Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$

 2.5* (+0,5pkt) Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output: '2.5:
 *
 * *
 * * *
 * * * *
 * * * * *

 */

// Kod dla części 2 poniżej:

const jasioObject = {name: 'Jasio', age: 8};
const kazioObject = {name: 'Kazio', age: 11};

const checkAge = (first, second) => {
    if (first.age > second.age) {
        return first.name
    } else if (second.age > first.age) {
        return second.name
    } else {
        return '-nobody-'
    }
};
console.log('2.1 Starszy jest: ', checkAge(jasioObject, kazioObject));


let showFizzBuzz = '';

for (let i = 1; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        showFizzBuzz += 'FizzBuzz '
    } else if (i % 3 === 0) {
        showFizzBuzz += 'Fizz '
    } else if (i % 5 === 0) {
        showFizzBuzz += 'Buzz '
    }
    // TODO na końcu nie potrzebna spacja
    // TODO hmm.. nie wiem, może coś źle robię, ale chyba jednak potrzebna? inaczej wyświetla w 1 ciągu całość
    // TODO chyba że miałeś na myśli tą spację za 2.2:, to ok, rzeczywiście :)
}
console.log('2.2:', showFizzBuzz);


const opeartions = (number1, operator, number2) => {
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        return 'Nie znany operator'
    } else if (number2 === 0) {
        return 'Nie można dzielić przez zero'
    } else {
        return eval(number1 + operator + number2)
        // TODO fajny pomysł :) co jak będzie inny opertor, np '#' ---- DONE :)
    }
};

console.log('2.3.1:', opeartions(1, '+', 2));
console.log('2.3.2:', opeartions(20, '-', 3));
console.log('2.3.3:', opeartions(-1, '*', 8));
console.log('2.3.4:', opeartions(4, '/', 2));
console.log('2.3.5:', opeartions(5, '!', 5));
console.log('2.3.6:', opeartions(4, '/', 0));


const showMeTheMoney = (sign, amount) => {
    let string = '';
    for (let i=1; i<Math.min(amount, 10); i++) {
        string += sign + '-';
    }
    string += sign;
    // TODO można krócej string += sign ----- DONE :)
    return string;
};

console.log('2.4:');
console.log(showMeTheMoney('$', 5));
console.log(showMeTheMoney('$', 17));


let showMeTheStars = '';
for (let i=0; i<6; i++) {
    for (let j=0; j<i; j++) {
        showMeTheStars += '* ';
    }
    showMeTheStars += "\n";
    // TODO bardzo ładnie :) ----- dziex :)
}

console.log('2.5:');
console.log(showMeTheStars);

/****************************************************************************************************
 Część 3 Obiekty:

 3.1 Napisz obiekt 'pacient' z kluczami: name, surname, status oraz changeStatus. Pierwsze trzy mają przyjmować zmienną
 typu string a ostatnia ma być metodą (funkcją), która zmienia status danego pacjenta.
 Input: pacient.status = 'chory' pacient.changeStatus
 Output: '3.1 pacient.status: zdrowy'
 Input: pacient.status = 'zdrowy' pacient.changeStatus
 Output: '3.1 pacient.status: chory'

 3.2 Napisz pętle, która stworzy tablicę obiektów z kluczami name oraz price. Wartość name powinna być
 taka sama jak wartość tablicy natomiast price ma wstawiać losową liczbę (maksymalnie 3 cyfrowa).
 Input: ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7']
 Output: '3.2: [
 {name: 'IPhone 4S', price: losowa liczba <= 999},
 {name: 'Samsung S5', price: losowa liczba <= 999},
 {name: 'Huawei 5', price: losowa liczba <= 999},
 {name: 'LG 7', price: losowa liczba <= 999}
 ]'

 3.3 Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
 {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
 {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
 {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output: '3.3:
 Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18'

 3.4 Wyświetl wartość w konsoli z obiektu labyrinth:
 a) 'Garfield'
 b) 'elephant'
 c) 'flying'
 Input: labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { console.log(this.animals) },
        showNonAnimals: function() { console.log(this.nonAnimals) }
    }
 Output: '3.4: a) Garfield b) elephant c) flying'

 3.5* (+0,5pkt) Utwórz obiekt o nazwie SoftwareUsers z kluczami users i addUser. W users ma być tablicą użytkowników (obiektów z kluczami
 name, surname, id) - pusta na początku. W addUser ma być funkcją przyjmująca dwa argumenty name i surname,
 która dodaje nowego użytkownika do tablicy w users z *unikatowym* id.
 Input: SoftwareUsers.add('Jan', 'Kowalski') SoftwareUsers.add('Janina', 'Kowalska')
 Output: '3.5:
 [{ name: 'Jan', surname: 'Kowalski', id: 1},
 { name: 'Janina', surname: 'Kowalska', id: 2}]

 */

// Kod dla części 3 poniżej:

const patient = {
    name: 'name',
    surname: 'surname',
    status: 'status',
    changeStatus() {
        if (this.status === 'chory') {
            this.status = 'zdrowy';
        } else {
            this.status = 'chory'
        }
    }
};
patient.status = 'chory';
patient.changeStatus();
console.log('3.1.1 patient.status: ', patient.status);
patient.status = 'zdrowy';
patient.changeStatus();
console.log('3.1.2 patient.status: ', patient.status);


const phoneArray = ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7'];
let phoneObject = [];
for (let i = 0; i < phoneArray.length; i++) {
    phoneObject[i] = {
        name: phoneArray[i],
        price: Math.floor(Math.random() * 1000)
    }
}
console.log('3.2:', phoneObject);


const pizzaArray = [
    {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
    {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
    {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
];
console.log('3.3:');
pizzaArray.forEach(pizza => {console.log(pizza.name + ' (' + pizza.ingredients + ') - ' + pizza.price)});
// TODO forEach ładniejszy ----- DONE :)


const labirynth = {
    animals: [
        {name: 'Pluto', species: 'dog'},
        {name: 'Garfield', species: 'cat'},
        {name: 'Simba', species: 'lion'},
        {name: 'Maniek', species: 'elephant'}
    ],
    nonAnimals: [
        {name: 'R2D2', species: 'robot', skills: ['fixing', 'flying']},
        {name: 'C3PO', species: 'robot', skills: ['talking']}
    ],
    showAnimals: function () {
        console.log(this.animals)
    },
    showNonAnimals: function () {
        console.log(this.nonAnimals)
    }
};
console.log('3.4: a) '
    + labirynth.animals[1].name
    + ' b) ' + labirynth.animals[3].species
    + ' c) ' + labirynth.nonAnimals[0].skills[1]);
// TODO ładnie i czytelnie :) ----- dziex :)


const SoftwareUsers = {
    users: [
        // {name: '', surname: '', id: 0}
        // TODO to chyba nie potrzebne :) ----- LOL rzeczywiście :)
        // TODO z początku nie chciało mi zastartować bez podania id jako 0, a toć zawsze startuje od 0 :)
        // TODO teraz to już nie wiem co na początku nachrzaniłem :P
    ],
    add: function (name, surname) {
        this.users.push({name: name, surname: surname, id: (this.users.length + 1)});
    }
};
SoftwareUsers.users.shift();

SoftwareUsers.add('Jan', 'Kowalski');
SoftwareUsers.add('Janina', 'Kowalska');
console.log('3.5: ', SoftwareUsers.users);

/****************************************************************************************************
 Część 4 String:

 4.1 Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
 Input: uppercaseFirstLetter('kamil') Output: '4.1.1: Kamil'
 Input: uppercaseFirstLetter(12) Output: '4.1.2: to nie jest string'

 4.2 Wyczyść podane stringi z znaków '$' (użyj pętli, zwróć tablicę).
 Input: ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$']
 Output: '4.2: ['Kamil', 'Janek', 'Krzychu', Michał']'

 4.3 Rozdziel podane stringi na dwa odrębne (zwróć tablicę):
 Input: ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch']
 Output: '4.3: ['Jan', 'Kowalski', 'Janina', 'Kowalska', 'Kamil', 'Stoch']'

 4.4 Dodaj dodatkowy klucz do obiektu 'fullName', który będzie zawierał połączenie dwóch stringów.
 Input: [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}]
 Output: '4.4: [{name: 'Jan', surname: 'Kowalski', fullName: 'Jan Kowalski'},
 {name: 'Janina', surname: 'Kowalska', fullName: 'Janina Kowalska'}]'

 4.5* (+0,5pkt) Stwórz metodą createInitials, która przyjmuje obiekt z dwoma kluczami name i surname
 oraz zwraca inicjały:
 Input: createInitials({name: 'Jan', surname: 'Kowalski'})   Output: '4.5.1: JK'
 Input: createInitials({name: 'Jan', surname: null})         Output: '4.5.2: J'
 Input: createInitials({name: null, surname: 'Kowalski'})    Output: '4.5.3: K'
 Input: createInitials({name: null, surname: null})          Output: '4.5.4: XX'

 */

// Kod dla części 4 poniżej:

const uppercaseFirstLetter = (name) => {
    if (typeof name === 'string') {
        return '4.1.1: ' + name[0].toUpperCase() + name.slice(1);
    } else {
        return '4.1.2: to nie jest string';
    }
};
console.log(uppercaseFirstLetter('kamil'));
console.log(uppercaseFirstLetter(12));


const arrayWithDollars = ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$'];
const arrayWithoutDollars = arrayWithDollars.map((i) => {return i.replace(/\$/g,'')});
console.log('4.2: ', arrayWithoutDollars);


const arraySurnameWithName = ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch'];
const arrayWithout = arraySurnameWithName.toString().split(' ').toString().split(',');
console.log('4.3: ', arrayWithout);


const objectsArray = [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}];
objectsArray.map(el => {el.fullName = el.name + ' ' + el.surname});
// TODO można to zrobić mapem ----- DONE :)
console.log('4.4: ', objectsArray);

/****************************************************************************************************
 Część 5 Kolekcje:

 Do wykonania tego zadania musisz wykonać pobrania zawartości pliku data.json

 5.1 Wykonaj funkcje, która zwróci jedynie osoby z podaną rasą w argumencie.
 Input: showOnlyUsersWithRace('Cambodian')
 Output: '5.1: [{id: 8, first_name: "Garvey", last_name: "Islep", email: "gislep7@nps.gov", gender: "Male", …}]'
 Input: showOnlyUsersWithRace(1)
 Output: '5.2: taka rasa nie istnieje'
 Input: showOnlyUsersWithRace('Polish')
 Output: '5.3: []'

 5.2 Wyświetl każdego z userów w konwencji: title first_name last_name work as job_title in company.
 Output:
 Rev Kaylil Hovey work as Recruiting Manager in Browseblab
 Rev Cesare Caroline work as Computer Systems Analyst II in Wordtune
 Mr Xaviera Danilchenko work as Statistician IV in Rhynyx
 Honorable Shandy Sanford work as Data Coordiator in Topdrive
 Honorable Muire Pothecary work as Executive Secretary in Realbridge
 Ms Mano Gwatkins work as Automation Specialist IV in InnoZ
 Honorable Frederica Shackleton work as Help Desk Operator in Yoveo
 Mr Garvey Islep work as Internal Auditor in Livefish
 Rev Aristotle Gozard work as Software Test Engineer IV in Feedspan
 Honorable Bryon Boulder work as Senior Editor in Kazu

 5.3 Skróć zawartość kolekcji do kluczy id, first_name, last_name i dodaj nowy klucz full_name
 składający się z first_name i last_name.
 Output:
 [
 {id:1, first_name: "Kaylil", last_name: "Kaylil", full_name: "Kaylil Hovey"}
 {id:2 ,first_name: "Cesare", last_name: "Cesare", full_name: "Cesare Caroline"}
 {id:3 ,first_name: "Xaviera", last_name: "Xaviera", full_name: "Xaviera Danilchenko"}
 {id:4 ,first_name: "Shandy", last_name: "Shandy", full_name: "Shandy Sanford"}
 {id:5 ,first_name: "Muire", last_name: "Muire", full_name: "Muire Pothecary"}
 {id:6 ,first_name: "Mano", last_name: "Mano", full_name: "Mano Gwatkins"}
 {id:7 ,first_name: "Frederica", last_name: "Frederica", full_name: "Frederica Shackleton"}
 {id:8 ,first_name: "Garvey", last_name: "Garvey", full_name: "Garvey Islep"}
 {id:9 ,first_name: "Aristotle", last_name: "Aristotle", full_name: "Aristotle Gozard"}
 {id:10 ,first_name: "Bryon", last_name: "Bryon", full_name: "Bryon Boulder"}
 ]

 5.4 Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji 'imię ma X lat'
 i na koniec wyświetl sumę ich lat.
 Output:
 Kaylil ma 33 lat
 Xaviera ma 55 lat
 Shandy ma 76 lat
 Frederica ma 89 lat
 Razem mają: 253 lat

 5.5* (+0,5pkt) Dodaj do kolekcji dodatkowe klucze:
 height: wiek + 100
 weight: wiek + 10
 bmi: weight / (height/100) ^ 2
 Następnie zwróc tablie imion tych osób, które mają BMI w zakresie 18,5–24,99.
 Output: ["Kaylil", "Muire", "Aristotle", "Mano", "Bryon"]

 */

// Kod dla części 5 poniżej:

fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {

        const showOnlyUsersWithRace = (race) => {
            if (typeof race !== 'string') {
                return "taka ras nie istnieje"
            } else {
                return response.filter(el => {return el.race === race})
            }
        };
        console.log('5.1.1: ', showOnlyUsersWithRace('Cambodian'));
        console.log('5.1.2: ', showOnlyUsersWithRace(1));
        console.log('5.1.3: ', showOnlyUsersWithRace('Polish'));


        console.log('5.2:');
        response.forEach(el => {console.log(el.title, el.first_name, el.last_name + ' work as ' + el.job_title + ' in ' + el.company)});


        const showAllWithNameAndSurname = response.map(el => {
            return {
                id: el.id,
                first_name: el.first_name,
                last_name: el.last_name,
                full_name: el.first_name + ' ' + el.last_name
            }
        });
        console.log('5.3: ', showAllWithNameAndSurname);

        console.log('5.4: ');
        let age = 0;
        response
            .filter(el => {return el.gender === "Female" && el.age > 30})
            .forEach(el => {console.log(el.first_name, 'ma', el.age, 'lat');
                return age += el.age});
        console.log('Razem mają:', age, 'lat');


        response.map(el => {
            el.height = el.age + 100;
            el.weight = el.age + 10;
            el.bmi = (el.weight) / Math.pow((el.height) / 100, 2);
        });
        const newCollection = response
            .filter(el => {return el.bmi > 18.5 && el.bmi < 24.99})
            .map(el => {return el.first_name});
        // TODO miało być bez obiektu i key first_name - po prostu imie ----- DONE :)
        console.log('5.5: ', newCollection);
    });