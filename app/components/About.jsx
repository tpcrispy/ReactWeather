var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About this App:</h1>
      <p>This is a simple Weather application built on React.</p>
      <p className="text-center">Here are some of the tools I've used:</p>
      <ul>
        <li><a href="http://facebook.github.io/react">React:</a> - This was the JavaScript farmwork used.</li><br/>
        <li><a href="http://openweathermap.com">Open Weather Map:</a> - I used Open Weather Map API to search for data via city name.</li><br/>
        <li><a href="https://webpack.github.io/docs/">Webpack:</a> - I used Webpack to bundle my modules. </li><br/>
        <li><a href="https://github.com/mzabriskie/axios">Axios:</a> - Promise based HTTP client for the browser and node.js. </li><br/>
        <li><a href="http://foundation.zurb.com/">Foundation:</a> - For simple HTML/CSS display of application. </li><br/>



      </ul>
    </div>
  )
};

module.exports = About;
