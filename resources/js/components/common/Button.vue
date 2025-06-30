<template>
    <button
        :class="[
            'px-4 py-2 rounded transition-colors duration-200',
            variantClasses,
        ]"
        @click="(event) => $emit('click', event)"
    >
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    variant: {
        type: String,
        default: "primary", // primary, secondary, danger, outline
    },
});

const variantClasses = computed(() => {
    switch (props.variant) {
        case "primary":
            return "bg-blue-600 text-white hover:bg-blue-700";
        case "secondary":
            return "bg-gray-200 text-gray-800 hover:bg-gray-300";
        case "danger":
            return "bg-red-600 text-white hover:bg-red-700";
        case "outline":
            return "border border-blue-600 text-blue-600 hover:bg-blue-50";
        default:
            return "bg-blue-600 text-white hover:bg-blue-700";
    }
});

const emit = defineEmits(["click"]);
</script>
