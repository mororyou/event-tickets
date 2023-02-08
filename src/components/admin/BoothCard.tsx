import Image from 'next/image'

const BoothCard = () => {
  return (
    <article className="col-span-1 grid grid-cols-12 grid-rows-3 rounded-xl bg-white p-4 shadow-lg">
      <div className="col-span-4 row-span-3">
        <Image
          src={'/images/standby.png'}
          alt=""
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
      <div className="col-span-8 row-span-1">b</div>
      <div className="col-span-8 row-span-1">c</div>
      <div className="col-span-8 row-span-1">d</div>
    </article>
  )
}

export default BoothCard
