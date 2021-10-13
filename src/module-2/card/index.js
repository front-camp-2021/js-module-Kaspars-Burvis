export default class Card {
  element;

  constructor ({
    id = '',
    images = [],
    title = '',
    rating = 0,
    price = 0,
    category = '',
    brand = ''
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  getTemplate () {
    return `    <article class="goods-card">
                  <div class="goods-card__img flex-center">
                    <img src=${this.images[0]} alt="apple watch">
                  </div>
                  <div class="goods-card__rate-price goods-card__wrap">
                    <div class="goods-card__rate">${this.rating} <i class="bi bi-star"></i>
                    </div>
                    <div class="goods-card__price">$${this.price}</div>
                  </div>
                  <div class="goods-card__title goods-card__wrap">${this.title}</div>
                  <div class="goods-card__descr goods-card__wrap">${this.category}</div>
                  <div class="goods-card__buttons">
                    <a href="#" class="goods-card__wish flex-center"> <i class="bi bi-suit-heart"></i> <span> WISHLIST </span></a>
                    <a href="#" class="goods-card__add flex-center"> <i class="bi bi-box-seam"></i> <span> ADD TO CART</span></a>
                  </div>
                </article>`;
  }

  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }

  remove () {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy () {
    this.remove();
    this.element = null;
  }
}
