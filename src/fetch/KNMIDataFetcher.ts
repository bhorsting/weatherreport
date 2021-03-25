import * as knmi from 'node-knmi-fetch'
import {DEFAULT_STATION_CODE, DEMO_FETCH_URL} from "../config/Config";
import {ITimeSpan} from "../model/ITimeSpan";
import {formatDate} from "../util/DateFormatter";
const fetch = require('node-fetch');
export class KNMIDataFetcher {
    constructor() {
    }

    /**
     * Demo method
     */
    public async fetchPluim (): Promise<KNMIPluimData.KNMIPluim> {
        const result: Response = await fetch(DEMO_FETCH_URL);
        return await result.json();
    }
    public async fetchDays(stationCode: number = DEFAULT_STATION_CODE,
                           knmiVariables: string[] = null,
                           timeSpan?: ITimeSpan,
                           inSeason: boolean = false) {
        let timeSpanConverted;
        if (timeSpan) {
            timeSpanConverted = {
                start: formatDate(timeSpan.startDate),
                end: formatDate(timeSpan.endDate)
            }
        }
        await knmi.days(stationCode, knmiVariables, timeSpanConverted, inSeason);
    }
}
