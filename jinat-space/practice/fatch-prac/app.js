function fetchData(){
     let api = new XMLHttpRequest();
     api.onload = function(){
          let convertData = JSON.parse(this.responseText)
          console.log(convertData)
     }
     api.open('Get','https://jsonplaceholder.typicode.com/todos');
     api.send()
}
fetchData()
