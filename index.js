const read = (start, length, cb) => {
  console.log('Read function')
  console.log('start, length', start, length)
  return cb
}

inputList = [
  { start: 2, length: 9, cb: "cb1" },
  { start: 4, length: 2, cb: "cb2" },
  { start: 5, length: 4, cb: "cb3" },
  { start: 1, length: 4, cb: "cb4" },
  { start: 5, length: 1, cb: "cb5" },
  { start: 15, length: 4, cb: "cb6" },
];

// organizo por el inicio 
inputList.sort((a, b) => {
  if (a.start > b.start) {
    return 1;
  }
  if (a.start < b.start) {
    return -1;
  }
  return 0;
});

// organizo por la longitud
inputList.sort((a, b) => {
  if (a.start === b.start && a.length > b.length) {
    return 1;
  }
  if (a.start === b.start && a.length < b.length) {
    return -1;
  }
  return 0;
});

let inputAux = {
  start: 0,
  length: 0,
};

let band = 0;
let cbArr = []

for (const input of inputList) {
  
  if (band === 0) {
    inputAux.start = input.start;
    inputAux.length = input.length;

    band = 1;
  }


  if (
    input.start > inputAux.start + inputAux.length - 1 
    ) {
   /*  "llamada  a la función " */
    read(inputAux.start, inputAux.length,[console.log('1'), console.log('2')])

    inputAux.start = input.start;
    inputAux.length = input.length;

    cbArr = []


    
  }

  if (
    input.start < inputAux.start + inputAux.length - 1 && inputAux.length < input.length
  ) {
    inputAux.length = input.length + input.start;
    cbArr.push(input.cb)

  } 

  
}
console.log(inputList);

/*  "llamada  a la función " */
read(inputAux.start, inputAux.length, cbArr)
