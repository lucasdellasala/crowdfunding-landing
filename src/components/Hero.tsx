interface HeroProps {
  title: string;
  profilePic: string;
}

function Hero({ title, profilePic }: Readonly<HeroProps>) {
  return <div className="hero">
  <img src={profilePic} alt="profile pic" className="profilePic"/>
  <h1 className="title">{title}</h1>
  </div>
}

export default Hero
