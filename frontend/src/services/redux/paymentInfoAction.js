import axios from "axios";

const BASE_URL = "https://famfest-backend-production.up.railway.app"

export const FETCH_PAYMENT_DETAILS_REQUEST = 'FETCH_PAYMENT_DETAILS_REQUEST';
export const FETCH_PAYMENT_DETAILS_SUCCESS = 'FETCH_PAYMENT_DETAILS_SUCCESS';
export const FETCH_PAYMENT_DETAILS_ERROR = 'FETCH_PAYMENT_DETAILS_ERROR';

export const paymentDetailsRequest = () => ({
    type: FETCH_PAYMENT_DETAILS_REQUEST,
});

export const paymentDetailsSuccess = (transactions) => ({
    type: FETCH_PAYMENT_DETAILS_SUCCESS,
    payload: transactions,
});

export const paymentDetailsError = (error) => ({
    type: FETCH_PAYMENT_DETAILS_ERROR,
    payload: error,
});

export const fetchPaymentDetails = (userId) => {
    return async(dispatch) => {
        try {
            dispatch(paymentDetailsRequest());
            const token = sessionStorage.getItem('TOKEN');
            const response = await axios.get(`${BASE_URL}/api/payment/PayHistory/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const transactions = response.data;
            dispatch(paymentDetailsSuccess(transactions));
        } catch (error) {
            console.log(error);
            dispatch(paymentDetailsError(error));
        }
    };
};