/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Twitter } from "..";

export default {
	title: "Icons/Twitter",
	component: Twitter,
	argTypes: {
		color: {
			control: {
				type: "select",
				options: ["default", "light", "dark"],
			},
		},
	},
} as Meta;

const Template: Story<ComponentProps<typeof Twitter>> = (args) => (
	<Twitter {...args} />
);

export const Default = Template.bind({});
Default.args = { width: 100, height: 100, color: "default" };
