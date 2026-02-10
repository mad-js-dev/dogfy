<template>
    <div>        
        <p>Device name: {{ device.deviceName }}</p>
        <p>Device type: {{ device.deviceType }}</p>
        <p>Device status: {{ device.deviceStatus }}</p>
    </div>
</template>

<script setup>
import { useRoomsStore } from '../../../stores/rooms'

const rooms = useRoomsStore()
const route = useRoute()

const device = computed(() => rooms.getDeviceById(route.params.id))
</script>
