export class Todo {
  public id: number;
  constructor(
    public todo: string,
    public isCompleted: boolean = false
  ) {}
}
