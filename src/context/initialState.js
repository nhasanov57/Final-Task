import {fetchUser} from '../utils/fetchDatafromStorage';

const userInfo = fetchUser()

export const initialState ={
    user:userInfo,
}