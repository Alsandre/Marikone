import React from "react";

export const Text = ({ variant, value, styles }: Record<string, string>) => {
    switch(variant){
        case 'h1':
            return <h1 className={styles}>{value}</h1>
        default:
            return <p className={styles}>{value}</p>
    }
};
