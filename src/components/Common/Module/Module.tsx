import React from "react";
import styles from './Module.module.css'

type ModuleType = {
    active: boolean,
    setActive: (active: boolean) => void,
    children: any
}

export const Module = ({active, setActive,children}: ModuleType) => {
    return (
        <div className={active ? styles.active : styles.module} onClick={() => setActive(false)}>
            <div className={active ? styles.moduleContentActive : styles.moduleContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}