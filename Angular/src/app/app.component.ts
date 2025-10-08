import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import { DxListTypes } from 'devextreme-angular/ui/list';
import { Product } from './app.types';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: DataSource;

  products: Product[];

  constructor(private readonly service: AppService) {
    this.products = service.getProducts();
    this.dataSource = new DataSource({
      store: this.products,
      group: 'Category',
    });
  }

  onSelectionChanged(e: DxListTypes.SelectionChangedEvent): void {
    const selectedItem = e.addedItems[0] as Product;
    if (selectedItem) {
      notify(`Selected: ${selectedItem.Name}`, 'info', 2000);
    }
  }
}
