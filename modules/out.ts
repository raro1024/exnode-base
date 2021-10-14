console.log("loaded lis__>");
import { Single } from "@core/prototypes/single";
import { exposed } from "@core/decerators";
export class Out extends Single
{
    kindname="out";
    
    constructor() {
        super();
    }
    @exposed
    async view(key=undefined)
    {
        console.log("in view of out")
        return super.view(key)
    }
}