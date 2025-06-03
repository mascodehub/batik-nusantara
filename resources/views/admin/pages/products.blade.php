<x-app-layout :sidebar="$sidebar">
    <div class="p-6 text-gray-900">
        {{ __('Products') }}

        <table class="min-w-full mt-10 text-sm" id="tblProduct">
            <thead>
                <tr>
                    <th style="text-align: center;width: 2%">
                        No
                    </th>
                    <th style="text-align: center;width: 10%">
                        Nama
                    </th>
                    <th style="text-align: center;width: 10%">
                        Type
                    </th>
                    <th style="text-align: center;width: 10%">
                        Price
                    </th>
                    <th style="text-align: center;width: 10%">
                        Stock
                    </th>
                    <th style="text-align: center;width: 10%">
                        Estimation
                    </th>
                    <th style="text-align: center;width: 10%">
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
