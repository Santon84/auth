import { db } from '../../firebase';
import { collection, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { AnswerData, QuestionData } from '../../types/types';

type addAnswerProps = {
    answer: AnswerData,
    id: string,
}

export async function addAnswer({answer, id}:addAnswerProps) {

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


export async function deleteAnswer(questionID:string, answerId:string) {

        const docRef = doc(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', questionID, 'answers', answerId);
        await deleteDoc(docRef);
}



