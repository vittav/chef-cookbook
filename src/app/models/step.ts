import { Recipe } from "./recipe";

export interface Step {
    number: number,
    description: string,
    recipe: Recipe
}
