import BubbleSortUI from "../A/BubbleSort";
import SelectionSortUI from "../A/SelectionSort";
import DoublyLinkedListUI from "./DoublyLinkedList/DoublyLinkedListUI";
import GraphMatrixUI from "./Graph/GraphArrayUI";
import GraphListUI from "./Graph/GraphListUI";
import LinkedListComponent from "./SinglyLinkedList/LinkedListUI";
import TreeUI from "./Tree/TreeUI";

export type val = string | number;

export enum CustomModificationEnum {
  PopAtIndex = "PopAtIndex",
  PopValue = "PopValue",
  AppendAtIndex = "AppendAtIndex",
  AppendAfterValue = "AppendAfterValue",
}

export const StructureTypeEnum = {
  LinkedList: "--->",
  DoublyLinkedList: "<--->",
  Tree: "/\\",
};

export enum TreeTraversalTypeEnum {
  Inorder = "Inorder",
  Preorder = "Preorder",
  Postorder = "Postorder",
  BreadthFirst = "BreadthFirst",
  GetHeight = "GetHeight",
  GetDepth = "GetDepth",
  PopNode = "PopNode",
}

export const NavbarMain = [
  "LinkedList",
  "DoublyLinkedList",
  "Tree",
  "GraphMatrix",
  "GraphList",
  "BubbleSort",
  "SelectionSort",
];
type TRoutes = {
  component: React.FunctionComponent;
  path: string;
};
export const RouteElements: TRoutes[] = [
  {
    component: LinkedListComponent,
    path: "/LinkedList",
  },
  {
    component: DoublyLinkedListUI,
    path: "/DoublyLinkedList",
  },
  {
    component: TreeUI,
    path: "/Tree",
  },
  {
    component: GraphMatrixUI,
    path: "/GraphMatrix",
  },
  {
    component: GraphListUI,
    path: "/GraphList",
  },
  {
    component: BubbleSortUI,
    path: "/BubbleSort",
  },
  {
    component: SelectionSortUI,
    path: "/SelectionSort",
  },
];
