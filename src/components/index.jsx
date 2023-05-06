import Image from '../assets/pic.jpg';

export function Home() {
  return(
    <div className='indexbody'>
      <h1>My App</h1>
      <h4>Welcom to Gadgets-hub, not the secret hub you know.</h4>
      <div className='imager'><img src={Image} alt='pic' width={1366} height={380}/></div>
    </div>
  );
}