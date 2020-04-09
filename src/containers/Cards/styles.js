import styled from 'styled-components'

import { Avatar } from 'antd'

export const CardWrapper = styled('main')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 48px 24px;
    height: 100%;
`

export const Card = styled('section')`
    background: ${props => props.background}; 
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    width: 55%;
    max-width: 55%;
`

export const CardHeader = styled('header')`
    background: url(${props => props.background ? props.background : "#fff"});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    height: 30%;
    margin-bottom: 15px;
    -webkit-filter: blur(${props => props.blur ? '2px' : 0});
    -moz-filter: blur(${props => props.blur ? '2px' : 0});
    -o-filter: blur(${props => props.blur ? '2px' : 0});
    -ms-filter: blur(${props => props.blur ? '2px' : 0});
    filter: blur(${props => props.blur ? '2px' : 0});

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: ${props => props.overlay !== 'none' ? props.overlay : 'transparent'};
        opacity: ${props => props.overlay !== 'none' ? 0.5 : 1};
        display: block;
    }
`

export const CardUserArea = styled('section')`
    display: flex; 
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 22px;
        color: ${props => props.fontColor};
    }

    p {
        color: ${props => props.fontColor};
    }
`

export const CardLinks = styled('section')`
    align-items: center;
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    padding: 0 4em;
`

export const CardFooter = styled('footer')`
    color: #fff;
    padding: 15px;
    text-align: center;
`

export const LinkItem = styled(Avatar)`
    background-color: rgba(255, 255, 255, 0.1);
    color: ${props => props.colorIcon};
    font-size: 20px;
`

export const DataLink = styled('div')`
    align-items: center;
    display: flex;
    margin-top: 30px;
`

export const GridThemeWrapper = styled('section')`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: 1fr;
    grid-gap: 32px;
`

export const ThemeItem = styled('div')`
    align-items: center;
    cursor: pointer;
    display: flex;
    background-color: ${props => props.background};
    border-radius: 10px;
    border: 2px solid ${props => props.selected ? "#ff0000" : "transparent"};
    justify-content: center;

    &:before {
        content: "";
        padding-top: 100%;
        display: block;
    }
`

export const ThemeIconItem = styled('div')`
    background-color: ${props => props.color};
    border-radius: 50%;
    height: 45px;
    width: 45px;
`