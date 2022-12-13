<script lang="ts" setup>
import { ref, $navigateBack } from 'nativescript-vue'
import { useCounterStore } from '~/stores/counter'

const counter = useCounterStore()

const items = ref(
  Array(1000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`)
)
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto, auto, *">
      <Label
        text="Go Back"
        @tap="$navigateBack"
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
        testID="backBtn"
      />

      <Label
        row="1"
        :text="`I came in at ${counter.count}`"
        class="text-center mt-4"
      />

      <ContentView row="2" class="bg-[#65adf1] rounded-t-3xl">
        <ListView :items="items" separatorColor="transparent" class="bg-transparent">
          <template #default="{ item }">
            <GridLayout columns="*, auto" class="px-4">
              <Label :text="item" class="text-3xl py-3 text-white" />
              <ContentView col="1" class="w-5 h-5 rounded-full bg-white" />
            </GridLayout>
          </template>
        </ListView>
      </ContentView>
    </GridLayout>
  </Page>
</template>
