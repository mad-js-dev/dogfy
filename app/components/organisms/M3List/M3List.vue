<script setup lang="ts">
interface Props {
    items: (string | { 
        text: string; 
        to?: string; 
        supportingText?: string;
        slots?: {
            leading?: any;
            content?: any;
            trailing?: any;
        }
    })[]
    variant?: 'one-line' | 'two-line' | 'three-line'
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'one-line'
})
</script> 

<template>
    <div class="m3-list">
        <ol class="m3-list-container">
            <li 
                v-for="(item, index) in props.items" 
                :key="typeof item === 'string' ? item : item.text"
                class="m3-list-item"
                :class="{ 'm3-list-item--interactive': typeof item === 'object' && item.to }"
            >
                <!-- String items (simple text) -->
                <template v-if="typeof item === 'string'">
                    <div class="m3-list-item__content">
                        <div class="m3-list-item__text-container">
                            <span class="m3-list-item__text">{{ item }}</span>
                        </div>
                    </div>
                </template>
                
                <!-- Object items with slots -->
                <template v-else>
                    <div class="m3-list-item__content">
                        <!-- Leading slot -->
                        <div v-if="item.slots?.leading" class="m3-list-item__leading">
                            <component :is="item.slots.leading()" />
                        </div>
                        
                        <!-- Central content slot -->
                        <NuxtLink 
                            v-if="item.slots?.content && item.to" 
                            :to="item.to" 
                            class="m3-list-item__central-content"
                        >
                            <component :is="item.slots.content" :to="item.to" :text="item.text" />
                        </NuxtLink>
                        <div v-else-if="item.slots?.content" class="m3-list-item__central-content">
                            <component :is="item.slots.content" :to="item.to" :text="item.text" />
                        </div>
                        
                        <!-- Central content with optional link -->
                        <NuxtLink 
                            v-else-if="item.to" 
                            :to="item.to" 
                            class="m3-list-item__central-content"
                        >
                            <div class="m3-list-item__text-container">
                                <span class="m3-list-item__text">{{ item.text }}</span>
                                <span v-if="item.supportingText" class="m3-list-item__supporting-text">
                                    {{ item.supportingText }}
                                </span>
                            </div>
                        </NuxtLink>
                        
                        <!-- Non-interactive central content -->
                        <div v-else class="m3-list-item__central-content">
                            <div class="m3-list-item__text-container">
                                <span class="m3-list-item__text">{{ item.text }}</span>
                                <span v-if="item.supportingText" class="m3-list-item__supporting-text">
                                    {{ item.supportingText }}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Trailing slot -->
                        <div v-if="item.slots?.trailing" class="m3-list-item__trailing">
                            <component :is="item.slots.trailing()" />
                        </div>
                    </div>
                </template>
            </li>
        </ol>
    </div>
</template>

<style scoped lang="scss">
@use 'sass:map';
@use '../../../../assets/scss/tokens/_color-system.scss' as color;
@use '../../../../assets/scss/tokens/_shape.scss' as shape;
@use '../../../../assets/scss/tokens/components/_lists.scss' as lists;

.m3-list-container {
  @include lists.md-comp-list-base;
  @include lists.md-semantic-list-assist;
}

.m3-list-item {
  @include lists.md-comp-list-item-base;
}

.m3-list-item__content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.m3-list-item__central-content {
  flex: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: color.$md-sys-color-on-surface;
  transition: background-color 0.2s ease;
  min-height: 56px;
  padding: 12px 0;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  
  &:active {
    background-color: rgba(0, 0, 0, 0.12);
  }
}

.m3-list-item__leading {
  @include lists.md-comp-list-item-leading-icon;
}

.m3-list-item__text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.m3-list-item__text {
  @include lists.md-comp-list-item-text;
}

.m3-list-item__supporting-text {
  @include lists.md-comp-list-item-supporting-text;
}

.m3-list-item__trailing {
  @include lists.md-comp-list-item-trailing-icon;
}

/* Two-line variant */
.m3-list-item--two-line .m3-list-item__content {
  @include lists.md-comp-list-item-two-line;
}

/* Three-line variant */
.m3-list-item--three-line .m3-list-item__content {
  @include lists.md-comp-list-item-three-line;
}

/* Make IconLabel fill full width */
.m3-list-item__central-content {
  .icon-label {
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  :deep(.icon-label span) {
    flex-basis: 100%;
  }
}

/* Use M3 List Tokens instead of hardcoded values */
.m3-list-item__content {
  /* Using tokens from _lists.scss */
  gap: lists.$md-comp-list-item-gap;
}

.m3-list-item__leading {
  @include lists.md-comp-list-item-leading-icon;
}

.m3-list-item__trailing {
  @include lists.md-comp-list-item-trailing-icon;
}

/* Use token-based heights and padding */
.m3-list-item__central-content {
  @include lists.md-comp-list-item-content;
}

.m3-list-item--two-line .m3-list-item__central-content {
  @include lists.md-comp-list-item-two-line;
}

.m3-list-item--three-line .m3-list-item__central-content {
  @include lists.md-comp-list-item-three-line;
}

/* Apply M3 states */
.m3-list-item__central-content {
  @include lists.md-comp-list-item-states;
}

/* Text styling with tokens */
.m3-list-item__text {
  @include lists.md-comp-list-item-text;
}

.m3-list-item__supporting-text {
  @include lists.md-comp-list-item-supporting-text;
}

</style>