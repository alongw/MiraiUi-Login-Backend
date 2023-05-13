// 读取配置文件
import fs from 'fs'

export default (() => {
    try {
        const temp = fs.readFileSync('./config.json', 'utf8')
        return JSON.parse(temp)
    } catch (error) {
        console.log('读取配置文件失败！')
        console.log(error)
        return null
    }
})()