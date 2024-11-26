import { orderActions } from "../redux/reducers/OrderReducer";
import { AppDispatch } from "../redux/store";

export const changeExpectationTime = (type: string) => (dispatch: AppDispatch) => {
    switch(type) {
        case 'clear': {
            dispatch(orderActions.setExpectationTimeClear());
            break;
        }

        case 'free': {
            dispatch(orderActions.setExpectationTimeFree());
            break;
        }
    }
}

export const changeDay = (type: 'today' | 'tomorrow') => (dispatch: AppDispatch) => {
    dispatch(orderActions.setExpectationTimeDay(type));
}

export const setExpectHour = (type: string) => (dispatch: AppDispatch) => {
    let cutString = type;

    if (cutString.startsWith('0')) {
        cutString = cutString.slice(1);
    }

    try {
        const validInt = parseInt(cutString);

        dispatch(orderActions.setExpectationTimeHour(validInt));
    } catch{ 
        console.log('value was selected manually!');  
    }
}

export const setExpectMinute = (type: string) => (dispatch: AppDispatch) => {
    let cutString = type;

    if (cutString.startsWith('0')) {
        cutString = cutString.slice(1);
    }

    try {
        const validInt = parseInt(cutString);

        dispatch(orderActions.setExpectationTimeMinute(validInt));
    } catch{ 
        console.log('value was selected manually!');  
    }
}

export const setPaymentType = (type: string) =>  (dispatch: AppDispatch) => {
    dispatch(orderActions.setPaymentType(type));
}

export const clearOrder = () =>  (dispatch: AppDispatch) => {
    dispatch(orderActions.clear());
}

export const addAdditionalsList = (id: number, price: number, title: string) => (dispatch: AppDispatch) => {
    dispatch(orderActions.addAdditionalsList({ id, price, title }));
}
export const removeAdditionalsList = (id: number) => (dispatch: AppDispatch) => {
    dispatch(orderActions.removeAdditionalsList(id));
}