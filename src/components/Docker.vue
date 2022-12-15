<script lang="ts" setup>
defineProps<{ msg: string, onClick?: Function }>()
</script>

<template>
  <FlexboxLayout flexDirection="column">
    <Label class="text-center" :text="msg" testID="messageLabel" />
    <Button text="hello" testID="helloBtn" @tap="onClick" />
  </FlexboxLayout>
</template>
