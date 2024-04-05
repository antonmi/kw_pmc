import Image from "next/image";
import styles from "./page.module.css";
import { getList } from './sheets';
import { cache } from 'react'
export default async function Home() {
  const answers = await getList();

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
      <div className={styles.description}>
        <p>
          Hello!
        </p>
      </div>
      <div>
        {listItems}
      </div>
    </main>
  );
}
