// examples/vue3/main.ts - Exemple Vue 3
import { createApp } from 'vue';
import CounterPlugin from '../../dist/index.esm.js';
import App from './App.vue';

const app = createApp(App);

// Installation du plugin avec options
app.use(CounterPlugin, {
  defaultStep: 2,
  maxCount: 50,
  minCount: -10
});

app.mount('#app');

// examples/vue3/App.vue - Application Vue 3
<template>
  <div id="app">
    <h1>Vue 3 - Counter Plugin Example</h1>
    
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
    
    <!-- Utilisation avec composition API -->
    <div class="example">
      <h2>Avec Composition API</h2>
      <CounterButton 
        :initial-count="customCount"
        :step="2"
        @update:count="customCount = $event"
      />
      <p>Count externe: {{ customCount }}</p>
      <button @click="resetCustomCount">Reset</button>
    </div>
    
    <!-- Compteur avec limite -->
    <div class="example">
      <h2>Compteur avec limites</h2>
      <CounterButton 
        :initial-count="0"
        :step="1"
        :max-count="10"
        :min-count="0"
        label="Limited"
        @max-reached="showMessage('Maximum atteint!')"
      />
    </div>
    
    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const customCount = ref(5);
const message = ref('');

const onCountUpdate = (count: number) => {
  console.log('Count updated:', count);
};

const onMaxReached = (count: number) => {
  console.log('Maximum reached:', count);
};

const resetCustomCount = () => {
  customCount.value = 0;
};

const showMessage = (msg: string) => {
  message.value = msg;
  setTimeout(() => {
    message.value = '';
  }, 2000);
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

// examples/vue2/main.js - Exemple Vue 2
import Vue from 'vue';
import CompositionAPI from '@vue/composition-api';
import CounterPlugin from '../../dist/index.js';
import App from './App.vue';

// Installation de l'API de composition pour Vue 2
Vue.use(CompositionAPI);

// Installation du plugin counter
Vue.use(CounterPlugin, {
  defaultStep: 1,
  maxCount: 100,
  minCount: 0
});

new Vue({
  render: h => h(App)
}).$mount('#app');

// examples/vue2/App.vue - Application Vue 2
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
  name: 'App',
  data() {
    return {
      customCount: 5,
      message: '',
      counters: [
        { id: 1, initialCount: 0, step: 1, label: 'Counter 1', value: 0 },
        { id: 2, initialCount: 5, step: 2, label: 'Counter 2', value: 5 },
        { id: 3, initialCount: 10, step: 5, label: 'Counter 3', value: 10 }
      ]
    };
  },
  computed: {
    totalCount() {
      return this.counters.reduce((sum, counter) => sum + counter.value, 0);
    }
  },
  methods: {
    onCountUpdate(count) {
      console.log('Count updated:', count);
    },
    onMaxReached(count) {
      this.showMessage('Maximum atteint: ' + count);
    },
    resetCustomCount() {
      this.customCount = 0;
    },
    updateCounter(id, newCount) {
      const counter = this.counters.find(c => c.id === id);
      if (counter) {
        counter.value = newCount;
      }
    },
    showMessage(msg) {
      this.message = msg;
      setTimeout(() => {
        this.message = '';
      }, 2000);
    }
  }
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

// README.md - Documentation
# Vue Counter Plugin

Un plugin Vue universel compatible avec Vue 2 et Vue 3 grâce à vue-demi.

## Installation

```bash
npm install vue-counter-plugin
```

Pour Vue 2, vous devez également installer l'API de composition :

```bash
npm install @vue/composition-api
```

## Utilisation

### Vue 3

```typescript
import { createApp } from 'vue';
import CounterPlugin from 'vue-counter-plugin';

const app = createApp(App);
app.use(CounterPlugin, {
  defaultStep: 1,
  maxCount: 100,
  minCount: 0
});
```

### Vue 2

```javascript
import Vue from 'vue';
import CompositionAPI from '@vue/composition-api';
import CounterPlugin from 'vue-counter-plugin';

Vue.use(CompositionAPI);
Vue.use(CounterPlugin);
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialCount` | `number` | `0` | Valeur initiale du compteur |
| `step` | `number` | `1` | Pas d'incrémentation |
| `maxCount` | `number` | `100` | Valeur maximale |
| `minCount` | `number` | `0` | Valeur minimale |
| `label` | `string` | `'Count'` | Libellé du bouton |
| `buttonClass` | `string` | `'counter-btn'` | Classe CSS du bouton |

### Événements

| Événement | Payload | Description |
|-----------|---------|-------------|
| `update:count` | `number` | Émis à chaque changement de valeur |
| `max-reached` | `number` | Émis quand la valeur max est atteinte |
| `min-reached` | `number` | Émis quand la valeur min est atteinte |

### Utilisation dans le template

```vue
<template>
  <CounterButton 
    :initial-count="10"
    :step="5"
    :max-count="50"
    label="Score"
    @update:count="handleUpdate"
    @max-reached="handleMaxReached"
  />
</template>
```

## Développement

```bash
# Installation des dépendances
npm install

# Build
npm run build

# Développement
npm run dev
```

## Compatibilité

- Vue 2.6+ avec @vue/composition-api
- Vue 3.0+
- TypeScript support inclus