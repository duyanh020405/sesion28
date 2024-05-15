import React, { Component } from 'react';

interface Product {
    name: string;
    id: number;
    price: number;
}

interface Props {
    product: Product[];
}

class Products extends Component<Props> {
    render() {
        const { product } = this.props;
        return (
            <div>
                Products
                <ul>
                    {product.map((item, index) => {
                        return <li key={index}>Sản phẩm {item.name} giá {item.price}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Products;


