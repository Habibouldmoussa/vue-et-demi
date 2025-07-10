<template>
  <div id="app">
    <h1>Vue 2 - Counter Plugin Example</h1>

    <!-- Utilisation basique -->
    <div class="example">
      <h2>Exemple basique</h2>
      <CounterButton />
    </div>

    <!-- Utilisation avec props -->
    <div class="example">
      <h2>Avec props personnalisées</h2>
      <CounterButton
        :initial-count="10"
        :step="5"
        :max-count="30"
        label="Score"
        button-class="custom-btn"
        @update:count="onCountUpdate"
        @max-reached="onMaxReached"
      />
    </div>

    <!-- Utilisation avec data -->
    <div class="example">
      <h2>Avec data Vue 2</h2>
      <CounterButton
        :initial-count="customCount"
        :step="2"
        @update:count="customCount = $event"
      />
      <p>Count externe: {{ customCount }}</p>
      <button @click="resetCustomCount">Reset</button>
    </div>

    <!-- Compteurs multiples -->
    <div class="example">
      <h2>Compteurs multiples</h2>
      <CounterButton
        v-for="counter in counters"
        :key="counter.id"
        :initial-count="counter.initialCount"
        :step="counter.step"
        :label="counter.label"
        @update:count="updateCounter(counter.id, $event)"
      />
      <p>Total: {{ totalCount }}</p>
    </div>

    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      customCount: 5,
      message: "",
      counters: [
        { id: 1, initialCount: 0, step: 1, label: "Counter 1", value: 0 },
        { id: 2, initialCount: 5, step: 2, label: "Counter 2", value: 5 },
        { id: 3, initialCount: 10, step: 5, label: "Counter 3", value: 10 },
      ],
    };
  },
  computed: {
    totalCount() {
      return this.counters.reduce((sum, counter) => sum + counter.value, 0);
    },
  },
  methods: {
    onCountUpdate(count) {
      console.log("Count updated:", count);
    },
    onMaxReached(count) {
      this.showMessage("Maximum atteint: " + count);
    },
    resetCustomCount() {
      this.customCount = 0;
    },
    updateCounter(id, newCount) {
      const counter = this.counters.find((c) => c.id === id);
      if (counter) {
        counter.value = newCount;
      }
    },
    showMessage(msg) {
      this.message = msg;
      setTimeout(() => {
        this.message = "";
      }, 2000);
    },
  },
};
</script>

<style>
.example {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.custom-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.custom-btn:hover:not(:disabled) {
  background-color: #218838;
}

.message {
  margin-top: 10px;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
}
</style>
