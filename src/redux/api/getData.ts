import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc} from 'firebase/firestore';
import { AnswerData, AssessmentData, QuestionData } from '../../types/types';




// export const getAssessmentList = async() => {
//     const todoCollection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments');
    
//     const toDoSnapshot = await getDocs(todoCollection);
//     const data : AssessmentData[] = toDoSnapshot.docs.map(doc => {
//         return (({...doc.data(),id: doc.id}) as AssessmentData)
//     } );
//     console.log('List')
//     console.log(data)
//     return data;
    
// }


// export async function getAssessmentById(id:string) {
//     const todoCollection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', id, 'questions');
    
//     const toDoSnapshot = await getDocs(todoCollection);
//     const data = toDoSnapshot.docs.map(doc => {
//         return (({...doc.data(),id: doc.id}) as AssessmentData)
//     } );
//     console.log('by ID')
//     console.log(data)
//     return data;
// }
export async function getQuestionListByAssessmentId(assessmentId:string, userId:string) {
    const todoCollection = collection(db, 'user-id', userId, 'assessments', assessmentId, 'questions');
    console.log(assessmentId, userId);
    const toDoSnapshot = await getDocs(todoCollection);
    const data = toDoSnapshot.docs.map(doc => {
        return (({...doc.data(),id: doc.id}) as QuestionData)
    } );
    console.log('by ID')
    console.log(data)
    return data;
}


export const getAnswersList = async(id:string) => {
    const todoCollection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', id, 'answers');
    
    const toDoSnapshot = await getDocs(todoCollection);
    const data = toDoSnapshot.docs.map(doc => {
        return ({...doc.data(),id: doc.id}) as AnswerData
    } );
    return data;
    
}

export const getAnswerById = async(questionId: string, answerId: string) => {
    // const Collection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', questionId, 'answers', answerId);
    const docRef = doc(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', questionId, 'answers', answerId);
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            console.log(docSnap.data());
        } else {
            console.log("Document does not exist")
        }
    
    } catch(error) {
        console.log(error)
    }
    
}