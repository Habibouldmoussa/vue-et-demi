declare const MyPluginComponent: {
    name: string;
    setup(): {
        count: import("vue-demi").Ref<number, number>;
    };
    render(): import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
        [key: string]: any;
    }>;
};
export default MyPluginComponent;
