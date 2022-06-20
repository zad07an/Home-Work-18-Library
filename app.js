const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
    count: 25
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
    count: 34
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
    count: 10
  }
];

// Գրել այս ֆունկցիաները,որոնք ստանում են library-ն որպես պարամետր և կգտնեն library օբյեկտի․

// 1)Այն գրքի title-ը,որի քանակը(count) ամենաշատն է

function counter(library){
  let counter = library[0].count;
  for ( let i = 0; i < library.length; i++){
    if (counter < library[i].count){
      return library[i].title
    }
  }
}

console.log(counter(library))

// 2)Այն գրքի քանակը,որի libraryID-ն հավասար է 3245,եթե չկա այդպիսին,վերադարձնել 0

function libraryID(library){
  for (let i = 0; i < library.length; i++){
    if (library[i].libraryID === 3245){
      return library[i].count;  
    } 
  } 
  return 0;
}

