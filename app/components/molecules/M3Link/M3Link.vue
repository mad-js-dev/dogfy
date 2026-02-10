<script setup>
import { defineComponent, h } from 'vue'
import IconLabel from '../../atoms/IconLabel/IconLabel.vue'

const M3LinkComponent = defineComponent({
  props: ['to', 'text', 'leadingIcon', 'trailingIcon'],
  components: { IconLabel },
  render() {
    return h(IconLabel, { 
      leadingIcon: this.leadingIcon, 
      trailingIcon: this.trailingIcon, 
      label: this.text 
    })
  } 
})

defineProps({
  to: String,
  text: String,
  leadingIcon: String,
  trailingIcon: String
})
</script>

<template>
  <component :is="M3LinkComponent" :to="to" :text="text" :leadingIcon="leadingIcon" :trailingIcon="trailingIcon" />
</template>
