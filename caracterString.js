function caracterString(string) {
    let objeto = {};
    for (let i = 0; i < string.length; i++) {
      if (objeto[string[i]]) {
        objeto[string[i]] += 1;
      } else {
        objeto[string[i]] = 1;
      }
    }
    return objeto;
  }
  
  console.log(caracterString('banana'));
  