import {weatherReportServer} from "./serve/WeatherReportServer";
import * as http from "http";
import {SERVER_PORT} from "./config/Config";

try {
    http.createServer(weatherReportServer.handle.bind(weatherReportServer)).listen(SERVER_PORT);
    console.log(`WeatherReportServer listening on port ${SERVER_PORT}`);
} catch (e) {
    console.error(e);
}
