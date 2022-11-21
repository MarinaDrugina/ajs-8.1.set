export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character already exists!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    const arr = [];
    arr.push(...characters);
    arr.forEach((char) => this.members.add(char));
  }

  toArray() {
    return Array.from(this.members);
  }
}
