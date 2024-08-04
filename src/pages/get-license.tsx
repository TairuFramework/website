import Heading from '@theme/Heading'
import Layout from '@theme/Layout'

import StripePricingTable from '../components/StripePricingTable'

export default function GetLicensePage() {
  return (
    <Layout>
      <div className="container margin-vert--lg">
        <Heading as="h1">Get a license</Heading>
        <p>Get a license for commercial use based on how many accounts interact with your app.</p>
      </div>
      <StripePricingTable
        darkID="prctbl_1PF1kSIGIUFC1uxaU2c7fZeX"
        lightID="prctbl_1PEzOpIGIUFC1uxaopBbnBRx"
        publishableKey="pk_test_51P4po6IGIUFC1uxa5zKa9wPwmRVeQSIEqsUDaDWKnPbSIbw4UEhn8RTiAwA6vKNrRkadeCXzfcZBTnQSkJfwMemm00RGE80Px2"
      />
    </Layout>
  )
}
