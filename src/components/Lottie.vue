<template>
  <Page>
    <!-- <ActionBar>
      <NavigationButton text="Home" />
    </ActionBar> -->
    <StackLayout class="bg-green-100">
      <Label :text="`Hello World ${counter.count}`" @tap="$navigateTo(Details)" />
      <LottieView
        class="w-full h-full"
        src="~/assets/lottie/loading.lottie"
        loop
        :speed="speed"
        @loaded="onLoaded"
      />
    </StackLayout>
  </Page>
</template>

<script lang="ts" setup>
import { EventData } from '@nativescript/core'
import type { LottieView } from '@nativescript-community/ui-lottie'
import { $navigateBack, inject, nextTick, onUnmounted, ref } from 'nativescript-vue'
import Details from './Details.vue'
import { useCounterStore } from '~/stores/counter'
import { sy } from '~/shared'

const s = inject(sy)
const counter = useCounterStore()

console.log('[counter]', s)

const speed = ref(0.5)
let intervalId: NodeJS.Timer
let timeoutId: NodeJS.Timer

const onLoaded = (e: EventData) => {
  console.log('[on:loaded-view]')
  const view = e.object as LottieView

  console.log([view.autoPlay, view.src, view.speed, view.progress, view.duration])

  timeoutId = setTimeout(() => view.autoPlay = true, 5000)

  // intervalId = setInterval(() => {
  //   view.speed = (view.speed as number) + 0.5
  //   speed.value += 0.1
  //   nextTick(() => {
  //     // console.log([view.autoPlay, view.src, view.speed, view.progress, view.duration])
  //   })
  // }, 5000)
}

onUnmounted(() => {
  clearInterval(intervalId)
  clearTimeout(timeoutId)
  console.log('[as:unmounted-lottie]')
})
</script>
