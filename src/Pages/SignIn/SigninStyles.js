import signImg from '../../Assets/signImg.jpg'

export const HomeScreenStyles = {
    height: "100vh",
      display: "grid",
      justifyContent: "center",
      alignItems: "center", 

    //  backdropFilter: 'blur(8px)',
    //  WebkitFilter: 'blur(8px)' ,
      // backgroundImage: `url(${signImg})`,
      backgroundSize: "cover",
   

}

export const picts = {
  backgroundImage: `url(${signImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right"
}


export const btn = { backgroundColor: "black",mb:2};

export const link = { typography: "body1"};
