export type AssessmentProps = {
    title: string,
    description: string,
    url: string,
}

export type AssessmentData = {
    id : string,
    name: string,
    description: string,

}
export type AnswerData = {
    id : string,
    answer: string,
    correct: boolean,
    isEdited?: boolean,
}
export type QuestionData = {
    id : string,
    question: string,
    order: number,
    isEdited?: boolean,
}