
// Document get Element by id
// Document get elements by class name
// Document querySelector // access 0 indexing element 
// Document querySelectorAll [] as a node
// Document get ElementsByTagNames


// let heading = document.getElementsByTagName('h1'); [] html collection
// let heading = document.getElementById('heading'); single 
// let heading = document.getElementsByClassName('heading'); []
// console.log(heading[0].innerText);
// console.log(heading.innerHTML);

// let heading = document.querySelector('h1');
// let heading = document.querySelector('#heading');
// let heading = document.querySelector('.heading');

// let heading = document.querySelectorAll('h1');

// for(let i = 0; i < heading.length; i++){
//     // This is provided inline css in html (Avoid it)
//     // heading[i].style.backgroundColor = "blue";
//     // heading[i].style.color = "white";
//     // heading[i].style.padding = "10px";

//     heading[i].setAttribute('class', 'heading--decoration');
// }

// let heading = document.querySelector('h1');
// let badge = document.createElement('span');

// heading.appendChild(badge);
// badge.innerText = ' 1';
// badge.setAttribute('class', 'text-color bg-primary');

let tabs, tabContent;


function myTab(tabId) {
    tabContent = document.querySelectorAll('.tab-content');

    tabContent.forEach(element => {
        element.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
}

let obj = [
    {
        name: "Shivam",
        age: 23,
        salary: 3000,
    },
    {
        name: "Shivam",
        age: 23,
        salary: 3000,
    },{
        name: "Shivam",
        age: 23,
        salary: 3000,
    }
]

let tab1Content = document.getElementById('tabrow');

for(let i in obj){
    tab1Content.innerHTML +=`
        <div class='col'>
            ${obj[i].name}
            ${obj[i].age}
            ${obj[i].salary}
        </div>
    `;
}