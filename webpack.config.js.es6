import path from "path";
import {
    EnvironmentPlugin,
} from "webpack";

export default {
    devtool: "source-map",
    entry: [
        "script-loader!jquery",
        "script-loader!tether",
        "script-loader!bootstrap",
        "style-loader!css-loader!sass-loader!bootstrap/scss/bootstrap.scss",
        "style-loader!css-loader!sass-loader!./src/main.scss",
        "babel-polyfill",
        "./src/main",
    ],
    externals: {
        jquery: "jQuery",
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-react-jsx-source",
                    ],
                    presets: [
                        "env",
                        "react",
                    ],
                },
                test: /\.js$/,
            },
        ],
    },
    output: {
        filename: "main.js",
        path: path.join(__dirname, "public"),
    },
    plugins: [
        new EnvironmentPlugin([
            "NODE_ENV",
        ]),
    ],
};
