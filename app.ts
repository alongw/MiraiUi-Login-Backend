import config from './models/getConfig'

import express from 'express'
const app = express()

import cors from 'cors'
app.use(cors())

app.get('/api/getUsers', (req, res) => {
    // 判断密码
    if (req.query.pwd != config.password) {
        return res.send({
            status: 403,
            msg: '鉴权失败'
        })
    }
    res.send({
        status: 200,
        msg: '获取数据列表成功',
        data: config.qqlist
    })
})

app.listen(config.port, () => {
    console.log(`server running at http://localhost:${config.port}`);

})