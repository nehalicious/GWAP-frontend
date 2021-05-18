import {combineReducers} from 'redux';
import { player, score, player_type } from './playerReducer';
import { room } from './roomReducer';
import {session_id, session_scene} from "./sessionReducer";
import {hint} from './hintReducer'

const rootReducer = combineReducers({
    player, score, player_type, room, session_id, session_scene, hint
});

export default rootReducer;