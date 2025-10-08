<script setup lang="ts">
import type { Employee } from '../types';

import {
  DxList,
  DxItemDragging,
} from 'devextreme-vue/list';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import type { DxListTypes } from 'devextreme-vue/list';

const employees: Employee[] = [
  {
    ID: 1,
    Name: 'HD Video Player',
    Category: 'Video Players',
  },
  {
    ID: 3,
    Name: 'SuperPlasma 50',
    Category: 'Televisions',
  },
  {
    ID: 4,
    Name: 'SuperLED 50',
    Category: 'Televisions',
  },
  {
    ID: 5,
    Name: 'SuperLED 42',
    Category: 'Televisions',
  },
  {
    ID: 6,
    Name: 'SuperLCD 55',
    Category: 'Televisions',
  },
  {
    ID: 7,
    Name: 'SuperLCD 42',
    Category: 'Televisions',
  },
  {
    ID: 8,
    Name: 'SuperPlasma 65',
    Category: 'Televisions',
  },
  {
    ID: 9,
    Name: 'SuperLCD 70',
    Category: 'Televisions',
  },
  {
    ID: 10,
    Name: 'DesktopLED 21',
    Category: 'Monitors',
  },
  {
    ID: 12,
    Name: 'DesktopLCD 21',
    Category: 'Monitors',
  },
  {
    ID: 13,
    Name: 'DesktopLCD 19',
    Category: 'Monitors',
  },
  {
    ID: 14,
    Name: 'Projector Plus',
    Category: 'Projectors',
  },
  {
    ID: 15,
    Name: 'Projector PlusHD',
    Category: 'Projectors',
  },
  {
    ID: 17,
    Name: 'ExcelRemote IR',
    Category: 'Automation',
  },
  {
    ID: 18,
    Name: 'ExcelRemote BT',
    Category: 'Automation',
  },
  {
    ID: 19,
    Name: 'ExcelRemote IP',
    Category: 'Automation',
  },
];

const dataSource = new DataSource({
  store: employees,
  group: 'Category',
});

const handleSelectionChanged = (e: DxListTypes.SelectionChangedEvent): void => {
  const selectedItem = e.addedItems[0] as Employee;
  if (selectedItem) {
    notify(`Selected: ${selectedItem.Name}`, 'info', 2000);
  }
};
</script>

<template>
  <div id="app-container">
    <DxList
      :data-source="dataSource"
      display-expr="Name"
      selection-mode="single"
      :grouped="true"
      :search-enabled="true"
      :search-expr="['Name']"
      :allow-item-deleting="true"
      @selection-changed="handleSelectionChanged"
    >
      <DxItemDragging :allow-reordering="true"/>
    </DxList>
  </div>
</template>

<style scoped>
#app-container {
  width: 900px;
  position: relative;
  margin: 50px auto;
  padding: 10px;
  border: 1px solid #ddd;
}

#list {
  margin-top: 10px;
}
</style>
