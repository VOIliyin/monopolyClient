import { makeAutoObservable } from "mobx";
import { StatusGame } from '../enum'

class SessionState {
    sessionId = '';
    currentPlayer: string | null = null;
    moveStatus: string | null = null;
    state = ''
    dice: [number, number] = [1,1]

    constructor() {
        makeAutoObservable(this);
    }

    setSessionId(id: string) {
        this.sessionId = id;
    }

    get isStart(): boolean {
        return this.state === StatusGame.InProgress;
    }
}

export default new SessionState();