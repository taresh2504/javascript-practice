// ans 1 
const students = [
  { name: "Aman", marks: 85 },
  { name: "Preet", marks: 45 },
  { name: "Karan", marks: 60 },
  { name: "Meena", marks: 35 }
];

const passingStudents = students.filter(student => student.marks >= 50);

const passedNames = passingStudents.map(student => student.name);

console.log("Passed Students:", passedNames);

// ans 2  

const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Carrot", "Potato", "Tomato"];

const mergedItems = [...fruits, ...vegetables];

const finalItems = [...mergedItems, "Milk"];

console.log("Merged Items:", mergedItems);
console.log("Final Items:", finalItems);

// ans 3 

const colors = ["red", "green", "blue", "yellow"];

const [firstColor, secondColor, , fourthColor] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Fourth Color:", fourthColor);

// ans 4 

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 }
];

const updatedProducts = products.map(product => ({
  name: product.name,
  price: product.price * 1.1
}));

console.log("Updated Products:", updatedProducts);






