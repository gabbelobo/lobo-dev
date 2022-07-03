import React, { useState, useRef, useEffect, useCallback } from 'react'
import styles from './Dropdown.module.scss'
import useOnClickOutside from '../../hooks/useOnClickOutside'
const Dropdown = ({ children, title, Icon }) => {
    const [show, setShow] = useState(false)
    const [menuStyle, setMenuStyle] = useState({})
    const menuRef = useRef(null)
    const dropdownRef = useRef(null)

    const padding = 16

    const handleNewWidth = useCallback(
        () => {
            if(show){
                const sum = dropdownRef.current.offsetLeft 
                + menuRef.current.offsetWidth 
                + padding

                if(sum > window.innerWidth) {
                    setMenuStyle({
                        right: 0
                    })
                }
                else if ('right' in menuStyle){
                    setMenuStyle({
                        left: 0
                    })
                }
            }
        },
        [menuStyle, show],
    )

    useEffect(() => {
        window.addEventListener('resize', handleNewWidth);

        return () => {
            window.removeEventListener('resize', handleNewWidth);
        }
    }, [handleNewWidth])

    useEffect(() => {
        handleNewWidth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])

    useOnClickOutside(dropdownRef, () => setShow(false))

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <button onClick={() => setShow(curr => !curr)}>{title} <Icon /></button>
            <ul 
                ref={menuRef} 
                className={`${styles.menu} ${show ? styles.show : ''}`}
                style={menuStyle}
            >
                {children}
            </ul>
        </div>
    )
}

export default Dropdown