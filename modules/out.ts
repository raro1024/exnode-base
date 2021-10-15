import * as utils from "@core/utils";
console.log("in out")
console.log("Import list")
import List from "@core/prototypes/list";
console.log("Import Sing")
import {Single} from "@core/prototypes/single";
console.log("imported modules")
console.log(List);
console.log(Single);

console.log("Emd out >>>>")
export class Out extends List
{}