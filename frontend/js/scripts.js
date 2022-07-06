const URL = 'https://app-bsaleapi.herokuapp.com/api/products/';
//https://app-bsaleapi.herokuapp.com/api/products/';
//obtener id de dropdown
const idCategory = document.getElementById('dropdown').addEventListener('change', (evt) => {
    let id = parseInt(evt.target.options[evt.target.selectedIndex].value)
    if (id != NaN && id > 0) {
        console.log(id);
        productByCategory(id);
    }
})


//CARGAR TODOS LOS PRODUCTOS ORDENADOS POR ID DE CATEGORIA
const allProducts = async() => {
    try {
        await fetch(URL,
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(res => res.json().then(data=>getData(data))).catch(err => err)
    } catch (error) {
        alert('Hubo un error', error)
    }
}

//Filtrar productos por categoria
const productByCategory = async (param) => {
    if (param) {
        try {
            await fetch(URL + `?categorys=${param}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(res => res.json().then(data=>getData(data))).catch(err => err)
        } catch (error) {
            alert('Hubo un error', error)
        }
    }
}

//Cargar la data en la pagina
const getData = async(param) => {
    const container = document.getElementById('container');

    container.innerHTML = '';

    param.forEach(element => {
        container.innerHTML += `
            <div class="row row-cols-5 row-cols-md-3 g-4">
                <div class="col">
            <div class="card" style="width: 18rem;">
            <img src="${element.url_image ? (element.url_image) : ('https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1380&t=st=1649390433~exp=1649391033~hmac=3111cb6e39431bdd2f8954e9bf07f57c2cfdfec0c82a6956d06e99461119e75e')}" class="card-img-top" alt="..." style="width: 150px;height:150px;">
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

    for (let index = 0; index < param.length; index++) {
        title[index].innerHTML = param[index].name
        price[index].innerHTML = param[index].price
        img[index].src = param[index].url_image
    }

}

const findProductByName =async()=>{
    const name = document.getElementById('search').value;
    if (name) {
        try {
            await fetch(URL + `?search=${name}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-type': 'application/json'
                },
            }).then(res => res.json().then(data=>getData(data))).catch(err => err)
        } catch (error) {
            alert('Hubo un error', error)
        }
    }
}

window.onload = () => allProducts();
