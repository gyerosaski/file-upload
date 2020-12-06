import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {
  dirs: string[] = [];
  treeData: TreeNode[] = [];
  selectedFileDirectory: string;

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<FileTreeComponent>
  ) { }

  ngOnInit() {
    this.api.fileTreeGet().subscribe((res: string) => {
      this.dirs = res.split('\n').filter(dir => dir);
      this.dirs.forEach(dir => {
        const temp = dir.trim().split('/');
        this.nodeCreate(this.treeData, temp[0], temp.slice(1), dir.trim());
      })
      this.dataSource.data = this.treeData;
    });
  }


  nodeCreate(parentNode: TreeNode[], name: string, children: string[], dir: string) {
    const alreadyExist = parentNode.find(node => node.name === name);
    if (!alreadyExist) {
      const index = parentNode.push({
        name: name,
        dir: dir,
      }) - 1;
      if (children.length) {
        parentNode[index].children = [];
        this.nodeCreate(parentNode[index].children, children[0], children.slice(1), dir);
      }
    } else {
      this.nodeCreate(alreadyExist.children, children[0], children.slice(1), dir)
    }
  }

  onSelectionAcceptClick() {
    this.dialogRef.close(this.selectedFileDirectory);
  }

  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      dir: node.dir
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


}
