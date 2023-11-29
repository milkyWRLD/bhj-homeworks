document.addEventListener("DOMContentLoaded", function () {
    const cartProducts = document.querySelector(".cart__products");
    const productsList = document.querySelector(".products");

    productsList.addEventListener("click", function (event) {
        if (event.target.classList.contains("product__quantity-control")) {
            updateQuantity(event.target);
        } else if (event.target.classList.contains("product__add")) {
            addToCart(event.target);
        }
    });

    cartProducts.addEventListener("click", function (event) {
        if (event.target.classList.contains("cart__product-count")) {
            removeFromCart(event.target);
        }
    });

    function updateQuantity(target) {
        const quantityValue = target.closest(".product__quantity").querySelector(".product__quantity-value");
        let quantity = parseInt(quantityValue.textContent);

        if (target.classList.contains("product__quantity-control_dec")) {
            quantity = Math.max(1, quantity - 1);
        } else if (target.classList.contains("product__quantity-control_inc")) {
            quantity += 1;
        }

        quantityValue.textContent = quantity;
    }

    function addToCart(target) {
        const product = target.closest(".product");
        const productId = product.dataset.id;
        const productTitle = product.querySelector(".product__title").textContent;
        const productImageSrc = product.querySelector(".product__image").getAttribute("src");
        const productQuantity = parseInt(product.querySelector(".product__quantity-value").textContent);

        const cartProduct = document.createElement("div");
        cartProduct.classList.add("cart__product");
        cartProduct.dataset.id = productId;

        const cartProductImage = document.createElement("img");
        cartProductImage.classList.add("cart__product-image");
        cartProductImage.setAttribute("src", productImageSrc);

        const cartProductCount = document.createElement("div");
        cartProductCount.classList.add("cart__product-count");
        cartProductCount.textContent = productQuantity;

        cartProduct.appendChild(cartProductImage);
        cartProduct.appendChild(cartProductCount);

        const existingCartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingCartProduct) {
            const existingCartProductCount = existingCartProduct.querySelector(".cart__product-count");
            const newCount = parseInt(existingCartProductCount.textContent) + productQuantity;
            existingCartProductCount.textContent = newCount;
        } else {
            cartProducts.appendChild(cartProduct);
        }
    }

    function removeFromCart(target) {
        const cartProduct = target.closest(".cart__product");
        cartProducts.removeChild(cartProduct);
    }
});
