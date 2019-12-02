import masses from './data'

const calculateFuelForMass = (mass: number) => Math.trunc(mass / 3) - 2

const calculateFuelForMassRecursively = (mass: number) => {
  const fuel = calculateFuelForMass(mass)
  return fuel <= 0 ? 0 : fuel + calculateFuelForMassRecursively(fuel)
}

const calculateFuel = (masses: number[]) => masses.map(calculateFuelForMass)

const calculateFuelRecursively = (masses: number[]) =>
  masses.map(calculateFuelForMassRecursively)

const sum = (masses: number[]) => masses.reduce((acc, mass) => acc + mass)

console.log('Not recursively:', sum(calculateFuel(masses)))
console.log('Recursively:', sum(calculateFuelRecursively(masses)))
