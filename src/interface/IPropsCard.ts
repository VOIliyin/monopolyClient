export interface IPosition {
    top: number,
    left: number
}

export interface IPropsCard {
    image: string,
    position: IPosition,
    id: number
}

export interface IPropsCardRectangular extends IPropsCard {
    id: number,
    isRotate: boolean,
    isTop: boolean,
    isRight: boolean,
    isBottom: boolean,
    isLeft: boolean,
    type: string
}