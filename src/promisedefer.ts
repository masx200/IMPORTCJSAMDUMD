export function promisedefer():Defered{
let resolve=()=>{}
let reject=()=>{}
let promise=new Promise((res,rej)=>{

resolve=res
reject=rej
})
return {resolve,reject,promise}

}
export interface Defered{
promise:Promise<any>
resolve:(result:any)=>void
reject:(reason:any)=>void

}
