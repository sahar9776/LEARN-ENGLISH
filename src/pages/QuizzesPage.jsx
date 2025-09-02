import { quizzesList } from "../asstes/data/db";
import ExamIntroduction from "../components/ExamIntroduction";
import ExamItem from "../components/ExamItem";


function QuizzesPage() {

  return (
    <div className="min-w-screen h-auto">
      <ExamIntroduction />
      {/* {
        quizzesList.map(item => (
          <ExamItem key={item.id} {...item} />
        ))
      } */}
    </div>
  )
}

export default QuizzesPage
