/****************************************************************************************************
 Część 0:
 Dodaj poprawnie plik 'script.js' do pliku index.html.
 Wyświetl w konsoli: 'Poprawnie dodany skrypt';
 */

// Kod dla części 0 poniżej:


console.log('Poprawnie dodany skrypt');


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

const array = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21];

const sum = array.reduce((prev, curr) => prev + curr, 0);
const absoluteSum = array.reduce((prev, curr) => prev + Math.abs(curr), 0);
const moreThanOrEqual20 = array.filter(el => el >= 20);
const negativeSum = array.filter(el => el < 0).reduce((prev, curr) => prev + curr, 0);
const evenSum = array.filter((el, index) => index % 2 === 0).reduce((prev, curr) => prev + curr, 0);

console.log('1.1 Suma elementów w tablicy:', sum);
console.log('1.2 Suma wartości bezwględnych z elementów w tablicy:', absoluteSum);
console.log('1.3 Elementy większe lub równe od 20:', moreThanOrEqual20.toString());
console.log('1.4 Sume elementów ujemnych:', negativeSum);
console.log('1.5 Suma elementów parzystych:', evenSum);

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

function whoIsOlder(person1, person2) {
    if (person1.age === person2.age) {
        return 'Obaj mają tyle samo lat'
    }

    return 'Starszy jest' + (person1.age > person2.age ? person1.name : person2.name)
}

console.log('2.1:', whoIsOlder({name: 'Jasio', age: 8}, {name: 'Kazio', age: 11}));

function fizzyBizzy() {
    let fizzybizzy = '';
    for (i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            fizzybizzy += 'Fizz'
        }

        if (i % 5 === 0) {
            fizzybizzy += 'Buzz'
        }

        if ((i % 3 === 0 || i % 5 === 0) && i !== 50) {
            fizzybizzy += ' ';
        }
    }

    return fizzybizzy;
}

console.log('2.2:', fizzyBizzy());

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Nie można dzielić przez zero'
            }
            return num1 / num2;
        default:
            return 'Nie znany operator'
    }
}

console.log('2.3.1:', calculator(1, '+', 2));
console.log('2.3.2:', calculator(20, '-', 3));
console.log('2.3.3:', calculator(-1, '*', 8));
console.log('2.3.4:', calculator(4, '/', 2));
console.log('2.3.5:', calculator(5, '!', 5));
console.log('2.3.6:', calculator(4, '/', 0));

function markCreator(mark, iteration) {
    const properlyIteration = iteration <= 10 ? iteration : 10;
    let markSeries = '';

    for (i = 1; i <= properlyIteration; i++) {
        markSeries += (i === 1 ? '' : '-') + mark;
    }

    return markSeries;
}

console.log('2.4.1:', markCreator('$', 5));
console.log('2.4.2:', markCreator('$', 17));

function crazyStars(el) {
    let all = '';
    for (i = 1; i <= 5; i++) {
        let row = '';
        for (j = 1; j <= i; j++) {
            row += el + ' ';
        }
        all += row + '\n';
    }
    return all;
}

console.log('2.5:');
console.log(crazyStars('*'));

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

const pacient = {
    name: 'Jan',
    surname: 'Kowalski',
    status: 'zdrowy',
    changeStatus: function () {
        this.status = this.status === 'zdrowy' ? 'chory' : 'zdrowy';
    }
};

pacient.status = 'chory';
pacient.changeStatus();
console.log('3.1.1 pacient.status:', pacient.status);
pacient.status = 'zdrowy';
pacient.changeStatus();
console.log('3.1.2 pacient.status:', pacient.status);

const phones = ['IPhone 4S', 'Samsung S5', 'Huawei 5', 'LG 7'].map(phone => ({
    name: phone,
    price: (Math.random() * 1000).toFixed(2)
}));

console.log('3.2', phones);

