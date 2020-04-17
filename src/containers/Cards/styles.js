import styled from 'styled-components'
import media from "styled-media-query"

import { Avatar, Col, Row } from 'antd'

export const RowGrid = styled(Row)`
    display: grid;
    grid-template-columns: 1fr 35vw;
    height: 100%;
    max-height: 100%;

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
    `}
`

export const Column = styled(Col)`
    background-color: ${props => props.background ? props.background : "transparent"};

    ${media.lessThan("medium")`
        display: none;
    `}
`

export const ColumnEdit = styled(Col)`
    background-color: #ffffff;
    height: 100%;
`

export const CardWrapper = styled('main')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 48px 24px;
    height: 100vh;
`

export const Card = styled('section')`
    background: ${props => props.background};
    background-image: ${props => `linear-gradient(to bottom, ${props.background?.color1} 0%, ${props.background?.color2} 100%)`};
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    width: 55%;

    ${media.between("medium", "large")`
        width: 100%;
    `}
`

export const CardHeader = styled('header')`
    align-items: center;
    background: url(${props => props.background ? props.background : "#fff"});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    display: flex;
    justify-content: center;
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

export const CardHeaderLogo = styled('header')`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 30%;
    margin-bottom: 15px;
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
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    display: flex;
    margin-top: 30px;
    padding: 1em;

    && section {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
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
    background-image: ${props => `linear-gradient(to bottom, ${props.color1} 0%, ${props.color2} 100%)`};
    background-color: ${props => props.background};
    border-radius: 10px;
    border: 2px solid ${props => props.selected ? "#ff0000" : "#fff"};
    justify-content: center;
    -webkit-box-shadow: 0px 0px 30px -5px rgba(230,230,230,1);
    -moz-box-shadow: 0px 0px 30px -5px rgba(230,230,230,1);
    box-shadow: 0px 0px 30px -5px rgba(230,230,230,1);

    &:before {
        content: "";
        padding-top: 100%;
        display: block;
    }
`

export const ThemeIconItem = styled('div')`
    align-items: center;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 45px;
    width: 45px;
`

export const EditOptionWrapper = styled('section')`
    align-items: center;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 15px; 

    &:hover {
        color: #f56a00;
        border-color: #f56a00;
        background-color: #fde3cf;
    }
`

export const EditOption = styled('div')`
    align-items: center;
    display: flex;

    p {
        margin-bottom: 0;
        margin-left: 15px;
        font-size: 15px;
        font-weight: 600;
    }
`

export const SectionWrapper = styled('section')`
    margin-top: 30px;
    padding: 1.5em;
`

export const SectionTitle = styled('h1')`
    font-size: 1em;
    font-weight: 700;
    margin-bottom: 1em;
`