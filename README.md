# markoshust:material-ui

## Add Google's Material Design Library to Meteor

`meteor add markoshust:material-ui`

Pulls library from the official React implementation of Google Material Design at <a href="https://www.npmjs.com/package/material-ui" target="_blank">`material-ui` NPM repo</a> and uses Meteor's built-in `react` package. Also, automatically runs `injectTapEventPlugin()` at startup. This package also exposes material-ui to the server for SSR support.

## Usage

Create a component, and import desired components using the following format:

```
const { AppBar, IconButton, IconMenu, LeftNav } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;

App = React.createClass({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getInitialState() {
    return {
      open: false
    };
  },

  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  handleToggle() {
    this.setState({open: ! this.state.open});
  },

  render() {
    return (
      <div className="app">
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem linkButton={true} href="/home" primaryText="Home" index={1} onTouchTap={this.handleToggle}/>
          <MenuItem linkButton={true} href="/feature" primaryText="Feature" index={2} onTouchTap={this.handleToggle}/>
          <MenuItem linkButton={true} href="/contact" primaryText="Contact" index={3} onTouchTap={this.handleToggle}/>
        </LeftNav>
        <AppBar
          title="Home"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{backgroundColor: Colors.deepOrange300}}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>
              } >
              <MenuItem primaryText="Help" index={1} />
              <MenuItem primaryText="Sign out" index={2} />
            </IconMenu>
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
