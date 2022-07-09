import { IField, ICell, ICard, ICoords } from "../interface";

type typeGetCoords = (numberCell: number) => ICoords;

export class Field implements IField {
    public border: ICell[] = [];

    public async init() {
        const cards: ICard[] = await [ // TODO request
            {id: 0, type: 'asdf', img: 'sdfg'},
            {id: 1, type: 'asdf', img: 'sdfg'},
            {id: 2, type: 'asdf', img: 'sdfg'},
            {id: 3, type: 'asdf', img: 'sdfg'},
            {id: 4, type: 'asdf', img: 'sdfg'},
            {id: 5, type: 'asdf', img: 'sdfg'},
            {id: 6, type: 'asdf', img: 'sdfg'},
            {id: 7, type: 'asdf', img: 'sdfg'},
            {id: 8, type: 'asdf', img: 'sdfg'},
            {id: 9, type: 'asdf', img: 'sdfg'},
            {id: 10, type: 'asdf', img: 'sdfg'},
            {id: 11, type: 'asdf', img: 'sdfg'},
            {id: 12, type: 'asdf', img: 'sdfg'},
            {id: 13, type: 'asdf', img: 'sdfg'},
            {id: 14, type: 'asdf', img: 'sdfg'},
            {id: 15, type: 'asdf', img: 'sdfg'},
            {id: 16, type: 'asdf', img: 'sdfg'},
            {id: 17, type: 'asdf', img: 'sdfg'},
            {id: 18, type: 'asdf', img: 'sdfg'},
            {id: 19, type: 'asdf', img: 'sdfg'},
            {id: 20, type: 'asdf', img: 'sdfg'},
            {id: 21, type: 'asdf', img: 'sdfg'},
            {id: 22, type: 'asdf', img: 'sdfg'},
            {id: 23, type: 'asdf', img: 'sdfg'},
            {id: 24, type: 'asdf', img: 'sdfg'},
            {id: 25, type: 'asdf', img: 'sdfg'},
            {id: 26, type: 'asdf', img: 'sdfg'},
            {id: 27, type: 'asdf', img: 'sdfg'},
            {id: 28, type: 'asdf', img: 'sdfg'},
            {id: 29, type: 'asdf', img: 'sdfg'},
            {id: 30, type: 'asdf', img: 'sdfg'},
            {id: 31, type: 'asdf', img: 'sdfg'},
            {id: 32, type: 'asdf', img: 'sdfg'},
            {id: 33, type: 'asdf', img: 'sdfg'},
            {id: 34, type: 'asdf', img: 'sdfg'},
            {id: 35, type: 'asdf', img: 'sdfg'},
            {id: 36, type: 'asdf', img: 'sdfg'},
            {id: 37, type: 'asdf', img: 'sdfg'},
            {id: 38, type: 'asdf', img: 'sdfg'},
            {id: 39, type: 'asdf', img: 'sdfg'},
        ]

        this.initCell(cards);
    }

    private initCell(cards: ICard[]) {
        const getCoords: typeGetCoords = this.initCoords();

        cards.forEach((card: ICard, numberCell) => {
            const isTopOrBottomSide = this.isTopOrBottomSide(numberCell);
            const coords: ICoords = getCoords(numberCell);
            this.border.push({
                coords,
                img: card.img,
                id: card.id,
                type: card.type,
                transform: isTopOrBottomSide ? 'rotate(90deg)' : ''
            })
        })
    }

    private getNumberSide(numberCell: number): number {
        return Math.floor(numberCell / 10);
    }

    private isTop(numberCell: number): boolean {
        const numberSide = this.getNumberSide(numberCell);
        const isTop = numberSide === 0 && numberCell % 10 !== 0;
        return isTop;
    }

    private isBottom(numberCell: number): boolean {
        const numberSide = this.getNumberSide(numberCell);
        const isBottom = numberSide === 2 && numberCell % 10 !== 0;
        return isBottom;
    }

    private isTopOrBottomSide(numberCell: number): boolean {
        return this.isTop(numberCell) || this.isBottom(numberCell);
    }

    private changeСoordinates(numberCell: number, top: number, left: number): number[] {
        if(numberCell === 0) { 
            left += 124;
        }
        if (10 === numberCell) {
            top += 124;
        }
        if(20 === numberCell) {
            left -= 124;
        }
        
        if(numberCell !== 0 && numberCell < 10) {
            left += 66;
        }
        if(20 < numberCell && numberCell < 30) {
            left -= 66;
        }
        if(10 < numberCell && numberCell < 20) {
            top += 67;
        }

        if(30 <= numberCell && numberCell < 40) {
            top -= 67;
        }

        return [top, left];
    }

    private initCoords(): typeGetCoords {
        let top = 0;
        let left = 0;

        return (numberCell: number): ICoords => {
            let result = {// TODO refactoring
                top: this.isTopOrBottomSide(numberCell)? top + 29: top,
                left: this.isTopOrBottomSide(numberCell)? numberCell < 10? left - 29: left + 29: left
            };
            [top, left] = this.changeСoordinates(numberCell, top, left);
            return result;
        }
    }


}