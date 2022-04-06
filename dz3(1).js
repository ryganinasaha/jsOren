function showChar(str, index) {
    if (str.length <= index) {
      return
    }
    console.log(str.charAt(index));
  
    showChar(str, index + 1);
  }
  const str = `To be, or not to be, that is the question`
  
  showChar(str, 0)