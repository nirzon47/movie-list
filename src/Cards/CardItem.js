import Filter from './Filter'
import { FaShareAlt } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

const CardItem = (props) => {
	return (
		<div className='relative overflow-hidden rounded-lg shadow-[10px_10px_100px_0px_rgba(0,0,0,0.40)] shadow-red-700'>
			<div className='flex h-[50rem] lg:h-96 lg:w-[80vw]'>
				<div className='z-20 flex flex-col justify-between h-full gap-8 p-8 lg:w-1/2'>
					<div className='flex flex-col gap-8 lg:flex-row'>
						<img src={props.image} alt='movie poster' className='lg:h-56' />
						<div>
							<h2 className='text-2xl lg:text-3xl'>{props.name}</h2>
							<p className='mb-2 text-blue-200 lg:text-lg'>
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
							<p className='text-sm text-white lg:text-base'>{props.desc}</p>
						</div>
					</div>
					<div className='flex justify-center gap-12 text-gray-400 lg:justify-start'>
						<FaShareAlt className='duration-300 cursor-pointer hover:text-green-500' />
						<FaHeart className='duration-300 cursor-pointer hover:text-red-500' />
						<FaMessage className='duration-300 cursor-pointer hover:text-blue-500' />
					</div>
				</div>
				<div
					className='hidden w-1/2 h-full bg-no-repeat bg-cover lg:inline-block'
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
