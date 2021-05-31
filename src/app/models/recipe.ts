import { Ingredient } from "./ingredient";
import { Step } from "./step";

export interface Recipe {
    id: number,
    name: string,
    description: string,
    duration: string,
    ingredients: Array<Ingredient>,
    steps: Array<Step>
}
