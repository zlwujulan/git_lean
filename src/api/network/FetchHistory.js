/**
 * HTTP请求的历史记录，用于在开发测试阶段记录每一个HTTP请求。便于进行测试
 * @providesModule FetchHistory
 */

class FetchHistory {
    history = [];

    // 插入一条记录
    insertData(fetchProgress) {
        this.history.unshift(fetchProgress);
    }

    // 移除一条记录
    removeData(fetchProgress) {
        const index = this.history.indexOf(fetchProgress);
        if (index > -1) {
            this.history.splice(index, 1);
        }
    }

}

const fetchHistory = new FetchHistory();

export default fetchHistory;
