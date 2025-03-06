function fetchApi(){
     let api = new XMLHttpRequest();
     api.onload = function(){
          let convertData = JSON.parse(this.responseText);
          let details = document.getElementById('details')

          for(let i in convertData){
               details.innerHTML +=`
                    <div class="col-md-3">
                         <div class="card">
                              <div class="card-body">
                                   <h3>${convertData[i].id}</h3>
                                   <p>${convertData[i].title}</p>
                                   <p>${convertData[i].body}</p>
                              </div>
                         </div>
                    </div>
               `
          }
     }

     api.open('GET','https://jsonplaceholder.typicode.com/posts');
     api.send()
}fetchApi()