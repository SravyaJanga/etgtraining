import React from "react";
function NameList(){
    const names=['sravya','janga','somi']
    const nameList = names.map(name=><h1>{name}</h1>)
    const Product=[{id:1, name:'TV',rate:567},
                    {id:2,name:'mobile',rate:456},
                    {id:3,name:'laptop',rate:678}]
    const productList = Product.map(product=><h1>{product.id} {product.name}</h1>)
    return(
        <div>
            { nameList }
            { productList}
        </div>
    )
}
export default NameList