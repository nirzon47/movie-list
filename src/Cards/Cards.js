import movieList from '../list.json'
import CardItem from './CardItem'

const Cards = () => {
	return (
		<main className='grid items-center justify-center grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-none md:p-8'>
			{movieList.map((item) => (
				<CardItem
					name={item.name}
					image={item.image}
					thumbnail={
						item.trailer
							? item.trailer.thumbnailUrl
							: 'https://via.placeholder.com/150'
					}
					duration={item.duration.split('PT')[1]}
					year={item.datePublished.split('-')[0]}
					genre={item.genre}
					rating={item.aggregateRating.ratingValue}
					desc={item.description}
					director={item.director[0].name}
				/>
			))}
		</main>
	)
}
export default Cards
