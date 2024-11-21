<script setup>
const { tabHeaders, activeTab } = defineProps(['tabHeaders', 'activeTab']);
const emit = defineEmits(['updateactivetab'])

</script>


<template>
    <div class="">
        <ul class="flex border-b">
            <li class="mr-6" v-for="(item, index) in tabHeaders" :key="index">
                <button @click="emit('updateactivetab', index)"
                    :class="['py-2 font-semibold', { 'text-primary border-b-2 border-primary': activeTab === index, 'text-gray-600 hover:text-primary': activeTab !== index }]">
                    {{ item }}
                </button>
            </li>
        </ul>
        <div>
            <slot name="tab-content"></slot>
        </div>
    </div>
</template>