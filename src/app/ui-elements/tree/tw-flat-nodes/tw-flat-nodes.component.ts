import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
    name: string;
    children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {
        name: 'Fruit',
        children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
            },
            {
                name: 'Orange',
                children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
            },
        ],
    },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

@Component({
    selector: 'app-tw-flat-nodes',
    standalone: true,
    imports: [MatTreeModule, MatButtonModule],
    templateUrl: './tw-flat-nodes.component.html',
    styleUrl: './tw-flat-nodes.component.scss'
})
export class TwFlatNodesComponent {

    private _transformer = (node: FoodNode, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
        };
    };

    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level,
        node => node.expandable,
    );

    treeFlattener = new MatTreeFlattener(
        this._transformer,
        node => node.level,
        node => node.expandable,
        node => node.children,
    );

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}