import React from 'react';
const tg = window.Telegram.WebApp;
const Header = () => {
    const onClose = () =>{
        tg.close()
    }



    return (
        <div className={'header'}>
            <button onClick={onClose}>
                Закрыть
                <span className={'username'}>
                    {tg.initDataUnsafe?.user?.username }

                </span>
            </button>
            
        </div>
    );
};

export default Header;