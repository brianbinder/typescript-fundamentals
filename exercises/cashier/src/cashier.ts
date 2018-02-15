interface CartItem {
  name: string;
  price: number;
  qty: number;
};

interface CartAPI {
  length: number;
  total: number;
  addItem(item: CartItem): CartAPI;
  add(name: string, price: number, qty: number): CartAPI;
}

export function cashier(): CartAPI {
  let items: CartItem[] = [];
  return {
    get length() {
      return items.reduce((cartLength, item) => {
        return cartLength + item.qty;
      }, 0);
    },
    get total() {
      return items.reduce((cartPrice, item) => {
        return cartPrice + (item.price * item.qty);
      }, 0);
    },
    addItem(item) {
      items.push(item);
      return this;
    },
    add(name, price, qty = 1) {
      items.push({
        name, price, qty
      });
      return this;
    }
  };
}

