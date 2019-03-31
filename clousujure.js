function say(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}\n\n`)
    }
  }
  
  
  let oi = say('Oi')
  let ola = say('Olá')
  
  oi('wbruno')
  oi('Will')
  ola('Jéssica')