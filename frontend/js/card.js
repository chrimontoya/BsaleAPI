class Card extends HTMLElement {
    constructor(){
        super();
        this.shadow=this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadow.innerHTML=`
        <div class="card" style="width: 18rem;background-color: red">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<button class="btn">test</button>
        `
    }
}

customElements.define("custom-card",Card);