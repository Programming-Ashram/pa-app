function fetchAPI(){
    let server = new XMLHttpRequest();
    let data = document.getElementById('data');
    server.onload = function(){
        let convert = JSON.parse(this.responseText)
        for(let i of convert){
            data.innerHTML+=`
                <div class='col-md-3'>
                    <div class='card'>
                        <div class='card-body'>
                            <h4>${i.title}</h4>
                            <p>${i.body}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    server.open('GET', 'https://jsonplaceholder.typicode.com/posts/')
    server.send();
} 
fetchAPI()