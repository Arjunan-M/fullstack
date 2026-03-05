const obj = {
  Name: "arjunan",
  age: 20,
  city: "madurai",
  profession: "Ai engineering",
};

console.log("Original object:", obj);
console.log("\nProperties:");
Object.keys(obj).forEach((k, i) => {
  console.log(`${i + 1}. ${k}:`, obj[k]);
});
const keys = Object.keys(obj);
if (keys.length >= 2) {
  const secondKey = keys[1];
  delete obj[secondKey];
  console.log(`\nDeleted second property: ${secondKey}`);
} else {
  console.log("\nNo second property to delete.");
}

const length = Object.keys(obj).length;
console.log("\nResulting object:", obj);
console.log("Number of properties:", length);
