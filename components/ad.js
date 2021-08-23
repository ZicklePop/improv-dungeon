const Ad = ({ name, url }) => (
  <p className="my-4 text-black dark:text-white sm:text-center">
    <a href={'https://melkat.deals/'} className={'font-bold text-black dark:text-white'}>
      melkat.deals
    </a>
    {name && url ? (<>
      : Support my work by giving{' '}
      <a href={url} className={'font-bold'}>
        {name}
      </a>
      {' '}a try.
    </>) : ': Support my work by checking these links.'}
  </p>
)

export default Ad
