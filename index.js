// Your code here
function saturdayFun(something = "roller-skate") {
  return `This Saturday, I want to ${something}!`;
}

function mondayWork(something = "go to the office") {
  return `This Monday, I will ${something}.`;
}

function wrapAdjective {
  return function(emphasis = "*") {
    return function(something = "special") {
      return `You are ${emphasis} ${something} ${emphasis}!`;
    }
  }
}
