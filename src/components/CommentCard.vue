<script setup>
import social_image from "@/assets/social_image.png";
import avatar from "@/assets/avatar.png";
import Like from "./icons/Like.vue";
import Reply from "./icons/Reply.vue";
import Comment from "./icons/Comment.vue";
import Share from "./icons/Share.vue";
import View from "./icons/View.vue";
import Badge from "./icons/Badge.vue";

const { item } = defineProps(['item'])
</script>

<template>
    <div class="bg-white p-7 flex flex-col md:flex-row gap-8">
        <div class="w-[153px] relative">
            <img :src="item" alt="tiktok" width="32" class="absolute right-3 top-3" />
            <img :src="social_image" alt="social_image" width="153" />
            <div class="mt-3">
                <div class="flex gap-2">
                    <div class="flex">
                        <Like
                        size="12"
                        color="#594D61"
                        />
                        <span class="text-body-text text-[10px] font-semibold">20.5k</span>
                    </div>
                    <div class="flex">
                        <Share
                        size="13"
                        color="#594D61"
                        />
                        <span class="text-body-text text-[10px] font-semibold">100.5k</span>
                    </div>
                    <div class="flex">
                        <View
                        size="13"
                        color="#594D61"
                        />
                        <span class="text-body-text text-[10px] font-semibold">10.5k</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex gap-4">
                <img :src="avatar" alt="avatar" class="w-[40px] h-[40px]" />
                <div>
                    <div class="flex flex-wrap gap-3">
                        <div>
                            <div class="text-[#0C0C0E]">Jerry Barry</div>
                        <div class="text-xs text-body-text">1 day ago</div>
                        </div>
                        <div class="flex">
                            <div class="flex items-center bg-[#F4F3F7] h-[20px] rounded-full px-2">
                                <Badge
                                size="10"
                                color="#594D61"
                                />
                                <div class="text-body-text text-[10px]">&nbsp;Top fan</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 text-body-text text-sm sm:text-[16px] leading-6">
                Came across this gem It was a pleasure meeting one of our members
                @Vijay Gupta at RSA a few weeks ago! I hope to meet more of
                you as we continue to grow
            </div>
            <div class="mt-5">
                <div class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-1">
                        <span class="text-xs font-semibold text-body-text">15 Like</span>
                        <Like 
                          size="12" 
                          color="#594D61" 
                        />
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-xs font-semibold text-body-text">6 Replies</span>
                        <Reply 
                          size="12" 
                          color="#594D61" 
                        />
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-xs font-semibold text-body-text">Reply Comment</span>
                        <Comment 
                          size="12" 
                          color="#594D61" 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>