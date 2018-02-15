interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
};

interface IListItem<T> {
  value: T;
  previous: IListItem<T> | undefined;
};

interface ILinkedList<T> {
  size: number;
  add(val: T): void;
  remove(): T | undefined;
};

class ListItem<T> implements IListItem<T> {
  value: T;
  previous: IListItem<T> | undefined = undefined;
  constructor(val: T) {
    this.value = val;
  }
}

class LinkedList<T> implements ILinkedList<T> {
  private tail: IListItem<T> | undefined = undefined;
  size: number = 0;
  constructor() {}
  add(val: T) {
    this.size++;
    let item = new ListItem(val);
    if (!this.tail) {
      this.tail = item;
    } else {
      item.previous = this.tail;
      this.tail = item;
    }
  }
  remove() {
    if (!this.tail) {
      return undefined;
    } else {
      this.size--;
      let oldTail = this.tail;
      this.tail = oldTail.previous;
      return oldTail.value;
    }
  }
}

export class Stack<T> implements IStack<T> {
  private list: ILinkedList<T> = new LinkedList<T>();
  constructor() {}
  push(item: T): IStack<T>
  push(items: T[]): IStack<T>
  push(item: T | T[]): IStack<T> {
    if (Array.isArray(item)) {
      item.forEach(element => this.list.add(element));
    } else {
      this.list.add(item);
    }
    return this;
  }
  pop(): T | undefined {
    return this.list.remove();
  }
  length() {    
    return this.list.size;
  }
  print(): void {
    console.log(this.list);
  }
}