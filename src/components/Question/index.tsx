import React from 'react';
import * as S from './style';
import QuestionCard from 'components/questionCard';

interface Props { }

function Question({ }: Props): React.ReactElement {
    const questions = [
        {
            title: 'What is Klay Safe?',
            info: 'Read about the basics of Klay Safe and how it compares to others.',
            url: '#',
        },
        {
            title: 'Create a Klay Safe account',
            info: 'The full process of creating a new Klay Safe account in just 60 seconds',
            url: '#',
        },
        {
            title: 'What Klay Safe setup should I use?',
            info: 'This will provides some information on what to consider when setting.',
            url: '#',
        },

    ]
    return (
        <S.Container>
            <S.QuestionContainer>
                <S.QuestionWrapper >
                    {questions.map((question: any, index: number) => {
                        return (
                            <S.CardWrapper key={index}>
                                <QuestionCard
                                    title={question.title}
                                    info={question.info}
                                    url={question.url}
                                />
                            </S.CardWrapper>
                        )
                    })}
                </S.QuestionWrapper>
                <S.Guide>
                    <S.GuideTitle>
                        Getting started with
                        Frequently asked question
                    </S.GuideTitle>
                    <S.GuideInfo>
                        Here are some advice and answers from the Klay Safe Team. Everything you need to know so you can use Klay Safe like a pro.
                    </S.GuideInfo>
                </S.Guide>
            </S.QuestionContainer>
        </S.Container>

    )
}

export default Question;