let creator = document.querySelector('#name');
creator.children[1].classList.add('text-light');
creator.children[1].id = "subHeading";
creator.children[1].classList.add('bg-info' , 'my-3');

let subheading = document.querySelector('#subHeading');

subheading.parentNode.classList.add('bg-primary-subtle');
console.log(creator.lastElementChild.innertext); 

