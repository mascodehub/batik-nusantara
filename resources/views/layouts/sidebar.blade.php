@php
    $main_routes = [
        ['name' => 'Dashboard', 'route' => route('admin.index'), 'icon' => 'fa fa-home'],
        ['name' => 'Products', 'route' => route('admin.products'), 'icon' => 'fa fa-shirt'],
        ['name' => 'Orders', 'route' => route('admin.orders'), 'icon' => 'fa fa-cart-shopping'],
        ['name' => 'Customers', 'route' => route('admin.customers'), 'icon' => 'fa fa-users'],
        ['name' => 'Reports', 'route' => route('admin.reports'), 'icon' => 'fa fa-newspaper'],
    ];

    $setting_routes = [
        ['name' => 'Notification', 'route' => route('admin.index'), 'icon' => 'fa fa-bell'],
        ['name' => 'Settings', 'route' => route('admin.index'), 'icon' => 'fa fa-gear'],
    ];
@endphp

<sidebar x-data="{ open: false }" class="bg-stone-900 border-b border-stone-900">
    <!-- Primary Navigation Menu -->
    <ul>
        <li class="bg-stone-900 shrink-0 flex items-center h-16 px-3">
            <a href="{{ route('admin.index') }}" class="flex items-center">
                <x-application-logo class="block h-9 w-auto fill-current text-gray-800" /> &nbsp;
                {{-- Batik Nusantara --}}
            </a>
        </li>
    </ul>
    <ul x-data='{ 
        main_routes: @json($main_routes), 
        sidebar: "{{ $sidebar }}", 
        ready: false 
    }'
        x-init="setTimeout(() => ready = true, 50)">

        <template x-for="route in main_routes">
            <li class="fill-current text-white bg-stone-900 pl-2 py-2 h-12">
                <a :href="route.route">
                    <div x-show="ready" x-transition:enter="transition ease-in-out duration-150"
                        x-transition:enter-start="translate-x-10 opacity-0"
                        x-transition:enter-end="translate-x-0 opacity-100"
                        class="flex w-full h-full items-center space-x-4 hover:rounded-md px-3 hover:text-stone-900 hover:bg-gray-50 transition duration-200 ease-in-out"
                        :class="route.name === sidebar ? 'text-stone-900 bg-gray-50 rounded-md' : ''">
                        <i :class="route.icon"></i>
                        <span x-text="route.name"></span>
                    </div>
                </a>
            </li>
        </template>
    </ul>

    <hr class="mt-2 ml-2 mb-2">

    <ul x-data='{ 
        setting_routes: @json($setting_routes), 
        sidebar: "{{ $sidebar }}", 
        ready: false 
    }'
        x-init="setTimeout(() => ready = true, 50)">
        <template x-for="route in setting_routes">
            <li class="fill-current text-white bg-stone-900 pl-2 py-2 h-12">
                <a :href="route.route">
                    <div x-show="ready" x-transition:enter="transition ease-in-out duration-150"
                        x-transition:enter-start="translate-x-10 opacity-0"
                        x-transition:enter-end="translate-x-0 opacity-100"
                        class="flex w-full h-full items-center space-x-4 hover:rounded-md px-3 hover:text-stone-900 hover:bg-gray-50 transition duration-200 ease-in-out"
                        :class="route.name === sidebar ? 'text-stone-900 bg-gray-50 rounded-md' : ''">
                        <i :class="route.icon"></i>
                        <span x-text="route.name"></span>
                    </div>
                </a>
            </li>
        </template>
    </ul>

    <ul x-data='{ 
        ready: false 
    }' x-init="setTimeout(() => ready = true, 50)">

        <li class="fill-current text-white bg-stone-900 pl-2 py-2 h-12">
            <a href="{{ route('admin.logout') }}">
                <div x-show="ready" x-transition:enter="transition ease-in-out duration-150"
                    x-transition:enter-start="translate-x-10 opacity-0"
                    x-transition:enter-end="translate-x-0 opacity-100"
                    class="flex w-full h-full items-center space-x-4 hover:rounded-md px-3 hover:text-stone-900 hover:bg-gray-50 transition duration-200 ease-in-out">
                    <i class="fa fa-right-from-bracket"></i>
                    <span>Log Out</span>
                </div>
            </a>
        </li>
    </ul>
</sidebar>
