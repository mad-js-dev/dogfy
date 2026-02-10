<script setup lang="ts">
import { Home, User, Settings, Star, ChevronRight, Wrench, ChevronLeft, Menu } from 'lucide-vue-next'

interface Props {
  leadingIcon?: string
  label?: string
  trailingIcon?: string
  trailingSeparator?: boolean
  separator?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  leadingIcon: '',
  trailingSeparator: false,
  separator: false
})

const iconComponents = {
  'home': Home,
  'menu': Menu,
  'user': User,
  'settings': Settings,
  'star': Star,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'wrench': Wrench,
}

const isImageUrl = (url: string) => {
  return url.startsWith('http') || url.startsWith('/') || url.startsWith('./') || url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)
}

const getIconComponent = (iconName: string) => {
  return iconComponents[iconName as keyof typeof iconComponents]
}
</script>

<template>
  <div class="icon-label">
    <img 
      v-if="props.leadingIcon && isImageUrl(props.leadingIcon)" 
      :src="props.leadingIcon" 
      class="icon image-icon" 
      alt=""
    />
    <component 
      v-else-if="props.leadingIcon && getIconComponent(props.leadingIcon)" 
      :is="getIconComponent(props.leadingIcon)" 
      class="icon" 
    />
    <i v-if="props.leadingIcon && (props.label || props.trailingIcon) && props.separator" class="separator"/>
    <span>{{ props.label }}</span>
    <i v-if="props.trailingIcon && (props.label || props.leadingIcon) && props.trailingSeparator" class="separator"/>
    <img 
      v-if="props.trailingIcon && isImageUrl(props.trailingIcon)" 
      :src="props.trailingIcon" 
      class="icon image-icon" 
      alt=""
    />
    <component 
      v-else-if="props.trailingIcon && getIconComponent(props.trailingIcon)" 
      :is="getIconComponent(props.trailingIcon)" 
      class="icon" 
    />
  </div>
</template>

<style scoped>
.icon-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 1em;
  height: 1em;
  display: inline-block;
}

.image-icon {
  width: 1em;
  height: 1em;
  object-fit: contain;
  border-radius: 2px;
}

.separator {
  background-color: #000;
  width: 2px;
  height: 1rem;
  font-weight: normal;
  margin: 0 4px;
}
</style>