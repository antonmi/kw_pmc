/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            "key": "Cache-Control",
            "value": "maxage=10"
          },
        ],
      },
    ]
  },
};

export default nextConfig;
