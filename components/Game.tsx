import Header from "./Header";
import Main from "./Main";
import useGame from "../hooks/useGame";

const Game = () => {

  const {stage, score, count, tiles, AnswerClick, noAnswerClick} = useGame();

  return (
    <div>
      <Header stage={stage} count={count} score={score}/>
      <Main tiles={tiles} AnswerClick={AnswerClick} noAnswerClick={noAnswerClick}/>
    </div>
  )
}

export default Game;