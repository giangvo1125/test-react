var config = {
	development: {
		port: 3049,
		domain: 'localhost',
		myKey: 'B3JSHBBY-2IVG9VUI-LTWJ20K9-820I953A', 
		mySecret: '15785c0e93066f9d8f5cb7d08c6a5e0c584f3abb77c0d01f2abcbe63df730a9616811ea449529a8a50778fd100cb3aa25aeb6eadd578990964a14b382da684ab', 
		usdt: [
			'USDT_BTC', 
			'USDT_XRP', 
			'USDT_STR', 
			'USDT_ETH', 
			'USDT_BCH', 
			'USDT_ETC', 
			'USDT_NXT', 
			'USDT_LTC', 
			'USDT_ZEC', 
			'USDT_DASH', 
			'USDT_XMR', 
			'USDT_REP'
		], 
	},
	production: {
		port: 3049,
		domain: 'localhost',
		myKey: 'B3JSHBBY-2IVG9VUI-LTWJ20K9-820I953A', 
		mySecret: '15785c0e93066f9d8f5cb7d08c6a5e0c584f3abb77c0d01f2abcbe63df730a9616811ea449529a8a50778fd100cb3aa25aeb6eadd578990964a14b382da684ab', 
		usdt: [
			'USDT_BTC', 
			'USDT_XRP', 
			'USDT_STR', 
			'USDT_ETH', 
			'USDT_BCH', 
			'USDT_ETC', 
			'USDT_NXT', 
			'USDT_LTC', 
			'USDT_ZEC', 
			'USDT_DASH', 
			'USDT_XMR', 
			'USDT_REP'
		], 
	},
	
}
const env = process.env.NODE_ENV || 'development'

module.exports = config[env];
