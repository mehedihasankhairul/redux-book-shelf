

import allBooks from  "../../fakeData/books.json";


const initialState = {
    readingList : [],
    discoverList: allBooks,
    finishedList: [],
}


const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TO-READING-LIST": {
        
        const newState = {
            ...state,
            readingList: [...state.readingList, action.payload],
        };
        return newState;
    }

    case "REMOVE-TO-READING-LIST": {
        
        const newState = {
            ...state,
            readingList: [state.readingList.filter((b) => b.id !== action.payload), action.payload],
        };
        return newState;
        }
        default: {
            return state;
        }
    }
};

export default bookReducer;