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

export const getAnswersList = async(id) => {
    const todoCollection = collection(db, 'user-id', 'j8XOynhNdZwoVUkJgtan', 'assessments', 'FXVSRIIlo5oTmhHFF6TF', 'questions', id, 'answers');
    
    const toDoSnapshot = await getDocs(todoCollection);
    const data = toDoSnapshot.docs.map(doc => {
        return ({...doc.data(),id: doc.id})
    } );
    return data;
    
}

export const getAnswerById = async(questionId, answerId) => {
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


    // const toDoSnapshot = await getDocs(todoCollection);
    // const data = toDoSnapshot.docs.map(doc => {
    //     return ({...doc.data(),id: doc.id})
    // } );
    // return data;
    
}