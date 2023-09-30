import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    render() {
        const button = new ButtonComponent(this.parent)
        button.render()
        const productCard = new ProductCardComponent(this.parent)
        productCard.render()
    }
}