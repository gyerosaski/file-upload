export interface TreeNode {
    name: string;
    dir: string;
    children?: TreeNode[] | undefined;
}
