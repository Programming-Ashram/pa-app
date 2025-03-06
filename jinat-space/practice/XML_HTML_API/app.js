// function fetchData(){
//      let api = new XMLHttpRequest();
//      api.onload = function(){
//           let convertData = JSON.parse(this.responseText);

//           let data = document.getElementById('data');
//           for(let i in convertData){
//                data.innerHTML +=`
//                     <div class="col-md-3">
//                     <div class="card my-2 ${(convertData[i].completed == true) ? "bg-success-subtle" : "bg-warning-subtle"}" >
//                          <div class="card-body">
//                               <div class=" d-flex align-items-center justify-content-between">
//                                    <h3>${convertData[i].id}</h3>
//                                    <i class="fa-solid ${(convertData[i].completed == true) ? "fa-circle-check" : "fa-hourglass-half" }"> </i>
//                               </div>
//                               <p>${convertData[i].title}</p>
//                          </div>
//                     </div>
//                </div>
               
//                `
//           }
//      }

//      api.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//      api.send();
// }fetchData()


// function fetchData(){
//      let api = new XMLHttpRequest();
//      api.onreadystatechange = function(){ 
//           // let converter = JSON.parse(this.responseText);
//           if(this.readyState == 4 && this.status == 200) {
//                 let converter = JSON.parse(this.responseText);
//                console.log(converter)
//           }
//      }
//      api.open('GET' ,'https://jsonplaceholder.typicode.com/todos');
//      api.send()
// }fetchData()

function fetchAPI(){
     let api = new XMLHttpRequest();

     api.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
               let converter = JSON.parse(this.responseText)
               console.log(converter)
          }
     }
     api.open('GET' ,'https://jsonplaceholder.typicode.com/todos');
     api.send()

}fetchAPI()