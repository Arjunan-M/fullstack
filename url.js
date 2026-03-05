let p = "https://www.google.com:9090/directory/file.html?id=123&sort=asc";
let u = new URL(p); 
console.log("Protocol:", u.protocol);
console.log("Host:", u.host);
console.log("Hostname:", u.hostname);
console.log("Port:", u.port || "null");
console.log("Pathname:", u.pathname);
console.log("Search:", u.search);
console.log("SearchParams:");
u.searchParams.forEach((value, key) => {
    console.log(`   ${key} = ${value}`);
});
console.log("Hash:", u.hash);
