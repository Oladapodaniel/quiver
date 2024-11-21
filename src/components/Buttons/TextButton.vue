<script setup>

const { text, icon } = defineProps(['text', 'icon'])
</script>

<template>
    <button class="bg-[#F0EFF2] hover:bg-[rgba(240, 239, 242, 0.9)] text-[#230A4C] py-3 px-4 text-sm rounded-lg">
        <div class="flex item-center gap-2">
            <img :src="icon" v-if="icon"/>
            <span class="font-medium">{{ text }}</span>
        </div>
    </button>
</template>