<script setup lang="ts">
import IconLabel from '../../atoms/IconLabel/IconLabel.vue'
import M3Link from '../../molecules/M3Link/M3Link.vue'

interface Props {
  variant?: 'small' | 'medium' | 'large'
  headline?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'small',
  headline: '',
  title: ''
})

const emit = defineEmits<{
  'leading-icon-click': []
}>()

const handleLeadingIconClick = () => {
  emit('leading-icon-click')
}
</script>

<template>
  <header 
    class="m3-app-bar"
    :class="`m3-app-bar--${variant}`"
  >
    <!-- Leading Slot -->
    <div 
      v-if="$slots.leading"
      class="m3-app-bar__leading"
      @click="handleLeadingIconClick"
    >
      <slot name="leading" />
    </div>

    <!-- Title Section -->
    <div class="m3-app-bar__title-section">
      <h1 v-if="headline" class="m3-app-bar__headline">
        {{ headline }}
      </h1>
      <h2 v-if="title" class="m3-app-bar__title">
        {{ title }}
      </h2>
    </div>

    <!-- Trailing Slot -->
    <div 
      v-if="$slots.trailing"
      class="m3-app-bar__trailing"
    >
      <slot name="trailing" />
    </div>

    <!-- Default Slot (for backward compatibility) -->
    <div v-if="$slots.default" class="m3-app-bar__custom-content">
      <slot />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../../../../assets/scss/tokens/_color-system.scss' as color;
@use '../../../../assets/scss/tokens/_shape.scss' as shape;
@use '../../../../assets/scss/tokens/_elevation.scss' as elevation;
@use '../../../../assets/scss/tokens/components/_navigation.scss' as navigation;

.m3-app-bar {
  @include navigation.md-comp-top-app-bar;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: navigation.$md-comp-top-app-bar-container-color;
  box-shadow: none;
  height: navigation.$md-comp-top-app-bar-container-height;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
}

// Size variants
.m3-app-bar--small {
  @include navigation.md-comp-top-app-bar-small;
}

.m3-app-bar--medium {
  @include navigation.md-comp-top-app-bar-medium;
}

.m3-app-bar--large {
  @include navigation.md-comp-top-app-bar-large;
}

// Layout sections
.m3-app-bar__leading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.12);
  }
}

.m3-app-bar__title-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0; // Allows text truncation
}

.m3-app-bar__headline {
  font-family: navigation.$md-comp-top-app-bar-headline-text-type;
  font-weight: navigation.$md-comp-top-app-bar-headline-text-weight;
  font-size: navigation.$md-comp-top-app-bar-headline-text-size;
  line-height: navigation.$md-comp-top-app-bar-headline-text-line-height;
  letter-spacing: navigation.$md-comp-top-app-bar-headline-text-tracking;
  color: navigation.$md-comp-top-app-bar-headline-text-color;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.m3-app-bar__title {
  font-family: navigation.$md-comp-top-app-bar-title-text-type;
  font-weight: navigation.$md-comp-top-app-bar-title-text-weight;
  font-size: navigation.$md-comp-top-app-bar-title-text-size;
  line-height: navigation.$md-comp-top-app-bar-title-text-line-height;
  letter-spacing: navigation.$md-comp-top-app-bar-title-text-tracking;
  color: navigation.$md-comp-top-app-bar-title-text-color;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.m3-app-bar__trailing {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
}

.m3-app-bar__action-link {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover:not(.m3-app-bar__action-link--disabled) {
    opacity: 0.8;
  }

  &:active:not(.m3-app-bar__action-link--disabled) {
    opacity: 0.6;
  }

  &--disabled {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }
}

.m3-app-bar__icon-label {
  :deep(.icon) {
    color: navigation.$md-comp-top-app-bar-icon-color;
    width: 24px;
    height: 24px;

    .m3-app-bar__action-link--disabled & {
      color: navigation.$md-comp-top-app-bar-disabled-icon-color;
    }
  }
}

.m3-app-bar__custom-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

// Responsive adjustments
@media (max-width: 600px) {
  .m3-app-bar {
    padding: 0 12px;
  }

  .m3-app-bar__leading-icon {
    margin-right: 12px;
  }

  .m3-app-bar__trailing-actions {
    margin-left: 12px;
    gap: 4px;
  }
}
</style>
