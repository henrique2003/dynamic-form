import { TfiText } from 'react-icons/tfi'

const Home: React.FC = () => {
  return (
    <div className="w-full bg-zinc-800 min-h-screen flex">
      <div className="max-w-[400px] px-10 py-10 flex-1 bg-zinc-900">
        <h3 className="text-2xl text-slate-200 border-b-2 border-zinc-600 pb-5 mb-5">Componentes</h3>
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="p-2 py-[5px] flex justify-center items-center bg-zinc-800 rounded-[10px] gap-2">
            <TfiText size={20} color='orange' />
            <p>text</p>
          </div>
          <div className="p-2 py-[5px] flex justify-center items-center bg-zinc-800 rounded-[10px] gap-2">
            <TfiText size={20} color='orange' />
            <p>Texto</p>
          </div>
          <div className="p-2 py-[5px] flex justify-center items-center bg-zinc-800 rounded-[10px] gap-2">
            <TfiText size={20} color='orange' />
            <p>Texto</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
