import { useState } from "react"
import React from "react"

const useLocalStorage = (localStorageKey, valueInit) => {
    if (typeof localStorage === undefined) {
        return useState(valueInit)
    }
    const init = () => {
        const strValue = localStorage.getItem(localStorageKey);
        if (strValue === null) {
            return valueInit
        } else {
            return JSON.parse(strValue)
        }
    }
    const [value, setValue] = useState(init);
 
    React.useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);
 
    return [value, setValue];
};

export default function Main(props) {
    const [row, setRow] = useLocalStorage('row', 0);

    const rowType = row % 2 ? "recht" : "averecht";
    const hasKabel = (row % 6) === 2 ? "ja" : "nee";

    return <div>
        <p>Current row {row + 1}</p>
        <p>Type: {rowType}</p>
        <p>Kabel: {hasKabel}</p>
        <button onClick={() => setRow(n => n-1)}>undo</button>
        <button onClick={() => setRow(n => n+1)}>next row</button>
    </div>
}