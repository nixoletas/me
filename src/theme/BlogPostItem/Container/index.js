import React from 'react';
export default function BlogPostItemContainer({children, className}) {
  return (
    <>
      <article className={className}>
        {children}
      </article>
      <div style={{width: '100%', height: '1px', backgroundColor: 'grey', marginTop: '20px', marginBottom: '20px'}}></div>
    </>
  );
}
