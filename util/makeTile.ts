export type TileType = {
  red: number
  blue: number
  green: number
  width: string
  height: string
  isAnswer: boolean
}

const makeTile = (stage: number): Array<TileType> => {

  const MAX_RANGE = 256
  const DIFFER = 20 - Math.floor((stage / 4))
  const ROW_COUNT = Math.round((stage + 0.5) / 2) + 1
  const TILES_LENGTH = Math.pow(ROW_COUNT, 2)
  const ANSWER_INDEX = Math.floor(Math.random() * TILES_LENGTH)

  const MARGIN = 2
  const SQUARE_LENGTH  = (360 / ROW_COUNT) - (MARGIN * 2)

  const RED = Math.floor(Math.random() * MAX_RANGE)
  const BLUE = Math.floor(Math.random() * MAX_RANGE)
  const GREEN = Math.floor(Math.random() * MAX_RANGE)

  const tiles = new Array<TileType>(TILES_LENGTH).fill({
    red:RED,
    blue:BLUE,
    green:GREEN,
    isAnswer:false,
    width: `${SQUARE_LENGTH}px`,
    height: `${SQUARE_LENGTH}px`
  }).map((tile, index)=>{
    if(index === ANSWER_INDEX){
      return {
        ...tile,
        red: tile.red - DIFFER,
        blue: tile.blue - DIFFER,
        green: tile.green - DIFFER,
        isAnswer: true
      }
    }else{
      return {
        ...tile
      }
    }
  })

  return tiles
}

export default makeTile