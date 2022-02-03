import {TileType} from "../util/makeTile";
import {MouseEventHandler} from "react";

export type TileProps = TileType & {
  onClick: MouseEventHandler<HTMLDivElement>
}

const Tile = ({width, height, red, blue, green, onClick}:TileProps)=>{
  return (
    <div style={{
      width: width,
      height: height,
      margin: '2px',
      backgroundColor: `rgb(${red},${blue},${green})`,
      cursor: 'pointer'
    }} onClick={onClick}/>
  )
}

export default Tile;