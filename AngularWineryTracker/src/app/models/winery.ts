export class Winery {
  id: number;
  name: string | null;
  street: string | null;
  city: string | null;
  state: string | null;

  constructor(
    id: number = 0,
    name: string = "",
    street: string = "",
    city: string = "",
    state: string = ""
  ){
    this.id = id;
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  }
}
