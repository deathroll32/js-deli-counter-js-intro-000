function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length ===0){
    return "There is nobody waiting to be served!"
  }
  else {
    var person=katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }
  else {
    var linegreeting = "The line is currently: "
    for(let i=0;i<line.length;i++){
      if (i<line.length-1){
        linegreeting+=`${i+1}. ${line[i]}, `
      }
      else {
        linegreeting+=`${i+1}. ${line[i]}`
      }
    }
    return linegreeting
  }
}