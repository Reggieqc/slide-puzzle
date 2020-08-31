
import PuzzleBlock from './puzzle-blocks';

export default class PuzzleImage {
    imgSrc: string;
    width: number;
    parentEl: HTMLElement;
    dimensions: number;
    blocks: PuzzleBlock[];
    el: HTMLElement;
    height: number;
    constructor(dimensions: number, el: HTMLElement, imgSrc: string, width: number) {
        this.dimensions = dimensions;
        this.parentEl = el;
        this.width = width;
        this.imgSrc = imgSrc;
        this.blocks = [];
        this.initialiceWidthandHeightParent();
        this.configContainerHeightAndImageSize()
    }

    public createContainer(): HTMLElement {
        const div = document.createElement('div');
        div.style.position = 'relative';
        div.style.margin = '0 auto';
        return div;
    }

    public changeDimensions(dimensions: number): void {
        this.dimensions = dimensions;
        console.log(this.el)
        this.parentEl.removeChild(this.el);
        this.initialiceWidthandHeightParent();
        this.configContainerHeightAndImageSize();
    }

    configContainerHeightAndImageSize() {
        const image = new Image();
        image.onload = () => {
            this.height = image.height * this.width / image.width;
            this.el.style.width = `${this.width}px`;
            this.el.style.height = `${this.height}px`;
            this.config();
        };
        image.src = this.imgSrc;
    }

    private initialiceWidthandHeightParent(): void {
        this.el = this.createContainer();
        this.parentEl.appendChild(this.el);
    }

    private config(): void {
        this.blocks = [];
        for (let i = 0; i < this.dimensions * this.dimensions; i++) {
            this.blocks.push(new PuzzleBlock(this, i))
        }
        this.shuffle()
    }

    public shuffle(): PuzzleBlock[] {
        for (let i = this.blocks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            this.swapBlocks(i, j)
        }
        return this.blocks;
    }

    public swapBlocks(i: number, j: number): void {
        [this.blocks[i], this.blocks[j]] = [this.blocks[j], this.blocks[i]];
        this.blocks[i].setPosition(i);
        this.blocks[j].setPosition(j);
        if (this.isAssambled()) {
            alert('You win')
        }
    }

    private isAssambled(): boolean {
        for (let i = 0; i < this.blocks.length; i++) {
            if (i !== this.blocks[i].index) {
                return false;
            }
        }
        return true;
    }

    public findBlockPosition(index: number): number {
        return this.blocks.findIndex(block => block.index === index)
    }

    public findEmptyBlockPosition(): number {
        return this.blocks.findIndex(block => block.isEmpty)
    }

}