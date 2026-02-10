<script setup lang="ts">
interface Props {
  modelValue?: boolean
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toggleSwitch = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}

const switchId = props.id || `switch-${Math.random().toString(36).substr(2, 9)}`
</script>

<template>
  <label 
    :for="switchId"
    class="m3-switch"
    :class="{ 'm3-switch--disabled': disabled }"
  >
    <input
      :id="switchId"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="m3-switch__input"
      @change="toggleSwitch"
      role="switch"
      :aria-checked="modelValue"
      :aria-disabled="disabled"
    />
    <span class="m3-switch__track">
      <span class="m3-switch__thumb"></span>
    </span>
    <span v-if="$slots.default" class="m3-switch__label">
      <slot></slot>
    </span>
  </label>
</template>

<style scoped lang="scss">
@use '../../../../assets/scss/tokens/_color-system.scss' as color;
@use '../../../../assets/scss/tokens/_shape.scss' as shape;

.m3-switch {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  user-select: none;
  
  &--disabled {
    cursor: default;
    pointer-events: none;
  }
}

.m3-switch__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  pointer-events: none;
}

.m3-switch__track {
  position: relative;
  width: 52px;
  height: 32px;
  background-color: color.$md-sys-color-surface-variant;
  border-radius: 16px;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  border: 2px solid color.$md-sys-color-outline;
}

.m3-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  background-color: color.$md-sys-color-surface;
  border-radius: 12px;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

// Checked state
.m3-switch__input:checked ~ .m3-switch__track {
  background-color: color.$md-sys-color-primary;
  border-color: color.$md-sys-color-primary;
}

.m3-switch__input:checked ~ .m3-switch__track .m3-switch__thumb {
  transform: translateX(20px);
  background-color: color.$md-sys-color-on-primary;
}

// Hover state
.m3-switch:hover .m3-switch__track:not(.m3-switch--disabled .m3-switch__track) {
  border-color: color.$md-sys-color-on-surface;
}

.m3-switch:hover .m3-switch__thumb:not(.m3-switch--disabled .m3-switch__thumb) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

// Focus state
.m3-switch__input:focus-visible ~ .m3-switch__track {
  border-color: color.$md-sys-color-primary;
  box-shadow: 0 0 0 2px rgba(103, 80, 164, 0.2);
}

// Disabled state
.m3-switch--disabled .m3-switch__track {
  background-color: color.$md-sys-color-surface-variant;
  border-color: color.$md-sys-color-surface-variant;
  opacity: 0.38;
}

.m3-switch--disabled .m3-switch__thumb {
  background-color: color.$md-sys-color-surface;
  opacity: 0.38;
  box-shadow: none;
}

.m3-switch--disabled .m3-switch__label {
  color: color.$md-sys-color-on-surface;
  opacity: 0.38;
}

.m3-switch__label {
  color: color.$md-sys-color-on-surface;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
</style>