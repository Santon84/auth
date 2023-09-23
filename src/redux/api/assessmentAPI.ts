
import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc} from 'firebase/firestore';
import { AnswerData, AssessmentData, QuestionData } from '../../types/types';



export const getAssessmentList = async() => {

    try {
        const todoCollection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments');
        const toDoSnapshot = await getDocs(todoCollection);
        const data : AssessmentData[] = toDoSnapshot.docs.map(doc => {
            return (({...doc.data(),id: doc.id}) as AssessmentData)
        } );
        return {error: null, data: data};
    } catch(e: any) {
        return {error: e, data: null};
    }
    
}