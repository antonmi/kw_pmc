import Image from "next/image";
import styles from "./page.module.css";
import { getList } from './sheets';
export default async function Home() {
  var answers = await getList();
  answers = answers.filter((el) => el.display == "yes");
  answers = answers.sort((a, b) => a.position - b.position);

  const listItems = answers.map((element, i) => {
    return (
      <ul type="disc" className="item" key={i}>
        <li>
          <p>{element.timestamp}</p>
          <p>{element.name}</p>
          <p>{element.city}</p>
        </li>
      </ul>
    );
  });

  return (
    <main className={styles.main}>
      <div>
        {listItems}
      </div>
    </main>
  );
}
