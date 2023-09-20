import { db } from '../../firebase';
import { collection, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { AnswerData, QuestionData } from '../../types/types';

type addAnswerProps = {
    answer: AnswerData,
    id: string,
}

export async function addAnswer(answer:AnswerData, id: string) {

    if (answer.answer === '') return;
    if (!answer.id) {
        // ADD Question
        const newDocRef = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', id, 'answers');

        await addDoc(newDocRef, {
        answer: answer.answer,
        correct: answer.correct || false,   
        });
    } 
    else {
        // UPDATE Question

        const docRef = doc(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', id, 'answers', answer.id);
        await updateDoc(docRef, {
            correct: answer.correct || false,
            answer: answer.answer || ''
        })

    }

}
/**
 * 
 * @param {string} questionID 
 * @param {string} answerId 
 */


export async function deleteAnswer(questionID:string, answerId:string) {

        const docRef = doc(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', questionID, 'answers', answerId);
        await deleteDoc(docRef);
}


type DeleteQuestionProps = string;
export async function deleteQuestion(questionID:DeleteQuestionProps) {

    const docRef = doc(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', questionID);
    await deleteDoc(docRef);
}


export async function addQuestion(question:QuestionData) {

    if (question.question === '') return;
    if (!question.id) {
        // ADD Question
        const newDocRef = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions');

        const { id } = await addDoc(newDocRef, {
        question: question.question,
        order: 0,   
        })
        return id;
    } 
    else {
        // UPDATE Question

        const docRef = doc(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', question.id);
        await updateDoc(docRef, {
            question: question.question,
            order: 0
        })
        return question.id
    }

}