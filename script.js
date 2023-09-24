// Complete the js code

const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  // complete the function
	const container = document.getElementById('container');
            for (let i = 0; i < 10000; i++) {
                const element = document.createElement('div');
                element.className = 'box';
                container.appendChild(element);
                elementsCount++;
                memoryUsage += 0.0002; // Simulate memory usage (adjust this value as needed)
                updateMemoryUsage();
            };
  


// Function to remove DOM elements
const removeElements = () => {
  // complete the function
	  const container = document.getElementById('container');
            container.innerHTML = '';
            elementsCount = 0;
            memoryUsage = 0;
            updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  // Complete this function
	  const memoryUsageDisplay = document.getElementById('memoryUsage');
            memoryUsageDisplay.textContent = `Memory Usage: ${memoryUsage.toFixed(2)} MB`;

            if (memoryUsage > memoryLimit) {
                alert("Memory usage has exceeded 50 MB. Please optimize your actions to reduce memory consumption.");
            }
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);
