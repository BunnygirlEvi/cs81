function Person(name, mother, father, spouse, children) {
  this.name = name;
  this.mother = mother;
  this.father = father;
  this.spouse = spouse;
  this.children = children;
  this.changeSpouse = function (spouse) {
    this.spouse = spouse;
  };
  this.toString = function () {
    let childrenName = [];
    if (this.children != undefined) {
      for (const child of this.children) {
        childrenName.push(child.name);
      }
    }
    return `name: ${this.name}, mother: ${
      this.mother && this.mother.name
    }, father: ${this.father && this.father.name}, spouse: ${
      this.spouse && this.spouse.name
    }, children: ${childrenName.join(", ")}`;
  };
}

const tuulia = new Person();

const sipho = new Person();

const ani = new Person();

const aolani = new Person("Aolani", ani, sipho, undefined, undefined);

const hiro = new Person("Hiro", ani, sipho, undefined, undefined);

const xue = new Person("Xue", ani, sipho, undefined, undefined);

tuulia.children = [sipho];

tuulia.name = "Tuulia";

sipho.name = "Sipho";

sipho.mother = tuulia;

sipho.spouse = ani;

sipho.children = [aolani, hiro, xue];

ani.name = "Ani";

ani.spouse = sipho;

ani.children = [aolani, hiro, xue];

console.log("::::::::::" + tuulia);
console.log("::::::::::" + sipho);
console.log("::::::::::" + ani);
console.log("::::::::::" + aolani);
console.log("::::::::::" + hiro);
console.log("::::::::::" + xue);
