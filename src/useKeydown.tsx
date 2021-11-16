import { useEffect, useState } from 'react';
type SubKey = 'Control'|'Alt'|'Tab'|'Shift'|'NN';
//type ENV = 'production'|'development'|'test'
const useKeydown = (domID:string=""):{subKey:SubKey, mainKey:string, initKeys:()=>void, switchDisable:()=>void} => {
    const [subKey, handleSubKey] = useState<'Control'|'Alt'|'Tab'|'Shift'|'NN'>('NN')
    const [mainKey, handleMainKey] = useState<string>('');
    const [disabled, handleDisabled] = useState<boolean>(false)
    useEffect(() => {
        try{
            if(domID==="") document.addEventListener('keydown', handleKeydown)
            else{
                let dom = document.getElementById(domID);
                dom?.addEventListener('keydown',handleKeydown)
            }
        }catch(e){
            console.error('error in useKeydown', e)
        }
        
        return () => removeEventListener('keydown', handleKeydown)
    }, []);
    
    const handleKeydown = (e: any) => {
        let key:string = e.key;
        if(!disabled){
            switch(key){
                case 'Control':
                case 'Alt':
                case 'Tab':
                case 'Shift':        
                    (subKey === key)? handleSubKey('NN'):handleSubKey(key)
                    //when the same subKey pressed, it turns "NN"
                    break;
                default:
                    handleMainKey(key)    
            }
        }
    }

    const initKeys = () => {
        handleSubKey('NN');
        handleMainKey('')
    }
    const switchDisable = () =>{
        initKeys();
        handleDisabled((old)=>!old);
    }

    return {subKey, mainKey, initKeys, switchDisable}
}

export default useKeydown