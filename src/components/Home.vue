<script lang="ts" setup>
import {
  computed,
  onMounted,
  onUnmounted,
  $navigateTo,
} from 'nativescript-vue'
import { useCounterStore } from '~/stores/counter'
import Details from './Details.vue'

const counter = useCounterStore()

const message = computed(() => {
  return `Blank {N}-Vue app: ${counter.count}`
})

function logMessage() {
  console.log('You have tapped the message!')
}

let interval: any

onMounted(() => {
  console.log('mounted')
  interval = setInterval(counter.increment, 1000)
})

onUnmounted(() => {
  console.log("unmounted")
  clearInterval(interval)
})
</script>

<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout rows="*, auto, auto, auto, *" class="px-4">
        <Label
          row="1"
          class="text-xl align-middle text-center text-gray-500"
          :text="message"
          @tap="logMessage"
        />

        <Button
          row="2"
          @tap="$navigateTo(Details)"
          class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
          horizontalAlignment="center"
          testID="actionBtn"
        >
          View Details
        </Button>

        <Label row="3" class="mt-4 text-center" text="Welcome" />
      </GridLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
