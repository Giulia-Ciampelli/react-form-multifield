// importazioni
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// modulo stile
import style from '../components/Main.module.css';

// array post iniziali
const initialPosts = {
    name: '',
    image: '',
    description: '',
    category: [],
    tags: [],
    public: false
};

export default function Main() {
    const [posts, setPosts] = useState(initialPosts);
    const [newPost, setNewPost] = useState('');

    // funzione per aggiungere un post nuovo
    function addPost(e) {
        e.preventDefault();

        // clonazione array
        const newPosts = {
            newPost,
            ...posts
        };

        // aggiornamento UI
        setPosts(newPosts);
    }

    // funzione onChange
    function handleFormField(e) {

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
                                value={newPost}
                                onChange={handleFormField} />

                            {/* input immagine */}
                            <input type="text"
                                id="textInput"
                                placeholder="URL immagine"
                                value={newPost}
                                onChange={handleFormField} />

                            {/* input contenuto */}
                            <textarea
                                id="descInput"
                                placeholder="Contenuto post..."
                                value={newPost}
                                onChange={handleFormField}>
                            </textarea>

                            {/* input select categoria */}
                            <select
                                id="selectInput"
                                placeholder="Seleziona categoria post"
                                value={newPost}
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
                                value={newPost}
                                onChange={handleFormField} />
                            <label>
                                Tag1
                            </label>
                            <input type="checkbox"
                                id="checkInput2"
                                value={newPost}
                                onChange={handleFormField} />
                            <label>
                                Tag2
                            </label>
                            <input type="checkbox"
                                id="checkInput3"
                                value={newPost}
                                onChange={handleFormField} />
                            <label>
                                Tag3
                            </label>

                            {/* input pubblica o meno */}
                            <input type="checkbox"
                                id="checkInputPublic"
                                value={newPost}
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