<script lang="ts" setup>
import { EventData, TextField as NSTextField } from '@nativescript/core'
import { $navigateTo, computed, onMounted, onUnmounted, ref } from 'nativescript-vue'
import { useCounterStore } from '../stores/counter'
import Details from './Details.vue'
import Docker from './Docker.vue'
import Parallax from './Parallax.vue'

const counter = useCounterStore()

const message = computed(() => {
  return `Blank {N}-Vue app: ${counter.count}`
})

function logMessage() {
  console.log('You have tapped the message!')
}

let interval: any

const email = ref<string>('hello world')

onMounted(() => {
  console.log('mounted')
  interval = setInterval(counter.increment, 10000)
})

onUnmounted(() => {
  console.log("unmounted")
  clearInterval(interval)
})

const onInputChange = (e: EventData) => {
  const field = e.object as NSTextField

  email.value = field.text
}

const onTap = () => {
  import('./Lottie.vue')
    // .then(v => $showModal(v.default, {props: {title: 'Loki'}}))
    // .then(v => console.log('[modal:r]', v))
    // .catch(console.error)
    .then(v => $navigateTo(v.default, {props: {title: 'Loki'}}))
}
</script>

<template>
  <Frame>
    <Page>
      <ActionBar backgroundColor="red">
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout rows="*, auto, auto, auto, *" class="px-4">
        <Label
          row="1"
          class="text-xl align-middle text-center text-gray-500"
          testID="messageLabel"
          :text="message"
          @tap="logMessage"
        />

        <Button
          row="2"
          @tap="onTap"
          class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
          horizontalAlignment="center"
          testID="actionBtn"
        >
          View Details
        </Button>

        <Docker v-if="(counter.count % 2) == 0" class="mt-4" msg="Modulu" />

        <StackLayout row="3">
          <Label class="mt-4 text-center" :text="`Welcome ${email}`" />
          <TextField :text="email" hint="Email" class="py-2 ml-2" @textChange="onInputChange" />
          <Docker class="mt-4" msg="Hello World" />
        </StackLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
