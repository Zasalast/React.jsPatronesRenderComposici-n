import React from 'react';
import './TodosLoading.css';
 import ContentLoader from 'react-content-loader'
function TodosLoading() {
  return (
     <ContentLoader
             rtl
      speed={2}
         width={"100%"}
    height={160}
    viewBox="0 0 100% 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
     
    >  
     <rect x="0" y="0"   width="100%" height="38" />
      <rect x="0" y="40"   width="100%" height="38" />
       
      <rect x="0" y="80"   width="100%" height="38" />
      <rect x="0" y="120"   width="100%" height="38" />
    </ContentLoader>  
  );
}

export { TodosLoading };