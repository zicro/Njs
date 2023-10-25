import { useRouter } from "next/router";


const Article = () => {
    const route = useRouter();
    // get the id from the path articles/11
    const id = route.query.id;
    return (
        <div>
            the Article number {id}
        </div>
    );
}

export default Article;