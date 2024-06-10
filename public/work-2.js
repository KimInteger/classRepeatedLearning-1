const createPerson = (callback)=>{
  let person = {};
  callback(person, setName);
};

const setName = (person, callback) => {
  person.name = '김인티저';
  callback(person, setAge);
};

const setAge = (person, callback) =>{
  person.age = 29;
  callback(person, setJob);
}

const setJob = (person) => {
  person.job = "I'm not NEET!";
  console.log(person);
};

createPerson((person, callback) => callback(person, setName));