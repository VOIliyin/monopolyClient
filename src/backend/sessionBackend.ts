import axios from "axios";
import { URL } from "../const/url";
import { ICardData, ICardInfoResponse, IInitialResponse } from "../interface/index";

const API = '/api/v1/sessions';

export async function createSession(sessionId: string, playerName: string, colour: string) {
    await axios.post(URL + API, {
        sessionId,
        playerName,
        colour
    })
}

export async function getInitState(sessionId: string): Promise<IInitialResponse>{
    const response = await axios.get<IInitialResponse>(URL + '/api/v1/sessions/state/' + sessionId);
    return response.data;
}

export async function getInfoCard(sessionId: string, cardId: number) {
    const response = await axios.get<ICardInfoResponse>(URL + '/api/v1/cards', {
        params: {
            sessionId,
            cardId
        }
    })
    return response.data
}

export async function getCard() {
    const response = await axios.get<ICardData>(URL + '/api/v1/sessions/static')
    return response.data
}

export async function delSession(sessionId: string) {
    await axios.delete(URL + '/api/v1/sessions/' + sessionId)
}