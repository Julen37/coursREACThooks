import React, { useEffect } from 'react'

function useUpdateDocTitle(arg) {

    useEffect(() => {
        document.title = `Titre : ${arg}`;
    }, [arg]);

    return (
        <div>
        
        </div>
    )
}

export default useUpdateDocTitle
