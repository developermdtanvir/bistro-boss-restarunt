import { useEffect, useRef } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = `bistro | ${title}`;
    }, [title]);


    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [])

}

export default useDocumentTitle;