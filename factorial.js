function findFactorial(factorial) {

  if(isNaN(factorial) || factorial < 0 ) {
    return "Invalid number";
  }

  if(factorial === 0) {
    return 1;
  }

  return factorial * findFactorial(--factorial);
}

