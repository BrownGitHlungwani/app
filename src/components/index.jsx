import Image from '../assets/pic.jpg';

export function Home() {
  return(
    <>
      <h1>My App</h1>
      <p>E-Commerce</p>
      <div className='imager'><img src={Image} alt='pic' width={1340} height={400}/></div>
    </>
  );
}