function createShape(shape) {
	for (const value in shape){
        console.log(shape[value]);
    }
}


// Sample usage - do not modify
createShape({
  type: "square",
  dimensions: [10, 10]
});

createShape({
  type: "rectangle",
  dimensions: [20, 15]
});