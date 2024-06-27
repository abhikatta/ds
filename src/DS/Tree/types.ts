export type TreeNodeElementType = {
  val: number;
  left: TreeNodeElementType | null;
  right: TreeNodeElementType | null;
};

export type MetricType = {
  type: "Height" | "Depth" | "";
  value: number;
};

export type popElementType = {
  value: string;
  isPopButtonPressed: boolean;
};
