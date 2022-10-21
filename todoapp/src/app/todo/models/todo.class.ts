export class Todo {
  constructor(
    public id: number,
    public todo: string,
    public isCompleted: boolean = false
  ) {}
}
