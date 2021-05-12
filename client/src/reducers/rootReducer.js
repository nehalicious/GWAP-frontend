import {combineReducers} from 'redux'
import { player, score, player_type } from './playerReducer'

const rootReducer = combineReducers({
    player, score, player_type
});

export default rootReducer;