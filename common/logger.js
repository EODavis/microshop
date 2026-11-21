export const createLogger = (service) => (level, msg, extra = {}) =>
    console.log(JSON.stringify({ time: new Date().toISOString(), service, level, msg, ...extra }));
