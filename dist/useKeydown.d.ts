declare type SubKey = 'Control' | 'Alt' | 'Tab' | 'Shift' | 'NN';
declare type NodeEnv = 'production' | 'development' | 'test';
declare const useKeydown: (nodeEnv: NodeEnv) => {
    subKey: SubKey;
    mainKey: string;
};
export default useKeydown;
