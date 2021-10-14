// Start the Main Server
require("module-alias/register");
import * as mainserver from "@core/index";
console.log("mainserver");

mainserver.core.listen(8080, () => {
    console.log(`Example app listening at http://localhost:${8080}`)

});