export type val = string | number;

export type NodeElementType = {
  val: val;
  next: NodeElementType | null;
};
