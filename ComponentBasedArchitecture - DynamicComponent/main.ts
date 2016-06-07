import {appModule} from "./app/common/appModule";
import "./app/components/home";
import "./app/components/popup";

appModule.config(function ($provide) {
    console.log("config");

    $provide.value("di", $provide);
});

angular.bootstrap(document.getElementById("html"), [appModule.name]);

