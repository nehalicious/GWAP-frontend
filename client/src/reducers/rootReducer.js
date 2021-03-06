import {combineReducers} from 'redux';
import { player, score, player_type } from './playerReducer';
import { room, final_score } from './roomReducer';
import {session_id, session_scene, guess} from "./sessionReducer";
import {hint, hints, selectedHint, guesserHints} from './hintReducer';
import {round} from './roundReducer'

const rootReducer = combineReducers({
    player, score, player_type,
    room, final_score,
    session_id, session_scene, guess,
    round,
    hint, hints, selectedHint, guesserHints
});

export default rootReducer;