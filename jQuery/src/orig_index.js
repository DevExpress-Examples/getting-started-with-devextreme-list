$(function () {
    $("#list").dxList({
        dataSource: new DevExpress.data.DataSource({
            store: products,
            group: "Category"
        }),
        displayExpr: "Name",
        selectionMode: "single",
        grouped: true,
        searchEnabled: true,
        searchExpr: ["Name"],
        itemDragging: {
            allowReordering: true
        },
        allowItemDeleting: true
    });
});
