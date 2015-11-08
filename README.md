# markoshust:material-ui

## Add Google's Material Design Library to Meteor

`meteor add markoshust:material-ui`

Pulls library from the official React implementation of Google Material Design at <a href="https://www.npmjs.com/package/material-ui" target="_blank">`material-ui` NPM repo</a> and uses Meteor's built-in `react` package. Also, automatically runs `injectTapEventPlugin()` at startup. This package also exposes material-ui to the server for SSR support.

## Usage

Create a component, and import desired components using the following format:

```
App = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: mui.Styles.ThemeManager.getMuiTheme(mui.Styles.LightRawTheme)
    };
  },

  getMenuItems() {
    return [
      { route: "home", text: "Home" },
      { route: "feature", text: "Feature" },
      { route: "contact", text: "Contact" }
    ];
  },

  render() {
    return (
      <div className="app">
        <mui.LeftNav
          ref="leftNav"
          docked={false}
          menuItems={this.getMenuItems()} />
        <mui.AppBar
          title="Home"
          onLeftIconButtonTouchTap={()=>this.refs.leftNav.toggle()}
          style={{backgroundColor: mui.Styles.Colors.deepOrange300}}
          iconElementRight={
            <mui.IconMenu
              iconButtonElement={
                <mui.IconButton>
                  <mui.SvgIcons.NavigationMoreVert />
                </mui.IconButton>
              } > 
              <mui.Menus.MenuItem primaryText="Help" index={1} />
              <mui.Menus.MenuItem primaryText="Sign out" index={2} />
            </mui.IconMenu>
          } />
      </div>
    );  
  }

});

Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById('app'));
});
```

## Documentation

See the <a href="http://material-ui.com/#/" target="_blank">React Material-UI</a> site for more details on how you can use components.
