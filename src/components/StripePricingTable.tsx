import { useColorMode } from '@docusaurus/theme-common'
import { createElement, useEffect } from 'react'

export type Props = {
  darkID: string
  lightID: string
  publishableKey: string
}

export default function StripePricingTable({ darkID, lightID, publishableKey }: Props) {
  const { colorMode } = useColorMode()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.stripe.com/v3/pricing-table.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return createElement('stripe-pricing-table', {
    'pricing-table-id': colorMode === 'dark' ? darkID : lightID,
    'publishable-key': publishableKey,
  })
}
