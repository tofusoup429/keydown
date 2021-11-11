declare type SubKey = 'Control' | 'Alt' | 'Tab' | 'Shift' | 'NN';
declare const useKeydown: (domID?: string) => {
    subKey: SubKey;
    mainKey: string;
    initKeys: () => void;
};
export default useKeydown;
