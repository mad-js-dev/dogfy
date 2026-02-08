<template>
    <div>
        <h1>Room {{ $route.params.id }}</h1>
        <div>
          <ul>
            <li><NuxtLink to="device/1">Device 1</NuxtLink></li>
            <li><NuxtLink to="device/2">Device 2</NuxtLink></li>
          </ul>
        </div>
    </div>
</template>

<script setup>

</script>
