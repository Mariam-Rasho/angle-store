import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
        cart: [],
    }),

    actions: {
        addToCart(product, color) {
            // toast("success adding to cart", { autoClose: 1000, });
            const existingProduct = this.cart.find(item => item.id === product.id && item.color === color);
            // toast("success adding to cart", { autoClose: 1000, });
            if (existingProduct) {
                toast.warning(`you added it before to cart`, { autoClose: 1000, })
            } else {
                toast("success adding to cart", { autoClose: 1000, }),
                    // product.count = 1;
                    this.cart.push({ product: product, color: color, count: 1, img: product.img, price: product.price, title: product.title, id: Math.round(Math.random() * this.products.length) });
                // existingProduct.count++;
            }
        },
        incrementQ(product) {
            // toast.warning("you added it before to cart", { autoClose: 1000, }),
            product.count++;
        },
        decrementQ(product) {
            // toast.warning("you added it before to cart", { autoClose: 1000, }),
            product.count--;
            if (product.count == 0) {
                this.removeFromCart(product.id)
            }
        },
        removeFromCart(id) {
            const productIndex = this.cart.findIndex(item => item.id === id);
            this.cart = this.cart.filter((item) =>
                item.id !== id)
            console.log(this.cart[productIndex].count)
        }
    },
    persist: true
})