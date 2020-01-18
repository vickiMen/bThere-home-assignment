const dotenv = require('dotenv')
dotenv.config({path: '../../.env'})

const config = {
    
    base_url: process.env.BASE_URL,
    port: process.env.PORT,
    
    db: {
        server: process.env.DB_SERVER,
        authentication: {
            type: process.env.DB_TYPE,
            options: {
                userName: process.env.DB_USER,
                password: process.env.DB_PASS
            }
        },
        options: {
            database: process.env.DB_NAME
        }
    },

    gcloud: {
        projectId: process.env.GCLOUD_PROJECT_ID,
        keyFilename: process.env.GCLOUD_KEY_FILENAME_PATH,
        bucket: process.env.GCLOUD_STORAGE_BUCKET,
    }
}

module.exports = config