import { Component } from "@angular/core";
import DataSource from "devextreme/data/data_source";
import { AppService, Product } from "./app.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    dataSource: DataSource;
    products: Product[];

    constructor(private service: AppService) {
        this.products = service.getProducts();
        this.dataSource = new DataSource({
            store: this.products,
            group: "Category"
        });
    }
}
