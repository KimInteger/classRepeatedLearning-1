// Person 클래스 저의
class Person {
  constructor() {
    // 속성 정적으로 초기화
    this._name = '';
    this._age = 0;
    this._job = '';
  }

  // name property
  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  // age property
  set age(value){
    this._age = value;
  }

  get age() {
    return this._age;
  }

  // job property
  set job(value){
    this._job = value;
  }

  get job() {
    return this._job;
  }
}

const person = new Person();
person.name = '김인티저';
person.age = 29;
person.job = '백수탈출지망생';

//객체 속성 출력
console.log('Name:', person.name);
console.log('Age:', person.age);
console.log('Job:', person.job);

console.dir(person);