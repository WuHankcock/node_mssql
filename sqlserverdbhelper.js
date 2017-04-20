/**
 * @description : 通用sqlserverdb帮助类
 * @author : wfy
 */
const mssql = require('mssql');
const Promise = require('es6-promise').Promise

/**
 * SqlServerDbHelper类
 */
class SqlServerDbHelper {
    /**
     * 执行sql操作
     * @param : {object} dbConfig sqlserver数据库链接配置
     * @param : {string} cmd sql语句
     * @return : {promise} promise 结果
     */
    eval(dbConfig, cmd) {
        console.log(cmd);
        let promise = new Promise((resolve, reject) => {
            let connection = new mssql.connect(dbConfig, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                let ps = new mssql.PreparedStatement(connection);
                ps.prepare(cmd, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    ps.execute('', (err, result) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        ps.unprepare((err) => {
                            if (err) {
                                reject(err);
                                return;
                            }
                            resolve(result.recordsets[0]);
                        });
                    });
                });
            });
        });
        return promise;
    };
};

module.exports = new SqlServerDbHelper();