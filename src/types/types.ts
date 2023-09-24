


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
    time?: number,
}
export type AssessmentData = {
    id: string,
    name: string,
    description: string,
    isEdited?: boolean,
    published?: boolean,
}