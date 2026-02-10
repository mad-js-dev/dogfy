<script setup>
import IconLabel from '../../atoms/IconLabel/IconLabel.vue'

defineProps({
  to: String,
  text: String,
  leadingIcon: String,
  trailingIcon: String
})

const emit = defineEmits(['click'])
</script>

<template>
  <IconLabel 
    :leadingIcon="leadingIcon" 
    :trailingIcon="trailingIcon" 
    :label="text"
    @click="$emit('click')"
  />
</template>
