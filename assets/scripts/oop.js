class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;
  
    constructor(title, image, desc, price) {
      this.title = title;
      this.imageUrl = image;
      this.description = desc;
      this.price = price;
    }
  }

  class ElementAttribute {
    constructor(attrName, attrValue){
      this.name = attrName;
      this.value = attrValue;
    }
  }

  class Component {
    constructor(renderHookId){
      this.hookId = renderHookId;
    }
    createRootElement(tag, cssClasses, attributes){
      const rootElement = document.createElement(tag);
      if(cssClasses){
        rootElement.className = cssClasses;
      }
      if(attributes && attributes.length > 0){
        for (const attr of attributes){
          rootElement.setAttribute(attr.name, attr.value);
        }
      }
      document.getElementById(this.hookId).append(rootElement);
      return rootElement;
    }
  }
  
  class ShoppingCart extends Component {
    items = [];

    set cartItems(value){
      this.items = value;
      this.totalOouput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`

    }

    get totalAmount() {
      const sum = this.items.reduce(( prevValue, curItem) => {
        return prevValue + curItem.price
      }, 0);
      return sum;
    }

    constructor(renderHookId){
      super(renderHookId);
    }

    addProduct(product) {
      const updateItems = [...this.items];
      updateItems.push(product);
      this.cartItems = updateItems;
    }
    render(){
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now</button>
      `;
      cartEl.className = 'cart';
      this.totalOouput = cartEl.querySelector('h2');
    }
  }

  class ProductItem extends Component {
    constructor(product, renderHookId){
      super(renderHookId);
      this.product = product;
    }
    addToCart(){
      App.addProductToCart(this.product);
      console.log('Adding product to cart...');
      console.log(this.product);
    }
    render(){
      const prodEl = this.createRootElement('li', 'product-item');
        prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
  }

  class ProductList extends Component {
    products = [
      new Product(
        'A Pillow',
        'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
        'A soft pillow!',
        19.99
      ),
      new Product(
        'A Carpet',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
        'A carpet which you might like - or not.',
        89.99
      )
    ];
    constructor(renderHookId){
      super(renderHookId);
    }
    render() {
      this.createRootElement('ul', 'product-list', 
      [new ElementAttribute('id', 'prod-list')]);
      for (const prod of this.products) {
        const productItem = new ProductItem(prod, 'prod-list');
        productItem.render();
      }   
    }
  }


  class Shop {
    render(){
      
      this.cart = new ShoppingCart('app');
      this.cart.render();
      const productList = new ProductList('app');
      productList.render();

    }
    
  }

  class App {
    static cart;

    static init() {
      const shop = new Shop();
      shop.render();
      this.cart = shop.cart;
    }ß
    static addProductToCart(product){
    this.cart.addProduct(product);
    }
  }
  App.init();


  