// importazioni
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// modulo stile
import style from '../components/Main.module.css';

// array post iniziali
const initialPosts = [];

export default function Main() {
    const [posts, setPosts] = useState(initialPosts);
    const [newPost, setNewPost] = useState('');

    // funzione per aggiungere un post nuovo
    function addPost(e) {
        e.preventDefault();

        // clonazione array
        const newPosts = [
            newPost,
            ...posts
        ];

        // aggiornamento UI
        setPosts(newPosts);
        setNewPost('');
    }

    // funzione per cancellare post
    function handleTrashPost(e) {

        // trovare post giusto
        const postIndexTrash = Number(e.target.getAttribute('data-index'));

        // eliminare con filter
        const newPosts = posts.filter((post, index) => index != postIndexTrash);

        // aggiornamento UI
        setPosts(newPosts);
    }

    return (
        <main>
            <div className={style.container}>
                <div className={style.row}>
                    <form onSubmit={addPost}>
                        <div className={style.addPost}>
                            <input type="text" id="textInput" placeholder="Titolo nuovo post" value={newPost} onChange={e => setNewPost(e.target.value)} />
                            <button type="submit">
                                Aggiungi post
                            </button>
                        </div>
                        <ul>
                            {posts.map((post, index) => <li key={index}>
                                <span>
                                    {post}
                                </span>
                                <button onClick={handleTrashPost} data-index={index}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </li>)}
                        </ul>
                    </form>
                </div>
            </div>
        </main>
    )
}