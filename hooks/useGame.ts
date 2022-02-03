import {useEffect, useState} from "react";
import makeTile, {TileType} from "../util/makeTile";

let interval: any = undefined
const useGame = () => {
  const [stage, setStage] = useState(1);
  const [count, setCount] = useState(15);
  const [score, setScore] = useState(0);
  const [tiles, setTiles] = useState<Array<TileType>>([])
  const [gameOver, setGameOver] = useState(false);

  const AnswerClick = () => {
    setStage((prev) => prev + 1)
    setScore((prev) => prev + Math.pow(stage, 3) * count)
    setCount(15)
  }

  const noAnswerClick = () => {
    if(count >= 3){
      setCount((prev) => prev-3)
    }else{
      setCount(0)
    }
  }

  const resetGame = () => {
    setStage(1)
    setCount(15)
    setScore(0)
    setTiles(makeTile(1))
    setGameOver(false)
    clearInterval(interval)
    interval = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
  }

  useEffect(() => {
    resetGame()
    return ()=>{
      clearInterval(interval)
    }
  }, [])

  useEffect(()=>{
    setTiles(makeTile(stage))
  },[stage])

  useEffect(() => {
    if (count <= 0) {
      setGameOver(true)
    }
  }, [count])

  useEffect(() => {
    if(gameOver){
      alert(`
        Game Over!
        stage: ${stage}, score: ${score}
      `)
    }
    resetGame()
  }, [gameOver])

  return {stage, count, score, tiles, AnswerClick, noAnswerClick}
}

export default useGame