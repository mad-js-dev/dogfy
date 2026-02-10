<template>
    <div>
      <div>
        <h1>{{ room.roomName }}</h1>
        <button @click="this.$router.go(-1)"><Icon name="material-symbols:arrow-back" style="color: black" /></button>
      </div>
        <div>
          <h3>Devices in this room:</h3>
          <M3List :items="roomDevices.map(device => ({
            text: `${device.deviceName} - ${device.deviceStatus ? 'ON' : 'OFF'}`,
            to: `/device/${device.deviceId}`,
            slots: {
              content: (props) => h(M3Link, { 
                leadingIcon: 'wrench', 
                text: props.text,
                to: props.to 
              }),
              trailing: () => h(M3Switch, {
                modelValue: device.deviceStatus === 1,
                'onUpdate:modelValue': (value) => rooms.updateDeviceStatus(device.deviceId, value)
              })
            }
          }))" />
          <div v-if="roomDevices.length === 0">
            <p>No devices found for this room.</p>
          </div>
        </div>
    </div>
</template>

<script setup>
import { useRoomsStore } from '../../../stores/rooms'
import M3List from '../../components/organisms/M3List/M3List.vue'
import M3Link from '../../components/molecules/M3Link/M3Link.vue'
import M3Switch from '../../components/molecules/M3Switch/M3Switch.vue'

const rooms = useRoomsStore()
const route = useRoute()

// Get devices for specific room using route parameter
const room = computed(() => rooms.getRoomById(route.params.id))
const roomDevices = computed(() => rooms.getDevicesByRoomId(route.params.id))
</script>
