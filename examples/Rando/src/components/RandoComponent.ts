import { ref, h } from "vue-demi";
type RandoComponent = {
  name: string;
  count?: number;
  setup: () => void;
  render: () => void;
};

const RandoComponent: RandoComponent = {
  name: "RandoComponent",
  setup() {
    const count = ref(2);
    console.log("RandoComponent setup called");
    return { count };
  },
  render() {
    return h("h1", `Plugin Rando Component: ${this.count}`);
  },
};

export default RandoComponent;
