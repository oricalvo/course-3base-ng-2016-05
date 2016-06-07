import {appModule} from "./app/common/appModule";
import "./app/components/home";

angular.bootstrap(document.getElementById("html"), [appModule.name]);
