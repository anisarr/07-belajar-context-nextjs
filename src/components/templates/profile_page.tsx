import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import Post from "../atoms/post";
import AllPosts from "../organisms/allpost";

export default function ProfilePage() {
    return(
        <Section2 isFancy={true}>
            <Heading>Profil Saya<Heading/>
            <Post
                
                title="Hello traveler!"
                body="Baca tentang petualangan Saya."
            />
            <AllPosts />
        </Section2>
    );
}