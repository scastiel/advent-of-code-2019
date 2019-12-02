import program from './data'

const
execute = (noun: number, verb: number) => {
  const programCopy = [...program]
  programCopy[1] = noun
  programCopy[2] = verb
  let position = 0
  while (true) {
    switch (programCopy[position]) {
      case 99:
        return programCopy[0]
      case 1:
        programCopy[programCopy[position + 3]] = programCopy[programCopy[position + 1]] + programCopy[programCopy[position + 2]]
        break
      case 2:
        programCopy[programCopy[position + 3]] = programCopy[programCopy[position + 1]] * programCopy[programCopy[position + 2]]
        break
      default:
        throw new Error(`Invalid value at position ${position}: ${programCopy[position]}`)
    }
    position += 4
  }
}

for (let noun = 0; noun < 99; noun++) {
  for (let verb = 0; verb < 99; verb++) {
    const result = execute(noun, verb)
    if (result === 19690720) {
      console.log(100 * noun + verb)
    }
  }  
}
