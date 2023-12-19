import AnimatedCursor from 'react-animated-cursor'
import Cards from './Cards/Cards'
import Header from './Header'

const App = () => {
	return (
		<div className='min-h-screen text-white bg-black'>
			<AnimatedCursor />
			<Header />
			<Cards />
		</div>
	)
}
export default App
