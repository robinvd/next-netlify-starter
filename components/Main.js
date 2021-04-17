import { useState } from "react"


export default function Main(props) {
    const [row, setRow] = useState(0);

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