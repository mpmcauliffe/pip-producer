import React, { useContext, } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { Link, } from 'react-router-dom'
import { UserContainer, } from '../styled-components'


const EditBar = ({ article, user, }) => {
    const articleContext = useContext(ArticleContext)
    const { deleteArticle, getSingle, } = articleContext


    if (user.role === 'admin' || article.user === user._id) {
        return (
            <UserContainer published={article.isPublished}> 
                <Link 
                    to={`/create/${article._id}/${user._id}`} 
                    onClick={() => getSingle(article._id, user._id)}
                    style={{ textDecoration: 'none', }}

                >   <p className='small-use edit-use'>Edit</p>
                </Link>

                <p
                    onClick={() => deleteArticle(article._id)} 
                    className='small-use delete-use'
                >   Delete
                </p>
            </UserContainer>
        )
    } else {
        return <div style={{ height: '.1rem', background: '#fbfbfb' }} />
    }
}


export { EditBar }
