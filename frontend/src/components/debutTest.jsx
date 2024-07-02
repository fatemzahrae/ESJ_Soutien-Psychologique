
export default function DebutTest({desc, onStart} ) {
  return (
    <div>
      <p className='my-5'> { desc }</p>
      <button onClick={onStart} className="block bg-blue-500 text-white p-2 rounded mb-2 w-full"> Commencer le test </button>
    </div>
  )
}