const pizzas = [
    {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
    {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
    {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
];

const menu = pizzas.map(pizza => pizza.name + ' (' + pizza.ingredients.toString() + ') ' + '- ' + pizza.price);

console.log('3.3');
console.log(menu.join('\n'));

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

console.log('3.4:', 'a)', labirynth.animals[1].name, 'b)', labirynth.animals[3].species, 'c)', labirynth.nonAnimals[0].skills[1]);

const SoftwareUsers = {
    users: [],
    addUser: function (name, surname) {
        this.users.push({
            id: this.getNextId(),
            name: name,
            surname: surname
        })
    },
    getNextId: function () {
        return Math.max(this.users.map(user => user.id).toString()) + 1;
    }
};

SoftwareUsers.addUser('Jan', 'Kowalski');
SoftwareUsers.addUser('Janina', 'Kowalska');

console.log('3.5', SoftwareUsers.users);

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

function uppercaseFirstLetter(string) {
    if (typeof string === 'string') {
        const firstLetterUpperCase = string.charAt(0).toUpperCase();
        return firstLetterUpperCase + string.slice(1);
    } else {
        return 'to nie jest string'
    }
}

console.log('4.1.1', uppercaseFirstLetter('kamil'));
console.log('4.1.2', uppercaseFirstLetter(12));

const pollutedArray = ['K$$ami$$l', '$$Jan$ek', 'Kr$$z$ych$u', 'M$$ich$$ał$'];
const clearedArray = pollutedArray.map(el => el.replace(/\$/g, ''));

console.log('4.2', clearedArray);

const fullName = ['Jan Kowalski', 'Janina Kowalska', 'Kamil Stoch'];
const separatedName = [];
fullName.forEach(el => {
    separatedName.push(el.slice(0, el.indexOf(' ')));
    separatedName.push(el.slice(el.indexOf(' ') + 1));
});
console.log('4.3', separatedName);

const nameObjs = [{name: 'Jan', surname: 'Kowalski'}, {name: 'Janina', surname: 'Kowalska'}];

const nameObjsWithFullName = nameObjs.map(el => ({...el, fullName: `${el.name} ${el.surname}`}));
console.log('4.4', nameObjsWithFullName);

function createInitials(obj) {
    if (obj.name && obj.surname) {
        return obj.name.charAt(0).toUpperCase() + obj.surname.charAt(0).toUpperCase();
    }

    if (obj.name) {
        return obj.name.charAt(0).toUpperCase();
    }

    if (obj.surname) {
        return obj.surname.charAt(0).toUpperCase();
    }

    return 'XX';
}

console.log('4.5.1', createInitials({name: 'Jan', surname: 'Kowalski'}));
console.log('4.5.2', createInitials({name: 'Jan', surname: null}));
console.log('4.5.3', createInitials({name: null, surname: 'Kowalski'}));
console.log('4.5.4', createInitials({name: null, surname: null}));

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

function showOnlyUsersWithRace(users, race) {
    if (typeof race !== 'string') {
        return 'Taka rasa nie istnieje'
    } else {
        return users.filter(user => user.race === race);
    }
}

fetch('./data.json').then(r => r.json()).then(r => {
    console.log('5.1.1', showOnlyUsersWithRace(r, 'Cambodian'));
    console.log('5.1.2', showOnlyUsersWithRace(r, 1));
    console.log('5.1.3', showOnlyUsersWithRace(r, 'Polish'));

    console.log('5.2');
    r.forEach(el => console.log(`${el.title} ${el.first_name} ${el.last_name} work as ${el.job_title} in ${el.company}`));

    const dataWithFullName = r.map(user => ({
        first_name: user.first_name,
        last_name: user.last_name,
        id: user.id,
        full_name: `${user.first_name} ${user.last_name}`
    }));
    console.log('5.3', dataWithFullName);

    const onlyWomenWithAgeAtLeast30 = r.filter(user => user.gender === 'Female' && user.age >= 30);

    console.log('5.4');
    onlyWomenWithAgeAtLeast30.forEach(user => console.log(`${user.first_name} ma ${user.age} lat`));
    console.log('Razem maja', onlyWomenWithAgeAtLeast30.map(el => el.age).reduce((a, b) => a + b, 0), 'lat');

    const usersWithRightBMI = r.map(user => ({
        ...user,
        height: user.age + 100,
        weight: user.age + 10
    })).map(user => ({
        ...user,
        bmi: user.weight / Math.pow(user.height / 100, 2)
    })).filter(user => {
        return user.bmi >= 18.5 && user.bmi < 24.99;
    }).map(user => {
        return user.first_name
    });

    console.log('5.5', usersWithRightBMI);
});
