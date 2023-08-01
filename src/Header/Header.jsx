import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../Button/Button"

const Header = () => {

const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <button onClick={onClose}>
                Закрыть
                <span className={'username'}>
                    {user?.username }

                </span>
            </button>
            
        </div>
    );
};

export default Header;