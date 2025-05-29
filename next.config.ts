import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dkwdijf8x/**",
        search: "",
      },
    ],
  },
  experimental: {
    // appDir: true,

    viewTransition: true,
  },
}

export default nextConfig
