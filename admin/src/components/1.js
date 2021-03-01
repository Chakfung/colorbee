let a = [
  {
    name:'aaa',
    parent:{
      age:20
    }
  },
  {
    name:'bbb',
    parent:{
      age:18
    }
  },
  {
    name:'ccc',
    parent:{
      age:20
    }
  },

]

let b = a.filter(obj=>{
  console.log(obj);
  return obj.parent.age === 20
})

console.log(b);
