
import { db } from '../../firebase';
import { collection, getDocs, addDoc} from 'firebase/firestore';
import { AssessmentData } from '../../types/types';



export const getAssessmentList = async(userId:string) => {

    try {
        const todoCollection = collection(db, `/user-id/${userId}/assessments/`);
        const toDoSnapshot = await getDocs(todoCollection);
        const data : AssessmentData[] = toDoSnapshot.docs.map(doc => {
            return (({...doc.data(),id: doc.id}) as AssessmentData)
        } );
        return {error: null, data: data};
    } catch(e: any) {
        return {error: e, data: null};
    }
    
}


export async function createAssessment(assessment:AssessmentData, userId:string) {

    if (assessment.name === '') return {error: null, id: null};
    assessment = {...assessment,
        creation_date: new Date().toJSON().slice(0,10).replace(/-/g,'-') ,
        published: false
    }   
    try {
        // ADD Assessment
        const rootRef = collection(db, 'user-id', userId, 'assessments');

        const { id }  = await addDoc(rootRef, assessment)
        return {error: null, data: {...assessment, id: id }};
    } 
    catch(e: any) {
        return {error: e, data: null};
    }
    

}