export const WeatherReportModel = {
    namespace: "weathermodel",
    entityTypes: {
        "DataPoint": {
            "_id": {"type": "Edm.String", key: true},
            "test": {"type": "Edm.String"},
            "x": {"type": "Edm.Number"},
            "y": {"type": "Edm.Number"},
            "bft": {"type": "Edm.String"},
        }
    },
    entitySets: {
        "datapoints": {
            entityType: "weathermodel.DataPoint"
        }
    }
};
