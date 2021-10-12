const fetchAPI = fetch('https://js-post-api.herokuapp.com/api/students');
fetchAPI
.then(data => {
    if(data.ok) console.log('ok');
})

const a = {
    name: 'John',
    age: 0,
};
if(a?.age) { console.log(a.name)}

const rule = {
  firstName: {
    required:true
  },
  lastName: {
    required:true
  }
}

const validate = (rule, values) => {
  for(prop in rule) {
    if(rule[prop].required) {
      if(!values[prop]) {
        return false;
      }
    }
  }
  return true;
}

console.log(validate(rule, {firstName:'Duy'})); // false
console.log(validate(rule, {firstName:'Duy',lastName:'Buffet'})); // true