type coordinates3d = {
  x: number
  y: number
  z: number
}

type coordinates2d = {
  a: number
  b: number
}

interface IIsometricEngine {
  convert: ({ x, y, z }: coordinates3d) => coordinates2d
}

export const isometricEngine: IIsometricEngine = {
  convert ({ x, y, z }) {
    return {
      a: (-3 * x) + (3 * y) + (0),
      b: ((3 * x) + (3 * y) + (-6 * z)) * Math.tan(30 * Math.PI/180)
    }
  }
}