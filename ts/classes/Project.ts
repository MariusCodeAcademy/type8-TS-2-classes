interface ProjectInterface {
  finishProject(): void;
  readonly done: boolean;
}

export default class Project implements ProjectInterface {
  private _id: string;
  private _done: boolean = false;
  // readonly done: boolean;
  private _title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this._id = `pr_${Math.round(Math.random() * 100000000)}`;
    this._title = title;
    this._price = price;
  }

  // sukurti getteri done statusui gauti isoreje
  get done(): boolean {
    // validacija
    return this._done;
  }

  finishProject(): void {
    this._done = true;
  }
}
