let tblProduct;
let listProduct = [];

function initTblProduct() {
    tblProduct = new DataTable("#tblProduct", {
        data: listProduct,
        ordering: false,
        columns: [
            {
                data: null,
                class: "text-right",
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
                class: "text-center",
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
                class: "text-right",
                render: function (data, type, row, meta) {
                    return `${data}`;
                },
            },
            {
                data: "po_estimation",
                class: "text-center",
                render: function (data, type, row, meta) {
                    return data;
                },
            },
            {
                data: null,
                class: "text-center",
                render: function (data, type, row, meta) {
                    return `
                        <button type="button" class="btnViewProduct bg-cyan-600 p-1 pr-2 pl-2 text-xs rounded-md" data-id=${meta.row}><i class="fa fa-eye text-white"></i></button>
                        <button type="button" class="btnUpdateProduct bg-teal-500 p-1 pr-2 pl-2 text-xs rounded-md" data-id=${meta.row}><i class="fa fa-pencil text-white"></i></button>
                        <button type="button" class="btnDeleteProduct bg-red-500 p-1 pr-2 pl-2 text-xs rounded-md" data-id=${meta.row}><i class="fa fa-trash text-white"></i></button>
                    `;
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

$(document).on("click", ".btnViewProduct", function () {
    let id = $(this).data("id");
    let data = tblProduct.row(id).data();

    $('#default-modal').removeClass('hidden');
});

$(document).on("click", ".btnUpdateProduct", function () {
    let id = $(this).data("id");
    let data = tblProduct.row(id).data();
});

$(document).on("click", ".btnDeleteProduct", function () {
    let id = $(this).data("id");
    let data = tblProduct.row(id).data();
});
