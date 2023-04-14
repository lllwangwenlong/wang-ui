import tButton from "./button/index";
import tInput from "./input/index";

const install = app => {
    app.use(tButton);
    app.use(tInput);
}

const WUI = {install}

export {tButton,tInput}
export default WUI