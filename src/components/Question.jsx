import React, { useEffect, useState } from 'react';

import { useSpeechRecognition } from 'react-speech-kit';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"

export const Question = ({data}) =>{
    const [value, setValue] = useState('');
    const [isListening, setIsListening] = useState(false)

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            console.log(result)
        setValue(state => state + result);
        },
    });
    const { question, answer} = data

    const handleClick = () => {
        setIsListening(state => !state)
    }

    useEffect(()=> {
        if(isListening) {
            setValue('')
            listen({interimResults: false, lang: 'en-US'})
        } else {
            stop()
        }
    }, [isListening, listen, stop])

    return (
        <div className='border-b w-full pb-20 mb-20'>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="border-none" value="item-1">
                    <AccordionTrigger className="text-left" >{question}</AccordionTrigger>
                    
                    <AccordionContent className='text-lime-300'>
                        {answer}
                        { data.extras && (
                            <ul className='list-inside list-disc text-cyan-300 mt-4'>
                                Bonus points:
                              {data.extras?.map((extra, index) => (
                                <li className='my-2' key={index}>{extra}</li>
                            ))}
                            </ul>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <p className="mt-4 border w-full p-2 bg-slate-900"  onChange={(event) => setValue(event.target.value)}>
                {value}
            </p>
            <Button className='mx-auto my-4 w-32 block' onClick={()=> handleClick()}>
                {isListening ? 'Submit' : 'Answer'}
            </Button>
            { listening && <span>Listening...</span>}
        </div>

    )
}