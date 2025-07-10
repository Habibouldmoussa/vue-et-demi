// package.json
{
  "name": "vue-counter-plugin",
  "version": "1.0.0",
  "description": "Plugin Vue compatible Vue 2/3 avec bouton compteur",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w"
  },
  "peerDependencies": {
    "@vue/composition-api": "^1.0.0",
    "vue": "^2.6.0 || ^3.0.0"
  },
  "dependencies": {
    "vue-demi": "^0.14.0"
  },
  "devDependencies": {
    "@rollup/plugin-typescript": "^8.0.0",
    "@types/node": "^18.0.0",
    "rollup": "^2.0.0",
    "rollup-plugin-dts": "^4.0.0",
    "typescript": "^4.0.0",
    "vue": "^3.0.0"
  }
}

// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "examples"]
}

// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.esm.js',
        format: 'es'
      }
    ],
    external: ['vue-demi'],
    plugins: [typescript()]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];

// src/index.ts
import { App } from 'vue-demi';
import CounterButton from './components/CounterButton.vue';

export interface CounterPluginOptions {
  defaultStep?: number;
  maxCount?: number;
  minCount?: number;
}

export default {
  install(app: App, options: CounterPluginOptions = {}) {
    // Enregistrer le composant globalement
    app.component('CounterButton', CounterButton);
    
    // Ajouter les options par défaut
    app.config.globalProperties.$counterOptions = {
      defaultStep: 1,
      maxCount: 100,
      minCount: 0,
      ...options
    };
  }
};

export { CounterButton };

// src/components/CounterButton.vue
<template>
  <button 
    :class="buttonClass"
    @click="increment"
    :disabled="isDisabled"
  >
    {{ label }}: {{ count }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue-demi';

export default defineComponent({
  name: 'CounterButton',
  props: {
    initialCount: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    maxCount: {
      type: Number,
      default: 100
    },
    minCount: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: 'Count'
    },
    buttonClass: {
      type: String,
      default: 'counter-btn'
    }
  },
  emits: ['update:count', 'max-reached', 'min-reached'],
  setup(props, { emit }) {
    const count = ref(props.initialCount);

    const isDisabled = computed(() => {
      return count.value >= props.maxCount;
    });

    const increment = () => {
      const newCount = count.value + props.step;
      
      if (newCount <= props.maxCount) {
        count.value = newCount;
        emit('update:count', count.value);
        
        if (count.value === props.maxCount) {
          emit('max-reached', count.value);
        }
      }
    };

    const decrement = () => {
      const newCount = count.value - props.step;
      
      if (newCount >= props.minCount) {
        count.value = newCount;
        emit('update:count', count.value);
        
        if (count.value === props.minCount) {
          emit('min-reached', count.value);
        }
      }
    };

    const reset = () => {
      count.value = props.initialCount;
      emit('update:count', count.value);
    };

    return {
      count,
      isDisabled,
      increment,
      decrement,
      reset
    };
  }
});
</script>

<style scoped>
.counter-btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.counter-btn:hover:not(:disabled) {
  background-color: #0056b3;
}

.counter-btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>

// src/types.ts
export interface CounterState {
  count: number;
}

export interface CounterMethods {
  increment(): void;
  decrement(): void;
  reset(): void;
}

// postinstall.js (pour vue-demi)
const { switchVersion, loadModule } = require('vue-demi');

const Vue = loadModule('vue');
if (Vue && Vue.version) {
  if (Vue.version.startsWith('2.')) {
    switchVersion(2);
  } else if (Vue.version.startsWith('3.')) {
    switchVersion(3);
  }
}