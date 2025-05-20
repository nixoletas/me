import React, {useEffect} from 'react';
import commentBox from 'commentbox.io';
import {useColorMode} from '@docusaurus/theme-common';

export const CommentSection = () => {
    // Depending on the theme, we will show a different
    // text color in the comments section
    const {colorMode} = useColorMode();
    const textColor = colorMode === 'dark';

    useEffect(() => {
        const box = commentBox('<replace with your id>', {
            textColor: textColor,
        });
        return () => box();
    }, [colorMode]);


    return (
        <div style={{
            marginTop: '54px',
        }} className="commentbox"/>
    );
};