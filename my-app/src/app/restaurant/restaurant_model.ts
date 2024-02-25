export class restaurant_model {
  id: number;
  name: string;
  phone_number: string;
  address: string;
  zip_code!:number;
  city: string;
  cuisine: string;
  is_fast_food!: boolean;
  is_breakast!: boolean;

  constructor(id: number, name: string, phone_number: string, address: string, city: string, cuisine: string) {
    this.id = id;
    this.name = name;
    this.cuisine = cuisine;
    this.phone_number = phone_number;
    this.address = address;
    this.city = city;
  }
}

