interface ICard {
id: number
}
export default function Card({id} : ICard) {
    console.log(id)
  return (
    <div>Card {id}</div>
  )
}
