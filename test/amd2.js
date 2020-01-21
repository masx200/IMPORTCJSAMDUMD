define(async(require,exports,module)=>{

var vue=require("vue")
await new Promise(r=>{

setTimeout(r,500)
})
exports.hello=()=>{

console.log(vue)
}
})
