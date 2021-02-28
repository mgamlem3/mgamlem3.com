/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "/src/index.tsx"),
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(s*)css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[path][name]__[local]",
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(jpg|png|ico)$/,
				loader: "file-loader",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/",
		filename: "main.wp.js",
		chunkFilename: "[id].js",
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		publicPath: "/",
		historyApiFallback: true,
		hotOnly: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: "mgamlem3.com",
			minify: true,
			template: "./public/index.html",
			favicon: "./public/favicon.ico",
		}),
		new MiniCssExtractPlugin({
			filename: "[contenthash].css",
			chunkFilename: "[id].css",
			ignoreOrder: false,
		}),
	],
};
