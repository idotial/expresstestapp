var redisClient = require('redis').createClient()

redisClient.set('test.username', 'cradminwia', console.log)

export default redisClient
