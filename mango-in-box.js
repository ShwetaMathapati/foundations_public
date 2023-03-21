/*Each box of mangoes contains 20 mangoes. A crate can contain 16 boxes. A warehouse can store 500 crates of mangoes. Print the total number of mangoes in the Warehouse.

***Note*** : Do not multiply numeric values directly, instead use the given variables.*/

let mangoesInBox = 20;
let warehouseCapacity = 500;
let boxesInACrate = 16;
let mangoesInCrate = mangoesInBox * boxesInACrate; // write your code here
let mangoesInWareHouse = mangoesInCrate * warehouseCapacity;// write your code here
console.log(mangoesInWareHouse);
