import { useState } from 'react';

import {REACT_QUESTIONS, NEXT_QUESTIONS, BEHAVIORAL_QUESTIONS} from '../data'

import { QuestionsContainer } from '../components/QuestionsContainer';
import { SubjectSelect } from '../components/SubjectSelect';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { paginate } from '../utils';

export const Home = () => {
    
  const [selectedSubject, setSelectedSubject] = useState('react')
  const [page, setPage] = useState(0)

  const questions = {
    react: REACT_QUESTIONS,
    next: NEXT_QUESTIONS,
    behavioral: BEHAVIORAL_QUESTIONS
  }

  
  const prepareQuestions = (subject) => {
    setSelectedSubject(subject)
  }

  const paginatedQuestions = paginate(questions[selectedSubject], 10);
  
    return (
        <div className='flex flex-col w-full h-screen items-center justify-start'>
        <h1 className='text-5xl text-primary my-8 italic font-great' >Quizzard</h1>
        <SubjectSelect handleValueChange={prepareQuestions} />
        
        <h2 className='text-xl my-6 border-b'>
            Questions about <span className='text-primary'>{selectedSubject}</span>
        </h2>

        <Pagination>
          <PaginationContent>
            { paginatedQuestions.map((question, index) => (
              <PaginationItem>
                <PaginationLink onClick={() => setPage(index)} isActive={page === index}>{index + 1}</PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>

        <QuestionsContainer questions={paginatedQuestions[page]} />
      </div>
    )
}