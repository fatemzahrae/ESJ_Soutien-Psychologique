/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns :[
            {
                protocol: "https",
                hostname:"cdn-icons-png.freepik.com",
            }
        ]
    }
};

export default nextConfig;
