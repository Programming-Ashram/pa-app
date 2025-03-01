let service = [
    {
        badge: 'New',
        title: 'Service 1',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    },
    {
        badge: 'Old',
        title: 'Service 2',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    },
    {
        badge: 'UpComming',
        title: 'Service 3',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    },
    {
        badge: 'New',
        title: 'Service 4',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    }, {
        badge: 'New',
        title: 'Service 1',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    },
    {
        badge: 'Old',
        title: 'Service 2',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    },
    {
        badge: 'UpComming',
        title: 'Service 3',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    },
    {
        badge: 'New',
        title: 'Service 4',
        description: 'Description for service 1',
        btnLink: 'http://example.com/service1'
    }
];

let body = document.querySelector('body');

let sec = document.createElement('section');
let container = document.createElement('div');
let row = document.createElement('div');


body.appendChild(sec);
sec.appendChild(container);
container.appendChild(row);

container.setAttribute('class', 'container');
row.setAttribute('class', 'row');

for(let i = 0; i < service.length; i++){
    // console.log(service[i].badge)
    row.innerHTML +=`
    <div class='col-lg-3 col-md-4 col-6'>
        <div class='card my-3'>
            <div class='card-body'>
                <span class='badge bg-primary-subtle text-primary'>${service[i].badge}</span>
                <h4>${service[i].title}</h4>
                <p>
                 ${service[i].description}
                </p>
                <a class='btn btn-light shadow-sm' href='${service[i].btnLink}'>Choose Plan</a>
            </div>
        </div>
    </div>
    `;
}

