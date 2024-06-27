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
