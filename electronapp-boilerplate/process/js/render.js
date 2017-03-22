var $ = jQuery = require('jquery');
var _ = require('lodash');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');
var path = eRequire('path');
var dataFile = path.resolve(dataLocation, "data.json");
var data = JSON.parse(fs.readFileSync(dataFile));

var electron = eRequire('electron');
var ipc = electron.ipcRenderer;

var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	getInitialState: function() {
		return {
			data: data
		}//return
	}, //getInitialState
    
	// componentDidUpdate: function() {
	//     fs.writeFile(dataFile, JSON.stringify(this.state.data, null, 4), 'utf8', function(err) {
	//         if (err) {
	//             console.log(err);
	//         }
	//     });//writeFile
	// }, //componentDidUpdate

    render: function() {
        return(
            <div className="application">
                <h1>This headline is put here by react</h1>

            </div>
        );
    } //render
});//MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('appDiv')
); //render
