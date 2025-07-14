import { ref, h } from "vue-demi";
type AdminComponent = {
  name: string;
  count?: number;
  setup: () => void;
  render: () => void;
};

const AdminComponent: AdminComponent = {
  name: "AdminComponent",
  setup() {
    const count = ref(1);
    console.log("AdminComponent setup called");
    return { count };
  },
  render() {
    return h("div", `Plugin Component: ${this.count}`);
  },
};

export default AdminComponent;
