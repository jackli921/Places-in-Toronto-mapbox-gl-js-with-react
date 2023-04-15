"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
;
function SearchResult(props) {
    const { filteredData, setUserInput, userInput, setIsSidebarVisible, updateSearch, } = props;
    function handleClick(e) {
        const target = e.target;
        if (target && typeof target.innerText === 'string') {
            setUserInput(target.innerText);
        }
        setIsSidebarVisible(false);
    }
    const results = filteredData.map((place, index) => {
        return (react_1.default.createElement("div", { className: "result-text-card", key: index },
            react_1.default.createElement("p", { className: "result-text", onClick: (e) => handleClick(e) }, place.name),
            react_1.default.createElement("hr", null)));
    });
    return react_1.default.createElement(react_1.default.Fragment, null, results);
}
exports.default = SearchResult;
