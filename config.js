/**
 * 连接串配置
 */
const mssqlConfig = {
    'user': 'sa',
    'password': 'super@412',
    'server': '192.168.1.111',
    'database': 'nodeTest',
    'options': {
        'encrypt': false
    }
};

module.exports = mssqlConfig;