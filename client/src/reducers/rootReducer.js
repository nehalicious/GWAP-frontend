import {combineReducers} from 'redux';
import { player, score, player_type } from './playerReducer';
import { room } from './roomReducer';
import {session_id, session_scene} from "./sessionReducer";

const rootReducer = combineReducers({
    player, score, player_type, room, session_id, session_scene
});

export default rootReducer;