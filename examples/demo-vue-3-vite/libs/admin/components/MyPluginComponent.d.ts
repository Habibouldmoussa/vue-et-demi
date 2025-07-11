type MyPluginComponent = {
    name: string;
    count?: number;
    setup: () => void;
    render: () => void;
};
declare const MyPluginComponent: MyPluginComponent;
export default MyPluginComponent;
