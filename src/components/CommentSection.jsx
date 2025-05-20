import {useEffect} from 'react';
import commentBox from 'commentbox.io';

export const CommentSection = () => {

    useEffect(() => {
        const box = commentBox('5729242960625664-proj', {
        });
        return () => box();
    });


    return (
        <div style={{
            marginTop: '54px',
        }} className="commentbox"/>
    );
};