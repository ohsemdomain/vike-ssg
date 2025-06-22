import type { Config } from 'vike/types'

// https://vike.dev/config
export default {
  // Optimize for static generation
  prerender: true,
  
  // Optimize client-side hydration
  clientRouting: true,
} satisfies Config
