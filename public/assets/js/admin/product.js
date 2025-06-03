let tblProduct;
let listProduct = [];

function initTblProduct() {
    tblProduct = new DataTable("#tblProduct", {
        data: listProduct,
        ordering: false,
        columns: [
            {
                data: null,
                class:'text-right',
                render: function (data, type, row, meta) {
                    return `${meta.row + 1}`;
                },
            },
            {
                data: "name",
                render: function (data, type, row, meta) {
                    return data;
                },
            },
            {
                data: "type",
                render: function (data, type, row, meta) {
                    return data;
                },
            },
            {
                data: null,
                class:'text-center',
                render: function (data, type, row, meta) {
                    return (
                        new Intl.NumberFormat("id-ID").format(data.price_min) +
                        " - " +
                        new Intl.NumberFormat("id-ID").format(data.price_max)
                    );
                },
            },
            {
                data: "stock",
                class:'text-right',
                render: function (data, type, row, meta) {
                    return `${data}`;
                },
            },
            {
                data: "po_estimation",
                class:'text-center',
                render: function (data, type, row, meta) {
                    return data;
                },
            },
            {
                data: null,
                render: function (data, type, row, meta) {
                    return "action";
                },
            },
        ],
    });
}

function loadTblProduct(products) {
    listProduct = products;

    tblProduct.clear();
    tblProduct.rows.add(listProduct);
    tblProduct.draw();
}
