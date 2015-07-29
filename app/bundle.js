/** @jsx React.DOM */
var Timer = React.createClass({displayName: "Timer",
	render:function(){
		return(
			React.createElement("div", null, "hellossssss")
		)
	}
});
React.render(
		React.createElement(Timer, null), document.body
	)