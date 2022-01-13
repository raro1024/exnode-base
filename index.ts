// Start the Main Server
console.log("Start")
require("module-alias/register");
import {core}  from "@core/index";
import * as utils from"@core/utils";
console.log("mainserver");

core.listen(8080, () => {
    
    console.log(`Example app listening at http://localhost:${8080}`)

});