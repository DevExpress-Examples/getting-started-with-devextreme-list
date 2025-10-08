import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import List, { ItemDragging } from 'devextreme-react/list';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import type { ListTypes } from 'devextreme-react/list';
import { products, type Product } from './products';

const dataSource = new DataSource({
  store: products,
  group: 'Category',
});

const searchExpr = ['Name'];

function App(): JSX.Element {
  const onSelectionChanged = useCallback((e: ListTypes.SelectionChangedEvent) => {
    const selectedItem = e.addedItems[0] as Product;
    if (selectedItem) {
      notify(`Selected: ${selectedItem.Name}`, 'info', 2000);
    }
  }, []);

  return (
    <div id="app-container">
      <List
        dataSource={dataSource}
        displayExpr="Name"
        grouped={true}
        searchEnabled={true}
        searchExpr={searchExpr}
        allowItemDeleting={true}
        onSelectionChanged={onSelectionChanged}
      >
        <ItemDragging allowReordering={true} />
      </List>
    </div>
  );
}

export default App;
