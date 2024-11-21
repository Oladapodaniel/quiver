<script setup>

const { text, icon } = defineProps(['text', 'icon'])
</script>

<template>
    <button class="bg-primary hover:bg-primary-500 text-white py-3 px-4 text-sm rounded-lg">
        <div class="flex item-center gap-2">
            <img :src="icon" v-if="icon" />
            <span class="font-medium">{{ text }}</span>
        </div>
    </button>
</template>