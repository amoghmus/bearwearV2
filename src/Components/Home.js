import Button from './Button'
// import './App.css'

function Home() {
    return (
        <div className="pb-10 pt-10 flex flex-col justify-center">
        <header className="App-buttons">
          <div className='text-amber-400'>
            <Button name='Outer' />
          </div>
          <div className='text-amber-500'>
            <Button name='Tops' />
          </div>
          <div className='text-amber-600'>
            <Button name='Bottoms' />
          </div>
          <div className='text-amber-700'>
            <Button name='Accessories' />
          </div>
          <div className='text-amber-800'>
            <Button name='Dresses' />
          </div>
          <div className='text-amber-900'>
            <Button name='Shoes' />
          </div>
        </header>
      </div>
    );
}

export default Home