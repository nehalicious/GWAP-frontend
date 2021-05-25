import {combineReducers} from 'redux';
import { player, score, player_type } from './playerReducer';
import { room } from './roomReducer';
import {session_id, session_scene, guess} from "./sessionReducer";
import {hint, hints, selectedHint} from './hintReducer';
import {round} from './roundReducer'

const rootReducer = combineReducers({
    player, score, player_type,
    room,
    session_id, session_scene, guess,
    round,
    hint, hints, selectedHint
});

export default rootReducer;