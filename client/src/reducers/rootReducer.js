import {combineReducers} from 'redux';
import { player, score, player_type } from './playerReducer';
import { room } from './roomReducer';
import {session_id, session_scene} from "./sessionReducer";
import {hint, hints} from './hintReducer';
import {round} from './roundReducer'

const rootReducer = combineReducers({
    player, score, player_type,
    room,
    session_id, session_scene,
    round,
    hint, hints
});

export default rootReducer;