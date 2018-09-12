
export const addArticle = (id,article) => (
    {    
    type:'ADD_ARTICLE',
    payload:{
        id:id,
        article:article
    }
});