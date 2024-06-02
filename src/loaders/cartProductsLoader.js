import { getShoppingCart } from "../utilities/fakedb";

export const cartProducts = async () => {
    //fetch all products 
    const data = await fetch('products.json');
    const products = await data.json();

    //get stored cart and match product
    const storedProducts = []
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
        const storedCartProduct = products.find(pd => pd.id === id)
        if (storedCart){
            const quantity = storedCart[id];
            storedCartProduct.quantity = quantity;
            storedProducts.push(storedCartProduct)
        }
    }

    return storedProducts;  
}
