// importazioni
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// modulo stile
import style from '../components/Main.module.css';

// finto db
import posts from '../data/posts.js';

// array post iniziali
const initialPostsData = {
    name: '',
    image: '',
    description: '',
    category: [],
    tags: [],
    public: false
};

export default function Main() {
    const [postsData, setPostsData] = useState(initialPostsData);
    const [postList, setPostList] = useState(posts); // variabile db per chiarezza
    const [newPost, setNewPost] = useState('');

    // funzione per aggiungere un post nuovo
    function addPost(e) {
        e.preventDefault();

        // clonazione oggetto
        const newPost = {
            id: Date.now(),
            ...postsData
        };

        // aggiornamento UI
        setPostList([
            newPost,
            ...postList
        ]);

        setPostList(initialPostsData);
    }

    // funzione onChange
    function handleFormField(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setPostList({
            ...postsData,
            [e.target.name]: value
        })
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

                        {/* #region input */}
                        <div className={style.addPost}>

                            {/* input nome */}
                            <input type="text"
                                id="textInput"
                                placeholder="Titolo nuovo post"
                                value={postsData.name}
                                onChange={handleFormField} />

                            {/* input immagine */}
                            <input type="text"
                                id="textInput"
                                placeholder="URL immagine"
                                value={postsData.image}
                                onChange={handleFormField} />

                            {/* input contenuto */}
                            <textarea
                                id="descInput"
                                placeholder="Contenuto post..."
                                value={postsData.description}
                                onChange={handleFormField}>
                            </textarea>

                            {/* input select categoria */}
                            <select
                                id="selectInput"
                                placeholder="Seleziona categoria post"
                                value={postsData.category}
                                onChange={handleFormField}>
                                <option value="1">
                                    cat1
                                </option>
                                <option value="2">
                                    cat2
                                </option>
                                <option value="3">
                                    cat3
                                </option>
                                <option value="4">
                                    cat4
                                </option>
                                <option value="5">
                                    cat5
                                </option>
                            </select>

                            {/* input checkbox tags */}
                            <input type="checkbox"
                                id="checkInput1"
                                value={postsData.tags}
                                onChange={handleFormField} />
                            <label>
                                Tag1
                            </label>
                            <input type="checkbox"
                                id="checkInput2"
                                value={postsData.tags}
                                onChange={handleFormField} />
                            <label>
                                Tag2
                            </label>
                            <input type="checkbox"
                                id="checkInput3"
                                value={postsData.tags}
                                onChange={handleFormField} />
                            <label>
                                Tag3
                            </label>

                            {/* input pubblica o meno */}
                            <input type="checkbox"
                                id="checkInputPublic"
                                value={postsData.public}
                                onChange={handleFormField} />
                            <label>
                                Post pubblico
                            </label>

                            {/* bottone submit */}
                            <button type="submit">
                                Aggiungi post
                            </button>
                        </div>
                        {/* #endregion input */}

                        {/* #region output */}
                        <ul>
                            {posts.map((post, index) => <li key={index}>
                                <span>
                                    {post.name}
                                </span>
                                <button onClick={handleTrashPost} data-index={index}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </li>)}
                        </ul>
                        {/* #endregion output */}
                    </form>
                </div>
            </div>
        </main>
    )
}