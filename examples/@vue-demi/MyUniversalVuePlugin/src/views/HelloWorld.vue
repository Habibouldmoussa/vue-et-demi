<template>
  <div class="dashboard-widget">
    <h3>{{ titre }}</h3>
    <p>Ceci est un widget de tableau de bord dynamique.</p>
    <p>Configuration reçue : {{ JSON.stringify(extraData) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "DashboardWidget",
  props: {
    titre: {
      type: String,
      default: "Widget par défaut",
    },
    extraData: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style scoped>
.dashboard-widget {
  border: 1px solid #42b983;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #e6ffed;
}
</style>
