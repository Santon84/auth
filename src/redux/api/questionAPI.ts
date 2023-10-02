import { db } from '../../firebase';
import { collection, getDocs, doc, deleteDoc, addDoc , updateDoc} from 'firebase/firestore';
import { AnswerData, AssessmentData, QuestionData } from '../../types/types';



export async function getQuestionListByAssessmentId(assessmentId:string, userId:string) {

    try {
        const todoCollection = collection(db, 'user-id', userId, 'assessments', assessmentId, 'questions');
        const toDoSnapshot = await getDocs(todoCollection);
        const data = toDoSnapshot.docs.map(doc => {
        return (({...doc.data(),id: doc.id}) as QuestionData)
    } );
        return {error: null, data: data};
    } 
    catch(e: any) {
        return {error: e, data: null};
    }

}



export type DeleteQuestionProps = {

    questionId: string,
    userId: string,
    assessmentId: string
    
}

export async function deleteQuestionById({questionId, userId, assessmentId}:DeleteQuestionProps) {
    try {
        const docRef = doc(db, 'user-id', userId, 'assessments', assessmentId , 'questions', questionId);
        await deleteDoc(docRef);
        return {error: null, id: questionId};
    }
    catch(e: any) {
        return {error: e, id: null};
    }

}



export type createQuestionProps = {
    question: QuestionData,
    userId: string,
    assessmentId: string,
}

export async function createQuestion({question, userId, assessmentId}:createQuestionProps) {
    // console.log(question, userId, assessmentId);
    // if (question?.question === '') return;
    try {
            // ADD Question
            const newDocRef = collection(db, 'user-id', userId, 'assessments', assessmentId, 'questions');
    
            const { id } = await addDoc(newDocRef, {
            question: question.question,
            order: 0,   
            })
            return {error: null, data: {...question, id: id} as QuestionData};
        } 
        // else {
        //     // UPDATE Question
    
        //     const docRef = doc(db, 'user-id', userId, 'assessments', assessmentId, 'questions', question.id);
        //     await updateDoc(docRef, {
        //         question: question.question,
        //         order: 0
        //     })
        //     return question.id
        // }

    catch(e: any) {
        return {error: e, data: null};
    }
    

}


export async function updateQuestion({question, userId, assessmentId}:createQuestionProps) {

    try {
    
        const docRef = doc(db, 'user-id', userId, 'assessments', assessmentId, 'questions', question.id);
        await updateDoc(docRef, {
            question: question.question,
            order: 0
        })
        return {error: null, data: question};
    }

    catch(e: any) {
        return {error: e, data: null};
    }
    

}