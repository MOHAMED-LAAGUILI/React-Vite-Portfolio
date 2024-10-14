
import HeroImage from '../assets/profile-img1.jpg'
import Layout from './Layout/Layout';

const Hero = () => {
  return (
    <Layout title='Hero Page'>

    <div className='bg-black text-white text-center py-16 pt-20'>
        <img src={HeroImage} alt="Mohamed Laaguili image" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-900 transition-colors duration-500'>
            I&apos;m {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mohammad Yousof</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
        </Layout>
  )
}

export default Hero