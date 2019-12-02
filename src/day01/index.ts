import masses from './data'

const calculateFuelForMass = (mass: number) => Math.trunc(mass / 3) - 2

const calculateFuelForMassRecursively = (mass: number) => {
  const fuel = calculateFuelForMass(mass)
  return fuel <= 0 ? 0 : fuel + calculateFuelForMassRecursively(fuel)
}

const calculateFuel = (masses: number[]) =>
  // First puzzle:
  // masses.map(calculateFuelForMass)
  // Second puzzle:
  masses.map(calculateFuelForMassRecursively)

const sum = (masses: number[]) => masses.reduce((acc, mass) => acc + mass)

console.log(sum(calculateFuel(masses)))
