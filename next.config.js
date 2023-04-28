/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			'scontent.cdninstagram.com',
			'graph.instagram.com',
			'images.prismic.io'
		],
		minimumCacheTTL: 600,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'scontent.cdninstagram.com'
			},
			{
				protocol: 'https',
				hostname: 'graph.instagram.com'
			},
			{
				protocol: 'https',
				hostname: 'images.prismic.io'
			}
		]
	}
}
