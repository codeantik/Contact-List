import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/persons.module.css'

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    return {
        props: {
            persons: data
        }
    }
}

const Persons = ({ persons }) => {
    return ( 
        <>
            <Head>
                <title>Contact List | List</title>
                <meta name="keywords" content="contacts" />
            </Head>
            <div>
                <h1>All People</h1>
                {persons.map(person => (
                    <Link href={`/persons/${person.id}`} key={person.id}>
                        <a className={styles.single}>
                            <h3>{person.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Persons;