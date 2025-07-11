import { ref, h } from "vue-demi";

type MyPluginComponent = {
  name: string;
  count?: number;
  setup: () => void;
  render: () => any;
};

const MyPluginComponent: MyPluginComponent = {
  name: "MyPluginComponent",
  setup() {
    const count = ref(1);
    console.log("MyPluginComponent setup called");
    return { count };
  },
  render() {
    return h("div", `Plugin Component: ${this.count}`);
  },
};

export default MyPluginComponent;
