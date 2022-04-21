interface ProjectInterface {
  finishProject(): void;
  readonly done: boolean;
}

export default class Project implements ProjectInterface {
  static projectCount: number = 0;
  private _id: string;
  private _done: boolean = false;
  // readonly done: boolean;
  private _title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this._id = `pr_${++Project.projectCount}`;
    this._title = title;
    this._price = price;
  }

  // sukurti getteri done statusui gauti isoreje
  get done(): boolean {
    // validacija
    return this._done;
  }

  get id(): string {
    return this._id;
  }

  finishProject(): void {
    this._done = true;
  }
}
