const {
	NODE_ENV,
	DB_HOST,
	DB_DATABASE,
	DB_USER,
	DB_PASSWORD,
	DB_PORT,
	DB_MACHINE,
	SECRET,
	PORT,
	DEPLOY_DB_HOST,
	DEPLOY_DB_DATABASE,
	DEPLOY_DB_USER,
	DEPLOY_DB_PASSWORD,
	DEPLOY_DB_PORT,
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
} = process.env

const ENV = {
	development: {
		NODE_ENV,
		DB_HOST,
		DB_DATABASE,
		DB_USER,
		DB_PASSWORD,
		DB_PORT,
		DB_MACHINE,
		SECRET,
		PORT,
		AWS_ACCESS_KEY_ID,
		AWS_SECRET_ACCESS_KEY,
	},
	staging: {
		NODE_ENV,
		DB_HOST: DEPLOY_DB_HOST,
		DB_DATABASE: DEPLOY_DB_DATABASE,
		DB_USER: DEPLOY_DB_USER,
		DB_PASSWORD: DEPLOY_DB_PASSWORD,
		DB_PORT: DEPLOY_DB_PORT,
		DB_MACHINE,
		SECRET,
		PORT,
		AWS_ACCESS_KEY_ID,
		AWS_SECRET_ACCESS_KEY,
	},
}

function getEnvVars(env = '') {
	if (env === 'production') return ENV.production
	if (env === 'staging') return ENV.staging
	return ENV.development
}

export default getEnvVars(process.env.NODE_ENV)
