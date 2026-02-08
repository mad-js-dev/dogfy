import { defineStore } from 'pinia'

export const useRoomsStore = defineStore('rooms', {
  state: () => ({
    rooms: [
      {
        roomId: '0000001',
        roomName: "Livingroom",
        devices: ['0000001']
      },
      {
        roomId: '0000002',
        roomName: "Bedroom",
        devices: ['0000002']
      },
      {
        roomId: '0000003',
        roomName: "Kitchen",
        devices: ['0000003']
      }
    ],
    devices: [
      {
        deviceId: '0000001',
        deviceName: "Lights",
        deviceType: "Light",
        deviceStatus: 0
      },
      {
        deviceId: '0000002',
        deviceName: "Lights",
        deviceType: "Light",
        deviceStatus: 0
      },
      {
        deviceId: '0000003',
        deviceName: "Lights",
        deviceType: "Light",
        deviceStatus: 0
      },
    ]
  }),
  
  getters: {
    getRooms: (state) => state.rooms.map((room) => ({
      ...room,
      devices: state.devices.filter((device) => device.deviceId === room.devices[0])
    })),
    getDevices: (state) => state.devices,
    getDevicesByRoomId: (state) => (roomId: string) => {
      const room = state.rooms.find(r => r.roomId === roomId);
      if (!room) return [];
      return state.devices.filter((device) => room.devices.includes(device.deviceId));
    },
    getDeviceById: (state) => (deviceId: string) => {
      return state.devices.find((device) => device.deviceId === deviceId);
    },
    getRoomById: (state) => (roomId: string) => {
      return state.rooms.find((room) => room.roomId === roomId);
    },
  },
  
  actions: {
    increment() {
      //this.count++
    },
    decrement() {
      //this.count--
    },
    reset() {
      //this.count = 0
    },
  },
})
