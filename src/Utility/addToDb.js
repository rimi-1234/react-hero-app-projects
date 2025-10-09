import { toast } from "react-toastify";

export const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("InstallList");

    if (storedAppSTR) {
        const storedAppkData = JSON.parse(storedAppSTR);
        return storedAppkData;
    }
    else {
        return [];
    }

}

export const addtoAppList = (apps,setIsInstall) => {

    const storedAppData = getStoredApp();
    

    
     const isDuplicate = storedAppData.some(b => b.id === apps.id);
     
    
    if (isDuplicate) {
        toast("App Already Exit!");
        setIsInstall(true);
        return;
    }
    storedAppData.push(apps);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("InstallList", data)




}