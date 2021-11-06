import { useEffect, useState } from 'react';
type SubKey = 'Control'|'Alt'|'Tab'|'Shift'|'NN';
type NodeEnv = 'production'|'development'|'test'
const useKeydown = (nodeEnv:NodeEnv):{subKey:SubKey, mainKey:string} => {
    const [subKey, handleSubKey] = useState<'Control'|'Alt'|'Tab'|'Shift'|'NN'>('NN')
    const [mainKey, handleMainKey] = useState<string>('')
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => removeEventListener('keydown', handleKeydown)
      }, []);
    
      const handleKeydown = (e: any) => {
        if(nodeEnv === 'production') e.preventDefault();
        let key:string = e.key;
        switch(key){
            case 'Control'||'Alt'||'Tab':
                handleSubKey(key)
                break;
            default:
                handleMainKey(key)    
        }
        handleMainKey(e.key)
    }
    if(nodeEnv==='development') console.log('subKey', subKey, 'mainKey', mainKey)
    return {subKey, mainKey}
}

export default useKeydown