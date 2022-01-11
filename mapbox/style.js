
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "NonEEAcountriescopy_0": {
            "type": "geojson",
            "data": json_NonEEAcountriescopy_0
        }
                    ,
        "Protectedlandareacoverbycerealcrop50_1": {
            "type": "geojson",
            "data": json_Protectedlandareacoverbycerealcrop50_1
        }
                    ,
        "ocean_2": {
            "type": "geojson",
            "data": json_ocean_2
        }
                    ,
        "NonEEAcountries_3": {
            "type": "geojson",
            "data": json_NonEEAcountries_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_NonEEAcountriescopy_0_0",
            "type": "fill",
            "source": "NonEEAcountriescopy_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#ffffff'}
        }
,
        {
            "id": "lyr_Protectedlandareacoverbycerealcrop50_1_0",
            "type": "fill",
            "source": "Protectedlandareacoverbycerealcrop50_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Cropcover'], 0.001], ['<=', ['get', 'Cropcover'], 5.0]], 1.0, ['all', ['>', ['get', 'Cropcover'], 5.0], ['<=', ['get', 'Cropcover'], 15.0]], 1.0, ['all', ['>', ['get', 'Cropcover'], 15.0], ['<=', ['get', 'Cropcover'], 30.0]], 1.0, ['all', ['>', ['get', 'Cropcover'], 30.0], ['<=', ['get', 'Cropcover'], 50.0]], 1.0, ['all', ['>', ['get', 'Cropcover'], 50.0], ['<=', ['get', 'Cropcover'], 100.0]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Cropcover'], 0.001], ['<=', ['get', 'Cropcover'], 5.0]], '#abd8c8', ['all', ['>', ['get', 'Cropcover'], 5.0], ['<=', ['get', 'Cropcover'], 15.0]], '#00786c', ['all', ['>', ['get', 'Cropcover'], 15.0], ['<=', ['get', 'Cropcover'], 30.0]], '#fdc963', ['all', ['>', ['get', 'Cropcover'], 30.0], ['<=', ['get', 'Cropcover'], 50.0]], '#e28c31', ['all', ['>', ['get', 'Cropcover'], 50.0], ['<=', ['get', 'Cropcover'], 100.0]], '#6f1321', '#ffffff']}
        }
,
        {
            "id": "lyr_ocean_2_0",
            "type": "fill",
            "source": "ocean_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#eaf6fd'}
        }
,
        {
            "id": "lyr_NonEEAcountries_3_0",
            "type": "fill",
            "source": "NonEEAcountries_3",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#bcbcbb'}
        }
],
}