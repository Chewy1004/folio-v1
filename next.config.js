/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // This line is commented out, which is correct.
  },
  optimizeFonts: false, // This line is moved under the nextConfig object.
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "s3.amazonaws.com"],
  },
  // Font loading configuration should be done differently; fontLoaders is not recognized.
  // Consider using @font-face CSS rule or any specific font loader modules/packages available for Next.js.
};

module.exports = nextConfig;
