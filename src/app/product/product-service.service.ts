import { Injectable } from "@angular/core";
import { productInterface } from "./productInterface";
@Injectable()
export class ProductService {
    products: productInterface[] = [{ id: 1, name: 'product 1', price: 110, description: 'product1 text description' },
    { id: 2, name: 'product 2', price: 120, description: 'product2 text description' },
    { id: 3, name: 'product 3', price: 130, description: 'product3 text description' },];

    getList() {
        return this.products;
    }

    getFiltered(key: string): productInterface[] {
        return this.products.filter(x => x.name.toLocaleLowerCase().includes(key.toLocaleLowerCase()) || x.description.toLocaleLowerCase().includes(key.toLocaleLowerCase()));
    }

    ascPriceSort(): productInterface[] {
        let tempList = [...this.products];
        return tempList.sort((a, b) => a.price - b.price);
    }

    descPriceSort() : productInterface[]{
        let tempList = [...this.products];
        return tempList.sort((a, b) => b.price - a.price);
    }

    getLowerPriceProduct() : productInterface{
        return this.products.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    }

    getHigherPriceProduct() : productInterface{
        return this.products.reduce((prev, curr) => prev.price < curr.price ? curr : prev);
    }
}