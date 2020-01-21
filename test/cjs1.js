console.time("cjs wait 500");
await new Promise(r=>{

setTimeout(r,500)
})
exports.cjs=()=>{

console.log("cjs await")
}
console.timeEnd("cjs wait 500");
