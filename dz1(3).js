function createHeaders(N){
    //for (let i = 1; i <= N; i++) {
    //  console.log('<h2>Header${i}<h2>')
    //}
    let i = 1;
  
    while(i <= N) {
      document.write(`<h2>Header${i}<h2>`)
      //console.log(`<h2>Header${i}<h2>`)
  
    i++
    }
  
  }
 
  
  
  createHeaders(100)