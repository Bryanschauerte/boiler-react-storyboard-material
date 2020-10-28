/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import SaveIcon from '@material-ui/icons/Save'
import Button from './Button'

export default {
    title: 'common/componets/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    icon: {},
    label: 'Click Me',
    className: '',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    onClick: undefined,
}

export const PrimaryWithIconAtStart = Template.bind({})
PrimaryWithIconAtStart.args = {
    label: 'Click Me',
    className: '',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    onClick: undefined,
    icon: {
        startIcon: <SaveIcon />,
    },
}

export const PrimaryWithIconAtEnd = Template.bind({})
PrimaryWithIconAtEnd.args = {
    label: 'Click Me',
    className: '',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    onClick: undefined,
    icon: {
        endIcon: <SaveIcon />,
    },
}

export const Secondary = Template.bind({})
Secondary.args = {
    icon: {},
    className: '',
    label: 'Click Me',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    color: 'secondary',
    onClick: undefined,
}

export const Large = Template.bind({})
Large.args = {
    icon: {},
    className: '',
    label: 'Click Me',
    size: 'large',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    onClick: undefined,
}

export const Small = Template.bind({})
Small.args = {
    icon: {},
    className: '',
    label: 'Click Me',
    size: 'small',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    onClick: undefined,
}
