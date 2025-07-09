declare const MyPluginComponent: {
    name: string;
    setup(): {
        count: import("vue-demi").Ref<number>;
    };
    render(h: any): any;
};
export default MyPluginComponent;
