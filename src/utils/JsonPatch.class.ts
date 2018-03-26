export interface IJsonPatch {
    op: Operation,
    path: string,
    value: any

}

export enum Operation {
    add = 'add',
    remove = 'remove',
    replace = 'replace',
    copy = 'copy',
    move = 'move',
    test = 'test'
}
