import React from "react";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import List, { ItemDragging } from "devextreme-react/list";
import { products } from "./products";
import DataSource from "devextreme/data/data_source";

const dataSource = new DataSource({
    store: products,
    group: "Category"
});

const App = () => {
    return (
        <List
            dataSource={dataSource}
            displayExpr="Name"
            grouped={true}
            searchEnabled={true}
            searchExpr="Name"
            allowItemDeleting={true}>
            <ItemDragging allowReordering={true} />
        </List>
    );
};
export default App;
