<template>
    <DxList
        :data-source="dataSource"
        display-expr="Name"
        :grouped="true"
        :search-enabled="true"
        search-expr="Name"
        :allow-item-deleting="true">
        <DxItemDragging
            :allow-reordering="true"
        />
    </DxList>
</template>

<script>
import DxList, { DxItemDragging } from "devextreme-vue/list";
import DataSource from "devextreme/data/data_source";
import { products } from './products';

export default {
    components: {
        DxList,
        DxItemDragging
    },
    data() {
        return {
            dataSource: new DataSource({
                store: products,
                group: "Category"
            })
        };
    }
};
</script>
