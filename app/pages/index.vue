<template>
  <div class="container">
    <header class="header">
      <h1>Nuxt 3 + Pinia + SASS</h1>
      <p>A modern web application with state management and styling</p>
    </header>

    <main class="main-content">
      <div class="counter-card">
        <h2>{{ counter.name }}</h2>
        <div class="counter-display">
          <span class="counter-value">{{ counter.count }}</span>
          <p v-if="counter.doubleCount > 0" class="counter-double">
            Double: {{ counter.doubleCount }}
          </p>
        </div>
        <div class="button-group">
          <button @click="counter.decrement()" class="btn btn-secondary">-</button>
          <button @click="counter.increment()" class="btn btn-primary">+</button>
          <button @click="counter.reset()" class="btn btn-secondary">Reset</button>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>© 2024 Dogfy App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { useCounterStore } from '../../stores/counter'

const counter = useCounterStore()
</script>

<style scoped>
.header {
  text-align: center;
  margin: 2rem 0 3rem;
}

.header h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.header p {
  color: var(--text-color);
  opacity: 0.8;
}

.main-content {
  display: flex;
  justify-content: center;
  min-height: 60vh;
}

.counter-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.counter-card h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.counter-display {
  margin: 2rem 0;
}

.counter-value {
  font-size: 4rem;
  font-weight: bold;
  color: var(--primary-color);
}

.counter-double {
  margin-top: 1rem;
  color: var(--secondary-color);
  font-size: 1.2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.button-group .btn {
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  min-width: 100px;
}

.footer {
  text-align: center;
  margin-top: 3rem;
  padding: 1.5rem 0;
  color: var(--text-color);
  opacity: 0.7;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
}

/* Responsive styles */
@media (max-width: 600px) {
  .counter-card {
    padding: 1.5rem;
  }
  
  .counter-card h2 {
    font-size: 1.5rem;
  }
  
  .counter-value {
    font-size: 3rem !important;
  }
  
  .button-group {
    flex-direction: column;
    align-items: center;
  }
  
  .button-group .btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>
