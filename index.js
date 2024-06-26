import { promises, writeFile } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Define the cards array
const cards = [
  {
    title: "Recursion",
    link: "Recursion",
  },
  {
    title: "Searching Algorithms",
    link: "SearchingAlgorithms",
  },
  {
    title: "Bubble Sort",
    link: "BubbleSort",
  },
  {
    title: "Selection Sort",
    link: "SelectionSort",
  },
  {
    title: "Insertion Sort",
    link: "InsertionSort",
  },
  {
    title: "Merge Sort",
    link: "MergeSort",
  },
  {
    title: "Quick Sort",
    link: "QuickSort",
  },
  {
    title: "Radix Sort",
    link: "RadixSort",
  },
  {
    title: "Single Linked Lists",
    link: "SingleLinkedLists",
  },
  {
    title: "Double Linked Lists",
    link: "DoubleLinkedLists",
  },
  {
    title: "Stacks",
    link: "Stacks",
  },
  {
    title: "Queues",
    link: "Queues",
  },
  {
    title: "Binary Search Trees",
    link: "BinarySearchTrees",
  },
  {
    title: "Tree Traversal",
    link: "TreeTraversal",
  },
  {
    title: "Binary Heaps",
    link: "BinaryHeaps",
  },
  {
    title: "Hash Tables",
    link: "HashTables",
  },
  {
    title: "Graphs",
    link: "Graphs",
  },
  {
    title: "Graph Traversal",
    link: "GraphTraversal",
  },
  {
    title: "Dijkstra's Algorithm",
    link: "DijkstrasAlgorithm",
  },
  {
    title: "Dynamic Programming",
    link: "DynamicProgramming",
  },
];

// Path to the routes.ts file
const routesFilePath = join(__dirname, "src", "routes.ts");

// Function to create import and route entries
const updateRoutesFile = async () => {
  let fileContent = await promises.readFile(routesFilePath, "utf8");

  // Generate imports
  const imports = cards
    .map(
      (card) =>
        `const ${card.link} = lazy(() => import("./pages/${card.link}"));`
    )
    .join("\n");

  // Generate route objects
  const routeObjects = cards
    .map(
      (card) =>
        `{ path: "/${card.link}", title: "${card.title}", component: ${card.link} },`
    )
    .join("\n  ");

  // Place the new imports and routes before and inside the existing routes array
  const importsIndex =
    fileContent.indexOf(
      'import { FC, LazyExoticComponent, lazy } from "react";'
    ) + 'import { FC, LazyExoticComponent, lazy } from "react";'.length;

  const routesIndex =
    fileContent.indexOf("const routes: Route[] = [") +
    "const routes: Route[] = [".length;

  // Insert the generated content into the file content
  fileContent =
    fileContent.slice(0, importsIndex) +
    "\n" +
    imports +
    "\n" +
    fileContent.slice(importsIndex);

  fileContent =
    fileContent.slice(0, routesIndex) +
    "\n  " +
    routeObjects +
    "\n  " +
    fileContent.slice(routesIndex);

  // Write back the modified content to the file
  await promises.writeFile(routesFilePath, fileContent, "utf8");
  console.log("Routes file has been updated successfully.");
};

updateRoutesFile().catch(console.error);
