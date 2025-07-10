<template>
  <button :class="buttonClass" @click="increment" :disabled="isDisabled">
    {{ label }}: {{ count }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue-demi";

export default defineComponent({
  name: "CounterButton",
  props: {
    initialCount: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    maxCount: {
      type: Number,
      default: 100,
    },
    minCount: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: "Count",
    },
    buttonClass: {
      type: String,
      default: "counter-btn",
    },
  },
  emits: ["update:count", "max-reached", "min-reached"],
  setup(props, { emit }) {
    const count = ref(props.initialCount);

    const isDisabled = computed(() => {
      return count.value >= props.maxCount;
    });

    const increment = () => {
      const newCount = count.value + props.step;

      if (newCount <= props.maxCount) {
        count.value = newCount;
        emit("update:count", count.value);

        if (count.value === props.maxCount) {
          emit("max-reached", count.value);
        }
      }
    };

    const decrement = () => {
      const newCount = count.value - props.step;

      if (newCount >= props.minCount) {
        count.value = newCount;
        emit("update:count", count.value);

        if (count.value === props.minCount) {
          emit("min-reached", count.value);
        }
      }
    };

    const reset = () => {
      count.value = props.initialCount;
      emit("update:count", count.value);
    };

    return {
      count,
      isDisabled,
      increment,
      decrement,
      reset,
    };
  },
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
