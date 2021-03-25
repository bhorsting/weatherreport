import {WeatherReportModel} from "../model/WeatherReportModel";
import {KNMIDataFetcher} from "../fetch/KNMIDataFetcher";
const Datastore = require('nedb');
const db = new Datastore( { filename: 'C:\\projects\\test.db' });
const ODataServer = require('simple-odata-server');
const Adapter = require('simple-odata-server-nedb');
const model = WeatherReportModel;
const knmiDataFetcher: KNMIDataFetcher = new KNMIDataFetcher();

db.loadDatabase(()=>{
    console.log('Database loaded');
});

async function insertData(data:any) {
    return new Promise<void>((resolve) => {
        db.insert(data,()=>{
            resolve();
        })
    })
}

export const weatherReportServer = ODataServer("http://localhost:9090")
    .model(model)
    .adapter(Adapter(function(_es, cb) {
        cb(null, db)
    }));

knmiDataFetcher.fetchPluim().then(async (r)=>{
    const data = r.series[0].data;
    for (const dataPoint of data) {
        await insertData(dataPoint);
    }
    console.log(db.toString())

})
