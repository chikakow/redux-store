// action constants
export const ADD_TODO = '[Todo] Add Todo';


// action creators
export class AddToDo {
    readonly type = ADD_TODO;

    constructor(private payload: any) {

    }
}