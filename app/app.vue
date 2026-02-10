<template>
  <div class="container">
    <M3AppBar 
      variant="small"
      headline="My App"
      :title="roomSubtitle"
    >
      <template v-if="route?.path && route.path !== '/'" #leading>
        <M3Link 
          leading-icon="chevron-left" 
          @click="handleGoBack"
        />
      </template>
      
      <template #trailing>
        <!-- TODO: Implement MenuButton component here -->
        <M3Link 
          leading-icon="menu" 
          @click="handleMenuClick"
        />
      </template>
    </M3AppBar>
    
    <main class="main-content">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import M3AppBar from './components/templates/M3AppBar/M3AppBar.vue'
import M3Link from './components/molecules/M3Link/M3Link.vue'
import { useRoomsStore } from '../../../stores/rooms'

const router = useRouter()
const route = useRoute()
const roomsStore = useRoomsStore()

const handleGoBack = () => {
  router.go(-1)
}

const handleMenuClick = () => {
  // TODO: Implement menu functionality
  console.log('Menu clicked')
}

// Get room name for subtitle when on room page
const roomSubtitle = computed(() => {
  if (!route?.name || !route?.params?.id) return ''
  if (route.name === 'room-id') {
    const room = roomsStore.getRoomById(route.params.id)
    return room?.roomName || ''
  }
  return ''
})
</script>

<style scoped>
.main-content {
  padding: 16px;
}
</style>