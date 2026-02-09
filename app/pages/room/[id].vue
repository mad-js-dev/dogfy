<template>
    <div>
      <div>
        <h1>{{ room.roomName }}</h1>
        <button @click="this.$router.go(-1)"><Icon name="material-symbols:arrow-back" style="color: black" /></button>
      </div>
        <div>
          <h3>Devices in this room:</h3>
          <ul>
            <li v-for="device in roomDevices" :key="device.deviceId">
              {{ device.deviceName }} - {{ device.deviceStatus ? 'ON' : 'OFF' }}
              <NuxtLink :to="`/device/${device.deviceId}`">View Device settings</NuxtLink>
            </li>
          </ul>
          <div v-if="roomDevices.length === 0">
            <p>No devices found for this room.</p>
          </div>
        </div>
    </div>
</template>

<script setup>
import { useRoomsStore } from '../../../stores/rooms'

const rooms = useRoomsStore()
const route = useRoute()

// Get devices for the specific room using the route parameter
const room = computed(() => rooms.getRoomById(route.params.id))
const roomDevices = computed(() => rooms.getDevicesByRoomId(route.params.id))
</script>
