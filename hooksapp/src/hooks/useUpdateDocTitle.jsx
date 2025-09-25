import React, { useEffect } from 'react'

function useUpdateDocTitle(arg) {

    useEffect(() => {
        document.title = `Titre : ${arg}`;
    }, [arg]);
}

export default useUpdateDocTitle
