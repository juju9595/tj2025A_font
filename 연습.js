function getProducts(){
    const products = localStorage.getItem('products');

    if( products == null){
        products = [];
    }esle{
        products = JSON.parse(products)
    }
    return products;
}
function setProducts(products){
    localStorage.setItem('products',JSON.stringify(products))
    
}