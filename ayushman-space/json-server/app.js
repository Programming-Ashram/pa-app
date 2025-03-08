let product = [
      {
        phone: [
            {
                iphone:[
                   {
                    version14:[
                        {
                            blackVarient:[
                                {
                                    name: "IPhone 14 Pro Max",
                                    capacity: "8/256",
                                    gallery:[
                                        "https://rukminim3.flixcart.com/image/850/1000/xif0q/mobile/x/v/y/-original-imah4jz66dmcwhmd.jpeg?q=20&crop=false",
                                        'https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UF1000,1000_QL80_.jpg',
                                        'https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UF1000,1000_QL80_.jpg'
                                    ],
                                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae deserunt, doloremque saepe voluptatem veritatis harum explicabo ipsa laborum eligendi.',
                                    salePrice: '1,50,000',
                                    marketPrice: '50,000'
                                }
                            ],
                            goldVarient:[],
                        }
                    ],
                    version16:[
                        {
                            blackVarient:[],
                            goldVarient:[],
                        }
                    ]
                   }
                ],
                samsung:[
                    {
                        s24:[
                            {
                                blackVarient:[],
                                goldVarient:[],
                            }
                        ],
                        s25:[
                           {
                                blackVarient:[],
                                goldVarient:[],
                           }
                        ]
                    }
                ]
            }
        ],
        computer: [
            {
                dell:[
                    {
                        insprion:[
                           {
                            midrange:[],
                            highRange:[],
                           }
                        ],
                        pavelion:[
                            {
                                midrange:[],
                                highRange:[],
                            }
                        ]
                    }
                ],
                asus:[
                    {
                        tuff:[
                            {
                                midrange:[],
                                highRange:[],
                            }
                        ],
                        victus:[
                            {
                                midrange:[],
                                highRange:[],
                            }
                        ]
                    }
                ]
            }
        ]
      }
];

let pro = document.getElementById('pro');

product.forEach(modals =>{
    for(let mobile of modals.phone){
        for(let apple of mobile.iphone){
           for(let version of apple.version14){
                for(let iphoneDetails of version.blackVarient){
                    pro.innerHTML +=`
                    <div class="col-md-3">
                        <div class="card border-0 shadow-sm rounded-4">
                            <div class='d-flex justify-content-between'>
                                <img src="${iphoneDetails.gallery[0]} " class="card-img-top" style='width: 50px'; alt="...">
                                <img src="${iphoneDetails.gallery[1]} " class="card-img-top" style='width: 50px'; alt="...">
                                <img src="${iphoneDetails.gallery[2]} " class="card-img-top" style='width: 50px'; alt="...">
                            </div>
                            <div class="card-body">
                                <h4>${iphoneDetails.name} </h4>
                               ${iphoneDetails.description}
                            </div>
                        </div>
                    </div>
                `;   
                }
           }
        }
    }
})