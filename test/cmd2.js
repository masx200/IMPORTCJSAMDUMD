define(async (require, exports, module) => {
  console.time("wait 500");
  var vue = require("vue");
  await new Promise(r => {
    setTimeout(r, 500);
  });
  exports.hello = () => {
    console.log(vue);
  };

  console.timeEnd("wait 500");
});
