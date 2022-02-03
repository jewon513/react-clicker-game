export type HeaderProps = {
  stage: number,
  score: number,
  count: number,
}

const Header = ({stage, score, count}:HeaderProps)=>{
  return (
    <div>
      stage: {stage} score: {score}, time: {count}
    </div>
  )
}

export default Header