const fs = require('fs');
var parser = require('xml2json');
const formatXml = require("xml-formatter") 
function setData(weather_data) {
//Read data from txt
    credits = updateCredits();
    fs.readFile("../default_format.xml", 'utf8', function (err,data) {
        var json = JSON.parse(parser.toJson(data, {reversible: true}));
        var timeseries = json["weatherdata"]["forecast"]["tabular"]["time"];
        for (var i = 0; i < timeseries.length; i++) {
            var time = timeseries[i];
            time.temperature.value  =   weather_data[0][i];
            time.pressure.value     =   weather_data[1][i];
        }
        var locationName = json["weatherdata"]["location"]["name"];
        var locationCountry = json["weatherdata"]["location"]["country"];
        // needs a refactor in how we put the credits
        locationName.$t = credits[0];
        locationCountry.$t = credits[1];
        
        var stringified = JSON.stringify(json);
        var xml = parser.toXml(stringified);
        fs.writeFile('data.xml',formatXml(xml,{collapseContent: true}) , function(err, data) {
            if (err) {
            console.log(err);
            }
            else {
            console.log('updated!');
            }
        });
        
        if (err) {
        return console.log(err);
        }
    });
}
// needs a refactor in how we return and update the data needed 
function getData(){ 
    var array = fs.readFileSync('./data.txt').toString().split("\n");
    let internal_temperature =[]
    let pressure =[]
    //get data of the last 48 data from internal temperature
    for (let i = array.length - 49; i <array.length - 1; i++) {
        array_2 = JSON.parse(array[i]);
        internal_temperature.push(array_2[16]);
        pressure.push(array_2[11]);
    }
    weather_data = [internal_temperature, pressure]
    return weather_data
}
// needs a refactor in how we put the credits
function updateCredits(){
   let name = "Rio De Janeiro"
   let country = "Brazil"
   return [name,country]

}
data = getData();
setData(data);