import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEdit() {
        setIsEditing(editing => !editing); //making arrow func. is guaranteed state change (recommended practice)
        //setIsEditing(!isEditing); 
        if (isEditing) {
        onChangeName(symbol, playerName);
        }
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {editablePlayerName}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit} >{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}