<template>
    <div>
        <div>
            <h1>Device {{ $route.params.id }}</h1>
            <button @click="this.$router.go(-1)">Back to rooms</button>
        </div>
        
        <div>
            <p>Device name: {{ device.deviceName }}</p>
            <p>Device type: {{ device.deviceType }}</p>
            <p>Device status: {{ device.deviceStatus }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoomsStore } from '../../../stores/rooms'

const rooms = useRoomsStore()
const route = useRoute()

const device = computed(() => rooms.getDeviceById(route.params.id))
</script>
