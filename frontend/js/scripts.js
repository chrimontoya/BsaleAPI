
//const URL = 'http://localhost:8000/api/products';
//https://app-bsaleapi.herokuapp.com/api/products/';

const modal = document.getElementById('modal');
const title = document.getElementsByClassName('card-title');
const price = document.getElementsByClassName('card-text');
const img = document.getElementsByClassName('card-img-top');

const allData = [];

//obtener id de dropdown
const idCategory = document.getElementById('dropdown').addEventListener('change', (evt) => {
    let id = parseInt(evt.target.options[evt.target.selectedIndex].value)
    if (id != NaN && id > 0) {
        product.getProductByIdCategory(id).then(res=>console.log(res));
    }
});

//Buscar por nombre
const getByName=()=>{
    const nameProduct = document.getElementById('search').value;
    if(nameProduct){
        product.findProductByName(nameProduct).then(res=>createCard(res));
    }
}


//Cargar la data en la pagina
const createCard = (data) => {
    console.log(data)
    if (data) {
        const container = document.getElementById('container');
        container.innerHTML = '';

        data.forEach(element => {
            container.innerHTML += `
                <div class="card" style="width: 18rem;">
                <img src="${element.url_image ? (element.url_image) : ('https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1380&t=st=1649390433~exp=1649391033~hmac=3111cb6e39431bdd2f8954e9bf07f57c2cfdfec0c82a6956d06e99461119e75e')}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.price}</p>
                    </div>
                </div>
                `
        });

        for (let index = 0; index < data.length; index++) {
            title[index].innerHTML = data[index].name
            price[index].innerHTML = data[index].price
            img[index].src = data[index].url_image
        }
    }
}

//MODEL
function Product() {

    this.id = '';
    this.URI = 'http://localhost:8000/api/products';
    this.SUFFIX = '?categorys=';
    this.getAll = async () => {
        try {
            return await fetch(this.URI + '/',
                {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                .then(res => { return res.json()})
                .catch(err => err);
        } catch (error) {
            alert('Hubo un error', error)
        }
    };


    this.getProductByIdCategory = async (id) => {
        try {
            return await fetch(`http://localhost:8000/api/products/?categorys=${id}`,
                {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                .then(res => { return res.json()})
                .catch(err => err);
        } catch (error) {
            alert('Hubo un error', error)
        }
    };


    this.findProductByName = async (nameProduct) => {
            try {
                return await fetch(this.URI + `/?search=${nameProduct}`, {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                    .then(res => { return res.json()})
                    .catch(err => err)
            } catch (error) {
                alert('Hubo un error', error);
            }
    };

}

const product = new Product();

window.onload = () =>product.getAll().then(res=>createCard(res));
