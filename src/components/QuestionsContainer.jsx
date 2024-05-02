import {Question} from './Question'

export const QuestionsContainer = ({ questions }) => {
//     const [questions, setQuestions] = useState([])

// const selectQuestions = () => {
//     let randomQuestions = [];
//     const randomSet = getSet(10, questionList.length)

//     randomSet.forEach(randomNumber => {
//         randomQuestions.push(questionList[randomNumber])
//     })

//     setQuestions(randomQuestions)
// };

//     useEffect(() => {
//         selectQuestions(questionList)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [questionList]);
    

    return(
        <div className='w-full flex flex-col items-center p-8 max-w-5xl'>
            {questions.map(question => (
                <Question key={question.id} data={question} />
            ))}
        </div>
    )
}