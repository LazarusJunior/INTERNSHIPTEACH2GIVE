const { v4: uuid } = require('uuid');
const { format } = require('date-fns');
const fs = require('fs').promises;
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

const LogEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    console.log(logItem);

    try {
        
        try {
            await fs.access(logDir);
        } catch (err) {
            await fs.mkdir(logDir); 
        }

    
        const logFilePath = path.join(logDir, 'eventLogs.txt');
        await fs.appendFile(logFilePath, logItem);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
};

module.exports = LogEvents;

