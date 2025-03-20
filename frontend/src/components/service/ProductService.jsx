export const ProductService = {
    getProductsData() {
        const Animals = useSelector((state) => state.animal.animalist);

        return [
          {
            id: "1000",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5,
          },
          {
            id: "1001",
            code: "nvklal433",
            name: "Black Wayytch",
            description: "Product Description",
            image: "/Chat2.jpg",
            price: 72,
            category: "Accessories",
            quantity: 61,
            inventoryStatus: "INSTOCK",
            rating: 4,
          },
          {
            id: "1002",
            code: "zz21cz3c1",
            name: "Blue Band",
            description: "Product Description",
            image: "blue-band.jpg",
            price: 79,
            category: "Fitness",
            quantity: 2,
            inventoryStatus: "LOWSTOCK",
            rating: 3,
          },
          {
            id: "1003",
            code: "244wgerg2",
            name: "Blue T-Shirt",
            description: "Product Description",
            image: "blue-t-shirt.jpg",
            price: 29,
            category: "Clothing",
            quantity: 25,
            inventoryStatus: "INSTOCK",
            rating: 5,
          },

    



        ];
    },



    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

