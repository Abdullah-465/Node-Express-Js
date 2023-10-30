console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

setImmediate(() => {
  console.log("Immediate callback");
});

console.log("End"); 