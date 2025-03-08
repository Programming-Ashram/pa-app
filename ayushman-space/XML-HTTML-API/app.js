// function fetchAPI(){
//     let server = new XMLHttpRequest();
//     server.onload = function(){
//         let convert = JSON.parse(this.responseText);
//         console.log(convert);
//     }
//     server.open('GET', './data.json');
//     server.send();
// }
// fetchAPI();

function fetchAPI(){
    let server = new XMLHttpRequest();
    server.onreadystatechange = function(){
        (this.readyState == 4 && this.status == 200) ? console.log(this.responseText) : console.log(this.status);
    }
    server.open('GET', './data.json');
    server.send();
}
fetchAPI();