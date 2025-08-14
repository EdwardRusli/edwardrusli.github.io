import './app.css'



function App() {

const handlePlay = () => {
    const audio = new Audio("/quack.mp3");
    audio.play();
  };

    return (
      <>

          <div className="flex flex-col pb-12 px-12 sm:px-36 md:px-48 lg:px-52 items-center min-h-screen bg-blue-400">
            <img className='sm:max-w-2/3 lg:max-w-1/3 xl:max-w-1/4' src="/duck.png" alt="bebek" onClick={handlePlay}/>
            <h2 className='text-white'>(tap me!)</h2>
            <h1 className=' mt-8 font-sans text-white font-bold text-4xl self-start'>Dear Gisel,</h1>
            
            <p className='pt-4 font-sans text-white font-semibold text-justify'>Happy 16th Birthday! Semoga sehat selalu n panjang umur 🥳🥳🥳<br></br><br />
            I hope this year brings you a lot of joy and happiness, and may all your hopes and dreams come true!<br></br> <br />
            Meskipun u sibuk banget, I hope u still find the time to have fun, relax, and enjoy life with all the lovely people around you. Along the way, pasti ada aja orang yg nyebelin, tapi I know that u can handle everything that comes your way and much, much more.<br></br>
            <br></br>
            I am so incredibly grateful to have you in my life. From the moment kita deket, you have brought so much joy and happiness to me, and I hope that I made you feel the same way. I want to give you all the attention and love you deserve, to be someone you can always rely on,<br></br>
            to always be here for you.<br></br>
            <br />
            I hope this lamp can light up your night n bisa temenin u tidur so u don't feel lonely hehehe <br />
            <br />
            The future is full of possibilities, for better or worse. Uncertain as it may be, I still hope to be a part of yours, no matter how far apart we may be.<br></br>
            I love you always, and want us to be able to grow together as people n selalu support each other. Even the smallest text or vn from you can bring a smile to my face everyday. i know kadang2 i nyebelin or slowres; thank you udah selalu sabar sama i 😔<br />
            <br />
            Happy birthday, my dearest Gisel!
            <br></br>
            <br />
            <span className='font-mono'>
              Your summer's day,<br />
              Edward
            </span>
            </p>
          </div>
      </>    
  )
}

export default App
