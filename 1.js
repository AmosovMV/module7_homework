const obj={
  a:100,
  b:'qwerty',
  c:true,
}

function getKey() {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}`+ ":" + obj[key]); 
    }   
  }
}

getKey();