const URL ='http://localhost:8000/api/product/';

const xhtmlr = new XMLHttpRequest();

fetch(URL).then(res=>res.json()).then(data=>{

    if(data){
        const { results } = data;
    let card='';

    const container=document.getElementById('container');

    results.forEach(element => {
        container.innerHTML+=`
        <div class="row row-cols-5 row-cols-md-3 g-4">
            <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${element.url_image?(element.url_image):('https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1380&t=st=1649390433~exp=1649391033~hmac=3111cb6e39431bdd2f8954e9bf07f57c2cfdfec0c82a6956d06e99461119e75e')}" class="card-img-top" alt="..." style="width: 150px;height:150px;">
            <div class="card-body">
                <h5>${element.name}</h5>
                <p class="card-text">${element.price}</p>
            </div>
        </div>
        </div>
            </div>
        `
    });

    const title = document.getElementsByClassName('card-title');
    const price = document.getElementsByClassName('card-text');
    const img = document.getElementsByClassName('card-img-top'); 
    console.log(img)
    for (let index = 0; index < results.length; index++) {
        title[index].innerHTML=results[index].name
        price[index].innerHTML=results[index].price
        img[index].src=results[index].url_image
    }

       /* console.log(element)
       card+=`<div class="card" style="width: 18rem;">
       <img src="${element.url_image}" class="card-img-top" alt="..." style="width: 100px;height:100px">
       <div class="card-body">
         <h5 class="card-title">${element.name}</h5>
         <p class="card-text">${element.price}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>`
    });
    document.write(card)

    */

    }

})

