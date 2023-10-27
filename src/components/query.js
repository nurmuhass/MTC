//get products
 
export const [posts, setPosts] = useState(null);
const [loading, setLoading] = useState(true);
const [deleted, setDeleted] = useState(false);



const fetchPosts = async () => {
  try {
    const list = [];

    const querySnapshot =   await getDocs(collection(db, "post"));

        querySnapshot.forEach((doc) => {
          const {
            userId,
            Img,
            Img2,
            postTime,
            likes,
            comments,
            price,
            desc,
            title,
            quantity,
          } = doc.data();
          list.push({
            id: doc.id,
            userId,
            userName: 'Test Name',
            userImg:
              'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
            postTime: postTime,
            Img,
            Img2,
            liked: false,
            likes,
            comments,
            price,
            desc,
            title,
            quantity,
         
        });
      });

    setPosts(list);
      if(loading){
        setLoading(false)
      }
 
  } catch (e) {
    console.log(e);
  }
};

useEffect(() => {
  fetchPosts();
}, [useIsFocused]);
