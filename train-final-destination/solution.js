function reachDestination(distance, speed) {
  let initTimeCalc = distance/speed;
  let time = Math.round(initTimeCalc * 2) / 2
  
    if (time === 1) {
      return ('The train will be there in ' + time + ' hour.');
    } else {
      return ('The train will be there in ' + time + ' hours.');
    }
  }
  
  reachDestination();