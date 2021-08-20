import dynamic from 'next/dynamic'

const polyfills = () => {
  if (typeof window !== 'undefined') {
    if (typeof window.IntersectionObserver === 'undefined') {
      dynamic(() => import('intersection-observer'))
    }
  }
}

export default polyfills
