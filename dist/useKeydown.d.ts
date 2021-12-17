declare const useKeydown: (domID?: string) => {
    controlKeyDown: boolean;
    altKeyDown: boolean;
    shiftKeyDown: boolean;
    tabKeyDown: boolean;
    mainKey: string;
    initKeys: () => void;
    switchDisable: () => void;
};
export default useKeydown;
