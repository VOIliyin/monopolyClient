import axios from "axios";
import { URL } from "../const/url";
import { IInitialResponse } from "../interface/index";

const API = '/api/v1/sessions';

export async function createSession(sessionId: string, playerName: string, colour: string) {
    await axios.post(URL + API, {
        sessionId,
        playerName,
        colour
    })
}

export async function getInitState(sessionId: string): Promise<IInitialResponse>{
    const response = await axios.get<IInitialResponse>(URL + '/api/v1/sessions/' + sessionId);
    return response.data;
}