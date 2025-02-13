let heading = document.querySelector('#Name');
heading.children[1].classlist.add('text-primary');
heading.children[1].id = "subHeading";

let subHeading = document.querySelector('#subHeading');

subheading.parentNode.classlist.add('bg-primary-subtle');
console.log(heading.lastElementChild.innerText);