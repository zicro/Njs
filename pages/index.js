import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Pn-DFE Statistics App</title>
        <meta name="description" content="RNM Statistics App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
           إحصائيات المساجد
          </p>
          
        </div>

        <div className={styles.description}>
          <p>
            <a href='msq'
            target='_blank'>
           معطيات المساجد
           </a>
          </p>
          
        </div>

        <div className={styles.center}>
        <Image
            className={styles.logo}
            src="https://pn-dfe.xyz/img/msq_02.ico"
            alt="RNM"
            width={200}
            height={200}
            priority
          />
          <div className={styles.thirteen}>
            2023
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="/general"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              عام <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             إحصائيات مساجد المملكة بشكل عام
            </p>
          </a>

          <a
            href="/regions"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              حسب الجهات <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              إحصائيات مساجد المملكة حسب الجهات
            </p>
          </a>

          <a
            href="/province"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              حسب الأقاليم <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             احصائيات مساجد المملكة حسب الأقاليم
            </p>
          </a>

          <a
            href="/commune"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              حسب الجماعات <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             احصائيات مساجد المملكة حسب الجماعات
            </p>
          </a>


          <a
            href="/waterElec"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
             الربط بشبكتي الماء والكهرباء<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             احصائيات مساجد المملكة المربوطة بالكهرماء
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
