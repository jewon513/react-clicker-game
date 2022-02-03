import Tile from "./Tile";
import {TileType} from "../util/makeTile";
import styles from "./../styles/Home.module.css"

export type MainProps = {
  tiles: Array<TileType>
  AnswerClick: Function
  noAnswerClick: Function
}

const Main = ({tiles, AnswerClick, noAnswerClick}:MainProps)=>{

  const tileClick = (isAnswer:boolean)=>{
    if(isAnswer){
      AnswerClick()
    }else{
      noAnswerClick()
    }
  }

  return (
    <div className={styles.tileContainer}>
      {tiles.map((tile,index)=> {
        return (
          <Tile
            {...tile}
            key={index}
            onClick={()=>{
              tileClick(tile.isAnswer)
            }}
          />
        )
      })}
    </div>
  )
}

export default Main