
import { db } from '../../firebase';
import { collection, getDocs, doc, addDoc} from 'firebase/firestore';
import { AnswerData, AssessmentData, QuestionData } from '../../types/types';
import { useAuth } from 'context/AuthContext';



export const getAssessmentList = async() => {

    try {
        const todoCollection = collection(db, '/user-id/754axqUKx4TxemuHjCS8efPlyQE3/assessments/');
        const toDoSnapshot = await getDocs(todoCollection);
        const data : AssessmentData[] = toDoSnapshot.docs.map(doc => {
            return (({...doc.data(),id: doc.id}) as AssessmentData)
        } );
        return {error: null, data: data};
    } catch(e: any) {
        return {error: e, data: null};
    }
    
}


export async function createAssessment(assessment:AssessmentData) {

    if (assessment.name === '') return {error: null, id: null};
    assessment = {...assessment,
        creation_date: new Date().toJSON().slice(0,10).replace(/-/g,'-') ,
        published: false
    }   
    try {
        // ADD Assessment
        const rootRef = collection(db, 'user-id', '754axqUKx4TxemuHjCS8efPlyQE3', 'assessments');

        const { id }  = await addDoc(rootRef, assessment)
        return {error: null, data: {...assessment, id: id }};
    } 
    catch(e: any) {
        return {error: e, data: null};
    }
    

}