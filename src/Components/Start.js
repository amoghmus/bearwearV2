import Button from './Button'

function Start() {
    return (
        <header className='flex flex-col items-center relative'>
            <div className='text-green-700 text-bold text-3xl mt-12'>DIGITALIZE YOUR CLOSET</div>
            <div className='text-green-600 relative top-24'><Button name='SignIn' /></div>
            <div className='text-green-600 relative top-32'><Button name='SignUp' /></div>
        </header>
    )
}
export default Start