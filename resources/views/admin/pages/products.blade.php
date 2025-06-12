<x-app-layout :sidebar="$sidebar">
    <div class="p-6 text-gray-900">
        {{ __('Products') }}

        @include('admin.modals.products')

        <table class="table" id="tblProduct">
            <thead>
                <tr>
                    <th style="width: 2%;text-align: center;">
                        No
                    </th>
                    <th style="width: 10%;text-align: center;">
                        Nama
                    </th>
                    <th style="width: 10%;text-align: center;">
                        Type
                    </th>
                    <th style="width: 10%;text-align: center;">
                        Price
                    </th>
                    <th style="width: 10%;text-align: center;">
                        Stock
                    </th>
                    <th style="width: 10%;text-align: center;">
                        Estimation
                    </th>
                    <th style="width: 10%;text-align: center;">
                        Action
                    </th>
                </tr>
            </thead>
        </table>

    </div>


</x-app-layout>

<script src="{{ asset('assets/js/admin/product.js') }}"></script>

<script>
    initTblProduct();
    loadTblProduct(@json($data['products']));
</script>
