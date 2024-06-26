import { FC, LazyExoticComponent, lazy } from "react";
const Recursion = lazy(() => import("./pages/Recursion"));
const SearchingAlgorithms = lazy(() => import("./pages/SearchingAlgorithms"));
const BubbleSort = lazy(() => import("./pages/BubbleSort"));
const SelectionSort = lazy(() => import("./pages/SelectionSort"));

const InsertionSort = lazy(() => import("./pages/InsertionSort"));
const MergeSort = lazy(() => import("./pages/MergeSort"));
const QuickSort = lazy(() => import("./pages/QuickSort"));
const RadixSort = lazy(() => import("./pages/RadixSort"));
const SingleLinkedLists = lazy(() => import("./pages/SingleLinkedLists"));
const DoubleLinkedLists = lazy(() => import("./pages/DoubleLinkedLists"));
const Stacks = lazy(() => import("./pages/Stacks"));
const Queues = lazy(() => import("./pages/Queues"));
const BinarySearchTrees = lazy(() => import("./pages/BinarySearchTrees"));
const TreeTraversal = lazy(() => import("./pages/TreeTraversal"));
const BinaryHeaps = lazy(() => import("./pages/BinaryHeaps"));
const HashTables = lazy(() => import("./pages/HashTables"));
const Graphs = lazy(() => import("./pages/Graphs"));
const GraphTraversal = lazy(() => import("./pages/GraphTraversal"));
const DijkstrasAlgorithm = lazy(() => import("./pages/DijkstrasAlgorithm"));
const DynamicProgramming = lazy(() => import("./pages/DynamicProgramming"));

const Homepage = lazy(() => import("./pages/Home"));
const BigoNotation = lazy(() => import("./pages/BigONotation"));

interface Route {
  path: string;
  title?: string;
  component: LazyExoticComponent<FC>;
}

const routes: Route[] = [
  {
    path: "/Home",
    component: Homepage,
  },
  {
    path: "/BigONotation",
    title: "Big O Notation",
    component: BigoNotation,
  },
  { path: "/Recursion", title: "Recursion", component: Recursion },
  {
    path: "/SearchingAlgorithms",
    title: "Searching Algorithms",
    component: SearchingAlgorithms,
  },
  { path: "/BubbleSort", title: "Bubble Sort", component: BubbleSort },
  { path: "/SelectionSort", title: "Selection Sort", component: SelectionSort },
  { path: "/InsertionSort", title: "Insertion Sort", component: InsertionSort },
  { path: "/MergeSort", title: "Merge Sort", component: MergeSort },
  { path: "/QuickSort", title: "Quick Sort", component: QuickSort },
  { path: "/RadixSort", title: "Radix Sort", component: RadixSort },
  {
    path: "/SingleLinkedLists",
    title: "Single Linked Lists",
    component: SingleLinkedLists,
  },
  {
    path: "/DoubleLinkedLists",
    title: "Double Linked Lists",
    component: DoubleLinkedLists,
  },
  { path: "/Stacks", title: "Stacks", component: Stacks },
  { path: "/Queues", title: "Queues", component: Queues },
  {
    path: "/BinarySearchTrees",
    title: "Binary Search Trees",
    component: BinarySearchTrees,
  },
  { path: "/TreeTraversal", title: "Tree Traversal", component: TreeTraversal },
  { path: "/BinaryHeaps", title: "Binary Heaps", component: BinaryHeaps },
  { path: "/HashTables", title: "Hash Tables", component: HashTables },
  { path: "/Graphs", title: "Graphs", component: Graphs },
  {
    path: "/GraphTraversal",
    title: "Graph Traversal",
    component: GraphTraversal,
  },
  {
    path: "/DijkstrasAlgorithm",
    title: "Dijkstra's Algorithm",
    component: DijkstrasAlgorithm,
  },
  {
    path: "/DynamicProgramming",
    title: "Dynamic Programming",
    component: DynamicProgramming,
  },
];

export { routes };
