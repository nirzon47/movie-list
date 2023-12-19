const CardItem = (props) => {
	return (
		<div className='flex h-56 w-[80vw] rounded-md'>
			<div className='w-1/2 h-full'>{props.name}</div>
			<div
				className='w-1/2 h-full bg-center bg-no-repeat bg-cover'
				style={{ backgroundImage: `url(${props.thumbnail})` }}
			></div>
		</div>
	)
}

export default CardItem
