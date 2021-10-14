// Start the Main Server
import * as mainserver from "./exnode-core/index";
console.log("mainserver");

mainserver.core.listen(8080, () => {
    console.log(`Example app listening at http://localhost:${8080}`)

});