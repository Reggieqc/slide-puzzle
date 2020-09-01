import PuzzleImage from './puzzle-image';
import './styles/main.scss';

const puzzleImgSrc = require('./assets/images/monks.jpg') ;
const inputElement: HTMLElement = document.getElementById('input');
const buttonElement = document.getElementById('button');
let inputValue = 4;

const puzzleImage = new PuzzleImage(
    inputValue,
    document.querySelector('#puzzle-img'),
    puzzleImgSrc.default,
    600,
);

inputElement.addEventListener('change', getInputValue);
buttonElement.addEventListener('click', randomShufflePuzzle);

function getInputValue(event: Event) {
    inputValue = Number((<HTMLInputElement>event.target).value);
    setPuzzleImageDimensions();
};

function setPuzzleImageDimensions() {
    puzzleImage.changeDimensions(inputValue);
};

function randomShufflePuzzle() {
    puzzleImage.shuffle();
};