let heading = document.querySelector('#Name');
heading.children[1].classList.add('text-primary');
heading.children[1].id = "subHeading";

let subheading = document.querySelector('#subHeading');

subheading.parentNode.classList.add('bg-primary-subtle');
console.log(heading.lastElementChild.innerText);