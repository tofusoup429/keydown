import { useEffect, useState } from 'react';
//type ENV = 'production'|'development'|'test'
const useKeydown = (domID:string=""):{controlKeyDown:boolean, altKeyDown:boolean, shiftKeyDown:boolean, tabKeyDown:boolean, mainKey:string, initKeys:()=>void, switchDisable:()=>void} => {
    const [controlKeyDown, handleControlKeyDown] = useState<boolean>(false)
    const [shiftKeyDown, handleShiftKeyDown] = useState<boolean>(false)
    const [altKeyDown, handleAltKeyDown] = useState<boolean>(false)
    const [tabKeyDown, handleTabKeyDown] = useState<boolean>(false)
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
                    handleControlKeyDown(true);
                    break;
                case 'Alt':
                    handleAltKeyDown(true)
                    break;
                case 'Tab':
                    handleTabKeyDown(true);
                    break;
                case 'Shift':
                    handleShiftKeyDown(true);        
                    break;
                default:
                    handleMainKey(key)    
            }
        }
    }

    const initKeys = () => {
        handleMainKey('');
        handleControlKeyDown(false);
        handleAltKeyDown(false);
        handleShiftKeyDown(false);
        handleTabKeyDown(false);

    }
    const switchDisable = () =>{
        initKeys();
        handleDisabled((old)=>!old);
    }

    return {controlKeyDown, altKeyDown, shiftKeyDown, tabKeyDown, mainKey, initKeys, switchDisable}
}

export default useKeydown