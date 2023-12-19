import Filter from './Filter'
import { FaShareAlt } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

const CardItem = (props) => {
	return (
		<div className='relative overflow-hidden rounded-lg shadow-[10px_10px_100px_0px_rgba(0,0,0,0.40)] shadow-red-700'>
			<div className='flex h-96 w-[80vw]'>
				<div className='z-20 flex flex-col justify-between w-1/2 h-full gap-8 p-8'>
					<div className='flex gap-8'>
						<img src={props.image} alt='movie poster' className='h-56' />
						<div>
							<h2 className='text-3xl'>{props.name}</h2>
							<p className='mb-2 text-lg text-blue-200'>
								{props.year}, {props.director}
							</p>
							<div className='flex items-center gap-4 mb-8 text-xs'>
								<p className='px-2 py-1 border border-white rounded-md'>
									{props.duration}
								</p>
								<p className='text-sm text-blue-100'>
									{props.genre.map((genre, index) =>
										index === props.genre.length - 1
											? genre + '.'
											: genre + ', '
									)}
								</p>
							</div>
							<p className='text-white'>{props.desc}</p>
						</div>
					</div>
					<div className='flex gap-12 text-gray-400'>
						<FaShareAlt className='duration-300 cursor-pointer hover:text-green-500' />
						<FaHeart className='duration-300 cursor-pointer hover:text-red-500' />
						<FaMessage className='duration-300 cursor-pointer hover:text-blue-500' />
					</div>
				</div>
				<div
					className='w-1/2 h-full bg-no-repeat bg-cover'
					style={{
						backgroundImage: `url(${props.thumbnail})`,
					}}
				></div>
			</div>
			<Filter />
		</div>
	)
}

export default CardItem
