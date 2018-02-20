import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import merge from 'lodash.merge';

const muiTheme = {
    "raisedButton": {
        "primaryColor": "#1a237e",
        "primaryTextColor": "#fafafa"
    },
    "borderRadius": 22
};

const theme = merge(lightBaseTheme, muiTheme);

export default theme;