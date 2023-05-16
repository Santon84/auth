import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';


export const getAssessmentList = async() => {
    const todoCollection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments');
    
    const toDoSnapshot = await getDocs(todoCollection);
    const data = toDoSnapshot.docs.map(doc => {
        return ({...doc.data(),id: doc.id})
    } );
    return data;
    
}

export const getAssessmentById = async(id) => {
    const todoCollection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', id, 'questions');
    
    const toDoSnapshot = await getDocs(todoCollection);
    const data = toDoSnapshot.docs.map(doc => {
        return ({...doc.data(),id: doc.id})
    } );
    return data;
    
}