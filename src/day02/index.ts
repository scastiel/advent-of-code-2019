import program from './data'

const applyFunction = (
  program: number[],
  position: number,
  fn: (a: number, b: number) => number
) => {
  const a = program[program[position + 1]]
  const b = program[program[position + 2]]
  program[program[position + 3]] = fn(a, b)
}

const execute = (program: number[], noun: number, verb: number) => {
  program[1] = noun
  program[2] = verb
  let position = 0
  while (true) {
    switch (program[position]) {
      case 99:
        return program[0]
      case 1:
        applyFunction(program, position, (a, b) => a + b)
        break
      case 2:
        applyFunction(program, position, (a, b) => a * b)
        break
      default:
        throw new Error(
          `Invalid value at position ${position}: ${program[position]}`
        )
    }
    position += 4
  }
}

for (let noun = 0; noun < 99; noun++) {
  for (let verb = 0; verb < 99; verb++) {
    const result = execute([...program], noun, verb)
    if (result === 19690720) {
      console.log(100 * noun + verb)
    }
  }
}
