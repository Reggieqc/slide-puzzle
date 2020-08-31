import PictureImage from "./puzzle-image";

export default class Puzzleblock {
    index: number;
    puzzle: PictureImage;
    width: number;
    height: number;
    el: HTMLElement;
    isEmpty: boolean;
    constructor(puzzle: PictureImage, index: number) {
        this.isEmpty = false;
        this.index = index;
        this.puzzle = puzzle;
        this.width = this.puzzle.width / this.puzzle.dimensions;
        this.height = this.puzzle.height / this.puzzle.dimensions;
        this.el = this.createBlock();
        puzzle.el.appendChild(this.el);
        if (this.index === this.puzzle.dimensions * this.puzzle.dimensions - 1) {
            this.isEmpty = true;
            this.el.style.backgroundImage = `url(src/assets/images/monk.png)`;
            this.el.style.backgroundSize = 'contain';
            return;
        }
        this.setBackgroundBlock()
    }

    createBlock(): HTMLElement {
        const div = document.createElement('div');
        div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
        div.style.position = 'absolute';
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.border = '1px solid #333';
        div.onclick = () => {
            const currentBlockIndex = this.puzzle.findBlockPosition(this.index);
            const emptyBlockIndex = this.puzzle.findEmptyBlockPosition();
            const { x, y } = this.getCoordinatesXY(currentBlockIndex);
            const { x: emptyX, y: emptyY } = this.getCoordinatesXY(emptyBlockIndex);
            if ((x === emptyX || y === emptyY) &&
                (Math.abs(x - emptyX) === 1 || Math.abs(y - emptyY) === 1)) {
                this.puzzle.swapBlocks(currentBlockIndex, emptyBlockIndex)
            }
        };
        return div;
    }

    setPosition(index: number): void {
        const { left, top } = this.getPositionFromIndex(index);
        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;
    }

    setBackgroundBlock(): void {
        const { x, y } = this.getCoordinatesXY(this.index)
        const left = this.width * x;
        const top = this.height * y;
        this.el.style.backgroundImage = `url(${this.puzzle.imgSrc})`
        this.el.style.backgroundPosition = `-${left}px -${top}px`;
    }

    getPositionFromIndex(index: number): CoordinatePosition {
        const { x, y } = this.getCoordinatesXY(index)
        return {
            left: this.width * x,
            top: this.height * y
        }
    }

    getCoordinatesXY(index: number): CartesianCoordinates {
        return {
            x: index % this.puzzle.dimensions,
            y: Math.floor(index / this.puzzle.dimensions)
        }
    }
}

interface CoordinatePosition {
    left: number;
    top: number;
}

interface CartesianCoordinates {
    x: number;
    y: number;
}