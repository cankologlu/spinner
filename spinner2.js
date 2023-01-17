spinnerArray = ["|", "/", "-", "\\","|"] // Shapes to give the effects

let counter = 100;      // Counter for the timer
for(let i=0; i < 3; i++) {


for(let shape of spinnerArray) {
  counter += 200;
  setTimeout(() => {
    process.stdout.write(`\r${shape}`)
  },counter);
}
};
setTimeout(() => {
  console.log("\n");
}, counter);

// setTimeout(() => {
//   process.stdout.write("\r|    ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/    ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-    ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\    ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|    ");
// }, 900);