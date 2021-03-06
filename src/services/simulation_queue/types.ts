export enum AbilityType {
  MELEE = "MELEE",
  PROJECTILE = "PROJECTILE",
}

export type AbilityConfig = {
  name: string
  type: AbilityType
  radius: number
  distanceFromChar: number
  speed: number

  activeTime: number
  startupTime: number
  executionTime: number

  endlagTime: number
  rechargeTime: number

  damage: number
  baseKnockback: number
  knockbackRatio: number
  knockbackPoint: number
  knockbackTowardPoint: boolean
}

export type CharacterConfig = {
  characterId: string
  name: string
  radius: number
  moveVelocity: number
  abilities: AbilityConfig[]
}

export type SimulationData = {
  simulationId: string
  charactersConfigs: CharacterConfig[]
  metrics: string[]
}

export type SimulationResult = {
  simulationId: string
  simulationData: SimulationData
  metrics: Record<string, number>
}

export type EvolvedCharacter = {
  fitness: number
  characterConfig: CharacterConfig
}

export type EvolvedPopulation = {
  populationId: string
  epoch: number
  isFinalEpoch: boolean
  evolvedCharacters: EvolvedCharacter[]
}
