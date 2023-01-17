import {lightBackground, lightBackgroundText, lightContent, darkBackground, darkBackgroundText, darkContent} from './variables.js';

export const lightTheme = {
    body: lightBackground,
    inside: lightContent,
    text: lightBackgroundText,
    filter: "invert(35%)",
}

export const darkTheme = {
    body: darkBackground,
    inside: darkContent,
    text: darkBackgroundText,
    filter: "invert(100%)",
}