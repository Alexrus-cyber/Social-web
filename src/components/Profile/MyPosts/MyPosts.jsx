import React, {useState} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {


    const [count, setCount] = useState(3);
    const [post, setPosts] = useState([])
    const textInput = React.createRef();
    const clicker = () => {
        let postsValue = textInput.current.value;
        let posts = [postsValue,...post]
        if (postsValue !== ''){
            setPosts(posts);
            setCount(count + 1)
        }
        textInput.current.value='';
    }

    return (
            <div>
                My posts {count}
                <div className={styles.container}>
                    <div className={styles.textAreaCont}>
                        <textarea id={'text'}  className={styles.textArea}
                                ref={textInput}>
                        </textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={clicker} type={"submit"} className={styles.button}>Send</button>
                    </div>
                    <div>
                        {post.map((item)=> <Post messsage={item} count = {count}/>)}
                    </div>
                </div>
                    <div className={styles.posts}>

                       <Post messsage={"Как ты знаешь сейчас проходит The International 11, а для меня, и многих моих подписчик" +
                           "ов, как для людей, которые посвятили жизнь доте это очень важное событие. Dota 2 - это мой источник дохода и это может стать " +
                           "и твоим источником дохода если ты этого захочешь. За несколько дней турнира я и моя команда из закрытого клуба " +
                           "заработали уже более 500.000руб чистой прибыли, неплохо правда? Думаю что да, учитывая тот факт что в день уходит всего пару часов времени))"}
                             />
                       <Post messsage={"🥳 Ты выиграл ИГРОВОЙ ПК поздравляю, Алексей.\n" +
                           "\n" +
                           "Вот именно такое сообщение тебе может прийти 9 ноября, когда я подведу итоги розыгрыша из закрепа.\n" +
                           "\n" +
                           "Но у меня есть вопрос. Окей, ты возьмёшь приз или деньги, без разницы. Поменяется ли кардинально твоя жизнь?\n" +
                           "\n" +
                           "Только честно!\n" +
                           "\n" +
                           "Подумал……\n" +
                           "\n" +
                           "У меня кое-что для тебя есть, просто напиши кодовое слово «КОМП»"} />
                       <Post messsage={"Забирай доступ в закрытый клуб в котором я уже слил предикт на матч Secret vs VIRTUS PRO, БЕСПЛАТНО. Не пропускай розыгрыш игрового пк в посте ниже 👇\n" +
                           "\n" +
                           "Просто пиши - МАТЧ в ответ на это сообщение\n" +
                           "\n" +
                           "Не хочешь участвовать в розыгрышах? Пиши /отписаться"} />
                    </div>
            </div>

    );
}

export default  MyPosts;