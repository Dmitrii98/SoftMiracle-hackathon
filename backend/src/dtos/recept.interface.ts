export default interface IRecept {
    id: number;
    title: string;
    text: string;
    time: number;
    picture: string;
    subscription: object;
    products: Array<any>;
}