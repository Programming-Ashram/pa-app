function getData(){
     let data = new XMLHttpRequest()

      data.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
               let changeData = JSON.parse(this.responseText);
               console.log(changeData)
          }
     }
     data.open('GET' , 'https://jsonplaceholder.typicode.com/todos');
     data.send()
}getData()