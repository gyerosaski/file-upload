export interface TreeNode {
    name: string;
    dir: string;
    children?: TreeNode[] | undefined;
}

export interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
}
