 function getProducts(){
    const products = localStorage.getItem('products');

    if(products == null){
        products = [];
    }else{
        products=JSON.parse(products);
    }
    return products;
 }
 
 function setProducts(products){
    localStorage.setItem('products', JSON.stringify(products));
 }

 function productAdd(){

    const pnameInput = document.querySelector('#pameInput');
    const ppriceInput = document.querySelector('#ppriceInput');
    const pcontentInput = document.querySelector('#pcontentInput');
    const pimgInput = document.querySelector('#pimgInput');

    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pcontent = pcontentInput.value;
    const pimg = pimgInput.fils[0];

    const products = getProducts();
    let pcode = products.length == 0? 1 : products[products.length -1].pcode +1;

    const obj = {
        pcode :pcode,
        pname:pname,
        pprice: Number(pprice),
        pcontent:pcontent,
        pimg : pimg? URL.createObjectURL(pimg) : 'https://placehold.co/100x100'

    }
    products.push(obj);
    alert('제품을 성공적으로 등록하였습니다.')
    setProducts(products);
    productsPrint();
 }

productsPrint();
function productsPrint(){
    const productBody = document.querySelector('#productBody');

    let products = getProducts();

    let html = '';

    for(let i=0; i < products.length; i++){
        const product = products[i];

        html += `<tr>
                    <td><img src="${product.pimg}" /></td>
                    <td>${product.pname}</td>
                    <td>${product.pprice}</td>
                    <td>${product.pcontent}</td>
                    <td><button class="btnDelete" onclick="productDelete(${product.pcode})">삭제</button></td>
                </tr>`
    }
    productBody.innerHTML = html;
}

function productDelete(pcode){
    let products = getProducts();

    for(let i=0; i < products.length; i++){
        if(products[i].pcode == pcode){
            products.splice(i, 1);

            alert('제품을 삭제하였습니다.')
            setProducts(products);
            productsPrint();
            return;
        }
    }
    alert('오류:삭제할 제품을 찾지 못했습니다.')
}