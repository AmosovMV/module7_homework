const strObj =  (str,obj) => {
  let key = false;
  if (str in obj) key = true
  console.log(key);
}

const obj = {
  a: 100,
  b: 'string',
  c: 1221,
}

strObj ('a',obj)