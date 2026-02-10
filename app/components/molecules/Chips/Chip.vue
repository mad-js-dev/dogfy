<script setup lang="ts">
import { computed } from 'vue'
import IconLabel from '../../atoms/IconLabel/IconLabel.vue'

interface Props {
  label?: string
  disabled?: boolean
  selected?: boolean
  avatar?: string
  icon?: string
  closable?: boolean
  elevated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false,
  selected: false,
  closable: false,
  elevated: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  close: [event: MouseEvent]
}>()

const chipClasses = computed(() => [
  'md3-chip',
  {
    'md3-chip--disabled': props.disabled,
    'md3-chip--selected': props.selected,
    'md3-chip--elevated': props.elevated,
    'md3-chip--has-avatar': props.avatar,
    'md3-chip--has-icon': props.icon,
    'md3-chip--closable': props.closable,
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const handleClose = (event: MouseEvent) => {
  event.stopPropagation()
  if (!props.disabled) {
    emit('close', event)
  }
}
</script>

<template>
  <div :class="chipClasses" @click="handleClick" role="button" tabindex="0">
    <span v-if="avatar" class="md3-chip__avatar">
      {{ avatar.charAt(0).toUpperCase() }}
    </span>
    
    <IconLabel 
      v-if="icon" 
      :icon="icon" 
      class="md3-chip__icon-label"
    />
    
    <span class="md3-chip__label">
      <slot>{{ label }}</slot>
    </span>
    
    <button 
      v-if="closable && !disabled" 
      class="md3-chip__close" 
      @click="handleClose"
      type="button"
      aria-label="Remove chip"
    >
      <svg class="md3-chip__close-icon" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
// Import Material Design 3 tokens
@use 'sass:map';
@use '../../../styles/_index.scss' as md3;

// Base chip styles using MD3 tokens
.md3-chip {
  @include md3.md-comp-chip-base;
  @include md3.md-semantic-chip-assist;
  
  // Use semantic spacing tokens
  padding: 0 md3.$md-semantic-spacing-chip-padding-horizontal;
  margin: md3.$md-semantic-spacing-chip-margin;
  
  // Use semantic typography tokens
  @include md3.md-semantic-typography-chip;
  
  // Use shape tokens
  @include md3.md-shape-corner-small;
  
  // Use motion tokens
  @include md3.md-motion-transition-emphasized-short;
}

// Elevated chip variant
.md3-chip--elevated {
  @include md3.md-comp-chip-elevated;
  @include md3.md-semantic-chip-assist;
  
  &:hover:not(.md3-chip--disabled) {
    @include md3.md-elevation-level2;
  }
  
  &:focus:not(.md3-chip--disabled) {
    @include md3.md-elevation-level2;
  }
  
  &:active:not(.md3-chip--disabled) {
    @include md3.md-elevation-level1;
  }
}

// Selected state
.md3-chip--selected {
  @include md3.md-semantic-chip-filter;
  
  &.selected {
    @include md3.md-semantic-chip-filter;
    
    &:hover:not(.md3-chip--disabled) {
      background-color: md3.$md-semantic-color-hover-secondary;
    }
    
    &:focus:not(.md3-chip--disabled) {
      background-color: md3.$md-semantic-color-focus-secondary;
    }
    
    &:active:not(.md3-chip--disabled) {
      background-color: md3.$md-semantic-color-pressed-secondary;
    }
  }
}

// Disabled state
.md3-chip--disabled {
  background-color: md3.$md-semantic-color-disabled-bg;
  color: md3.$md-semantic-color-disabled-content;
  border-color: md3.$md-semantic-color-disabled-border;
  cursor: default;
  pointer-events: none;
  
  .md3-chip__avatar {
    background-color: md3.$md-semantic-color-disabled-border;
    color: md3.$md-semantic-color-disabled-content;
  }
  
  .md3-chip__icon-label :deep(.icon) {
    color: md3.$md-semantic-color-disabled-content;
  }
  
  .md3-chip__close-icon {
    fill: md3.$md-semantic-color-disabled-content;
  }
}

// Avatar variant
.md3-chip--has-avatar {
  @include md3.md-comp-chip-with-avatar;
  padding-left: md3.$md-semantic-spacing-chip-with-avatar-padding-horizontal;
  height: md3.$md-comp-chip-with-avatar-container-height;
}

// Icon variant
.md3-chip--has-icon {
  padding-left: md3.$md-comp-chip-with-leading-icon-leading-space;
}

// Closable variant
.md3-chip--closable {
  padding-right: md3.$md-comp-chip-with-trailing-icon-trailing-space;
}

// Avatar with close button
.md3-chip--has-avatar.md3-chip--closable {
  padding-right: md3.$md-comp-chip-with-avatar-with-trailing-icon-trailing-space;
}

// Avatar styles
.md3-chip__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: md3.$md-comp-chip-avatar-size;
  height: md3.$md-comp-chip-avatar-size;
  border-radius: 50%;
  background-color: md3.$md-comp-chip-avatar-background-color;
  color: md3.$md-comp-chip-avatar-color;
  font-size: map.get(md3.$md-semantic-typography-label-small, "font-size");
  font-weight: map.get(md3.$md-semantic-typography-label-small, "font-weight");
  margin-right: md3.$md-semantic-spacing-chip-gap;
}

// Icon label container
.md3-chip__icon-label {
  margin-right: md3.$md-semantic-spacing-chip-gap;
}

.md3-chip__icon-label :deep(.icon) {
  width: md3.$md-comp-chip-icon-size;
  height: md3.$md-comp-chip-icon-size;
  color: md3.$md-comp-chip-icon-color;
}

.md3-chip--selected .md3-chip__icon-label :deep(.icon) {
  color: md3.$md-comp-chip-selected-icon-color;
}

.md3-chip__icon-label :deep(.image-icon) {
  @include md3.md-shape-corner-extra-small;
}

// Label styles
.md3-chip__label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

// Close button styles
.md3-chip__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  margin-left: md3.$md-semantic-spacing-icon-compact;
  @include md3.md-motion-transition-emphasized-short;
  
  &:hover {
    background-color: md3.$md-semantic-color-hover-surface;
    background-color: md3.$md-semantic-color-hover-surface;
  }
  
  &:active {
    background-color: md3.$md-semantic-color-pressed-surface;
  }
}

.md3-chip__close-icon {
  width: md3.$md-comp-chip-icon-size;
  height: md3.$md-comp-chip-icon-size;
  fill: md3.$md-comp-chip-icon-color;
}

.md3-chip--selected .md3-chip__close-icon {
  fill: md3.$md-comp-chip-selected-icon-color;
}

// State layer
.md3-chip::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: md3.$md-semantic-color-ripple-primary;
  opacity: 0;
  border-radius: inherit;
  @include md3.md-motion-transition-emphasized-short;
}

.md3-chip:hover::before {
  opacity: md3.$md-semantic-color-ripple-primary;
}

.md3-chip:focus-visible::before {
  opacity: md3.$md-semantic-color-focus-primary;
}

.md3-chip:active::before {
  opacity: md3.$md-semantic-color-pressed-primary;
}

// Ripple effect for touch
@media (pointer: coarse) {
  .md3-chip::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: md3.$md-semantic-color-ripple-primary;
    transform: translate(-50%, -50%);
    transition: width md3.$md-sys-motion-duration-medium-2 md3.$md-sys-motion-easing-standard, 
                height md3.$md-sys-motion-duration-medium-2 md3.$md-sys-motion-easing-standard;
  }
  
  .md3-chip:active::after {
    width: 200px;
    height: 200px;
  }
}
</style>