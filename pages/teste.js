import React, { useEffect } from 'react'

const Teste = () => {

    const handleContextMenu = () => {
        console.log('O menu de contexto foi aberto');
    };

    useEffect(() => {
        window.addEventListener('contextmenu', handleContextMenu);

        // cleanup
        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque incidunt aspernatur dolores ipsa ut voluptatibus 
                quisquam sed quaerat dolore, at atque rem illo quas. Sit,
                 odio. Odit praesentium facere iure. Dolor incidunt distinctio atque!</p>
        </div>
    )
}

export default Teste