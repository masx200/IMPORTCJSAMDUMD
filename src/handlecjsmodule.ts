


import { 非空对象 } from "./notemptyobj";

export function 处理非es模块(
  
  exportmodule: any[]
  
  
) {

  
  
  

  if (非空对象(exportmodule[0])) {
    const exportdefault = exportmodule[0];
    return exportdefault;
    
  } else if (非空对象(exportmodule[1])) {
    const exportdefault = exportmodule[1];
    
    return exportdefault;
  } 
  }
}
