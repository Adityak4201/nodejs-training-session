import os from "os";

const osInfo = {
  arch: os.arch(),
  cpus: os.cpus(),
  endianness: os.endianness(),
  freemem: os.freemem(),
  homedir: os.homedir(),
  hostname: os.hostname(),
  loadavg: os.loadavg(),
  networkInterfaces: os.networkInterfaces(),
  platform: os.platform(),
  release: os.release(),
  tmpdir: os.tmpdir(),
  totalmem: os.totalmem(),
  type: os.type(),
  uptime: os.uptime(),
  userInfo: os.userInfo(),
};

console.log(JSON.stringify(osInfo));
