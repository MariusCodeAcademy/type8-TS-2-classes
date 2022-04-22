interface ProjectInterface {
  finishProject(): void;
  readonly done: boolean;
  readonly price: number;
  readonly id: string;
}

export default class Project implements ProjectInterface {
  static projectCount: number = 0;
  private _id: string;
  private _done: boolean = false;
  // readonly done: boolean;
  private _title: string;
  readonly price: number;

  constructor(title: string, price: number) {
    this._id = `pr_${++Project.projectCount}`;
    this._title = title;
    this.price = price;
  }

  // sukurti getteri done statusui gauti isoreje
  get done(): boolean {
    // validacija
    return this._done;
  }

  get id(): string {
    return this._id;
  }
  get title(): string {
    return this._title;
  }

  finishProject(): void {
    this._done = true;
  }
}
