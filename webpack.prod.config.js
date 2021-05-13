/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const compressionRegex = /\.(js|png|jpg|css)$/;

module.exports = {
	mode: "production",
	entry: path.join(__dirname, "/server/server.tsx"),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(s?)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[contenthash]",
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(jpg|png)$/,
				loader: "file-loader",
			},
			{
				test: /\.(xml|txt)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		globalObject: "this",
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/",
		filename: "server.[contenthash].wp.js",
		chunkFilename: "[contenthash].js",
	},
	externals: [nodeExternals()],
	node: {
		__dirname: false,
	},
	optimization: {
		splitChunks: {
			chunks: "async",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
		minimizer: [new TerserPlugin(), new CssMinimizerWebpackPlugin({})],
	},
	plugins: [
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
		new CompressionPlugin({
			filename: "[path][base].br",
			algorithm: "brotliCompress",
			test: compressionRegex,
		}),
		new CompressionPlugin({
			filename: "[path][base].gz",
			test: compressionRegex,
		}),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				plugins: [
					["gifsicle", { interlaced: true }],
					["mozjpeg", { progressive: true, quality: 15 }],
					["pngquant", { optimizationLevel: 5 }],
					[
						"svgo",
						{
							plugins: [
								{
									removeViewBox: false,
								},
							],
						},
					],
				],
			},
		}),
	],
};
