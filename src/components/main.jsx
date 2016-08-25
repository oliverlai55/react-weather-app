var React = require("react");
var Router = require("react-router");
var apiKey = "0b66f0f8e1b5e15a5b59581c421348aa";
var $ = require("jquery");
var moment = require('moment');
moment().format();

module.exports = React.createClass({
  loadCurrentWeatherFromServer: function() {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/group?id=2950159,%202988507,%203117735,%202673730,%202800866&units=imperial&appid=" + apiKey,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({data: data.list});
        // console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("url", status, err.toString())
      }.bind(this)
    });
  },
  loadForecastWeatherFromServer: function(id) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?id=" + id +"&units=imperial&appid=" + apiKey,
      dataType: "json",
      cache: false,
      success: function(forecastData) {
        this.setState({list: forecastData.list, city: forecastData.city});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("forecast url", status, err.toString())
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCurrentWeatherFromServer();
  },
  render: function() {
    var data = this.state.data || [];
    var list = this.state.list || [];
    var city = this.state.city || "";
    var that = this;
    return (
      <div>
        <div className="container">
          <div className="row">
              <div className="weather-logo col-sm-12">
                <a href="/"><img src="../../img/react-weatherlogo.png"/></a>
              </div>
              <div className="weather-wrapper col-sm-offset-2 col-sm-10">
                <p className="col-sm-12">Click each city for forecast</p>
                <h4 className="col-sm-3">City</h4>
                <h4 className="col-sm-4">Temperature (°F)</h4>
                <h4 className="col-sm-5">Wind (mph)</h4>
              </div>
              {data.map(function(city){
                var currentTemp = Math.round(city.main.temp);
                return (
                    <div key={city.id}>
                      <div className="weather-wrapper col-sm-offset-2 col-sm-10">
                        <h5 className="col-sm-3" onClick={that.loadForecastWeatherFromServer.bind(null, city.id)}>
                          <a className="cityname" href="#">{city.name}</a>
                        </h5>
                        <h5 className="col-sm-4">{currentTemp}</h5>
                        <h5 className="col-sm-5">{city.wind.speed}</h5>
                      </div>
                    </div>
                )
              })}
          </div>
        </div>
        <div className="container">
          <div className="row">
              <div className="forecast-city col-sm-offset-2 col-sm-10">
                <h4 className="col-sm-12">{city.name}</h4>
              </div>
              <div className="col-sm-offset-2 col-sm-10">
              {list.slice(0,5).map(function(forecast){
                var forecastTime = moment(forecast.dt_txt).format("MM/D h a");
                var forecastTemp = Math.round(forecast.main.temp);
                return (
                  <div>
                    <h5 className="col-sm-3">{forecastTime}:</h5>
                    <h5 className="col-sm-9">{forecastTemp}</h5>
                  </div>
                )
              })}
              </div>
          </div>
        </div>
      </div>
    )
  }
});
