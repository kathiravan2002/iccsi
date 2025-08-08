import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({ title, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="ICCSI, International Conference on Computer Science Innovations  ,ICCSI, computer science conference 2025, AI conference, machine learning conference, data science conference, technology conference, software engineering, cyber security, big data, cloud computing, computer vision, IoT, blockchain, academic conference, research conference, call for papers" />
      <meta name="description" content="Join the International Conference on Computer Science Innovations to explore the latest breakthroughs in AI, machine learning, data science, cybersecurity, IoT, blockchain, and emerging technologies. Network with researchers, academics, and industry leaders worldwide." />
      <meta name="author" content="ICCSI Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Conference on Computer Science Innovations" />
      <meta property="og:description" content="Join the International Conference on Computer Science Innovations to explore the latest breakthroughs in AI, machine learning, data science, cybersecurity, IoT, blockchain, and emerging technologies. Network with researchers, academics, and industry leaders worldwide." />
      <meta property="og:url" content="https://ic-csi.com/" />
      <meta property="og:image" content="https://ic-csi.com/images/iccsilogo.png" />

      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="https://ic-csi.com/images/logo1.png" />

    </Helmet>
  )
}

export default HelmetComponent