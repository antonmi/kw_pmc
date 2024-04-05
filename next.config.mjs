/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            "key": "Cache-Control",
            "value": "max-age=10"
          },
        ],
      },
    ]
  },
};

export default nextConfig;
