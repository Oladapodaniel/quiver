<script setup>
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
import create from '@/assets/create.svg'; 
import reel from '@/assets/reel.svg'; 
import post_stories from '@/assets/post_stories.svg';
import filter from '@/assets/filter.svg';
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import CommentCard from '@/components/CommentCard.vue';
import tiktok from "@/assets/tiktok.svg";
import youtube from "@/assets/youtube.svg";


const tabheaders = ['Comment', 'Post'];
const activeTab = ref(0)
const setActiveTab = (payload) => {
  activeTab.value = payload
}

const comments = [
  tiktok,
  youtube,
  tiktok,
  youtube,
  tiktok,
  youtube,
]

</script>

<template>
  <main>
    <div class="container mt-10 mx-auto">
      <div class="flex flex-wrap gap-3 sm:gap-7">
        <PrimaryButton 
          text="Create post" 
          class="md:px-[100px]"
          :icon="create"
        />
        <SecondaryButton 
          text="Post Reels" 
          class="px-[30px]"
          :icon="reel"
        />
        <SecondaryButton 
          text="Post stories" 
          class="px-[30px]"
          :icon="post_stories"
        />
      </div>
      
      <section class="mt-[50px]">
        <Tabs
          :tabHeaders="tabheaders"
          :activeTab="activeTab"
          @updateactivetab="setActiveTab"
        >
          <template #tab-content>
            <div>
              <div class="tab-content-1 pt-8" v-if="activeTab === 0">
                <div class="flex flex-wrap items-center gap-5">
                  <TextButton
                    text="All"
                  />
                  <TextButton
                    text="Newest comments"
                  />
                  <TextButton
                    text="Highest performance"
                  />
                  <TextButton
                    text="Lowest performance"
                  />
                  <PrimaryButton 
                    text="More Filters: LAST 60 DAYS" 
                    :icon="filter"
                  />
                </div>
                <section class="mt-[50px]">
        <div>
          <CommentCard 
            v-for="(item, index) in comments" 
            :item="item" 
            :key="index" 
            class="mt-5"
          />
        </div>
      </section>
              </div>
              <div v-else>
                <div class="text-body-text font-semibold text-sm mt-5">No Post Yet</div>
              </div>
            </div>
          </template>
        </Tabs>
      </section>
    </div>
  </main>
</template>
